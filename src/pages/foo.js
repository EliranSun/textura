/* eslint-disable */
import React, { Component } from 'react';

// const withButtonAdjustments = (ComposedComponent, config) => {
//   class AdjustedButton extends Component {
//     constructor(props) {
//       super(props);
//       if (!config.containerSelectorName) {
//         throw new Error(`containerSelectorName must be provided. got ${config.containerSelectorName} instead`);
//       }
//
//       this.state = {
//
//       };
//     }
//
//     componentDidMount() {
//       console.log(this.props.children, ComposedComponent);
//     }
//
//     isTextLengthExceedingButtonWidth() {
//
//     }
//
//     canButtonBeExtended() {
//
//     }
//
//     render() {
//       return <ComposedComponent { ...this.props } />;
//     }
//   }
//
//   return AdjustedButton;
// };

// TODO: this returns 16, and yet the size was 11px
// const BASE_FONT_SIZE = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);
const BASE_FONT_SIZE = 12;

export class ButtonAdjuster extends Component {
  constructor(props) {
    super(props);
    if (!props.containerSelectorName) {
      throw new Error(`containerSelectorName must be provided. Got ${props.containerSelectorName} instead`);
    }

    this.state = {
      hasError: false,
      container: {},
      buttons: {}
    };

    this.adjusterRef = React.createRef();
  }

  componentDidMount() {
    this.setElementsSizes();
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // TODO: protect
  //   this.setButtonsDOMStyle();
  // }

  setButtonsDOMStyle = ({ container, buttons }) => {
    const componentDOMElement = this.adjusterRef.current;
    // TODO: order of elements here is not matching this component buttons array!!!
    for (const [index, button] of buttons.entries()) {
      componentDOMElement.children[index].style.width = `${button.width}px`;
      componentDOMElement.children[index].style.maxWidth = `${container.width / buttons.length}px`;
    }
  };

  setElementsSizes = () => {
    const componentDOMElement = this.adjusterRef.current;
    const { containerSelectorName } = this.props;
    this.setButtonsDOMStyle(this.getAdjustedDimensions({
      container: this.getContainerDimensions(componentDOMElement, containerSelectorName),
      buttons: this.getButtonsProperties(componentDOMElement)
    }));
  };

  getAdjustedDimensions = ({ container, buttons }) => {
    let adjustedButtons = [];
    for (const button of buttons) {
      if (this.isTextOverflow(button)) {
        let width = button.width;
        while (this.isButtonExtendable(width, button.text, buttons.length, container.width)) {
          width += 10;
        }

        // not good, as other props can be inherited from original array
        adjustedButtons.push({
          width,
          textLength: button.textLength,
          fontSize: button.fontSize,
          text: button.innerText
        });
      } else {
        // console.log()
      }
    }

    return { container, buttons: adjustedButtons };
  };

  extractButtonProperties = button => {
    return ({
      width: button.clientWidth,
      textLength: button.innerText && button.innerText.length,
      text: button.innerText,
      fontSize: button.style.fontSize || BASE_FONT_SIZE
    });
  };

  getButtonsProperties = componentDOMElement => {
    const containerDomChildren = componentDOMElement.children;
    const buttons = [];

    if (typeof containerDomChildren === 'object') {
      // array handler
      for (const element of containerDomChildren) {
        buttons.push(this.extractButtonProperties(element));
      }
    } else {
      // text handler
      buttons.push(this.extractButtonProperties(containerDomChildren));
    }

    return buttons;
  };

  getContainerDimensions = (componentDOMElement, containerSelectorName) => {
    const containerDomElement = componentDOMElement.closest(containerSelectorName);
    if (containerDomElement) {
      return {
        width: containerDomElement.clientWidth,
        height: containerDomElement.clientHeight
      };
    }

    return {};
  };

  isTextOverflow = button => {
    const test = document.createElement('div');
    test.innerText = button.text;
    test.style.fontSize = `${BASE_FONT_SIZE}px`;
    test.style.display = 'inline-block';
    document.body.appendChild(test);
    const height = test.clientHeight + 1;
    const textWidth = test.clientWidth + 1;
    document.body.removeChild(test);

    return textWidth > button.width;
  };

  isButtonExtendable = (width, text, buttonsLength, containerWidth) => {
    const condition = this.isTextOverflow({ width, text });
    // console.log({ text, textExceed: condition, width });
    if (condition) {
      return width < (containerWidth / buttonsLength);
    } else {
      return false;
    }
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.children;
    }

    return (
      <span ref={ this.adjusterRef }>
        { this.props.children }
      </span>
    );
  }
}


const buttonStyle = {
  maxWidth: '10px'
};

const containerStyle = {
  width: '480px',
  background: 'tomato'
};

const Button = ({ text, children }) => {
  return <button style={buttonStyle}>{children || text}</button>;
};

// const TestButton = withButtonAdjustments(Button, {
//   containerSelectorName: '.container'
// });

export class Foo extends Component {
  render() {
    return (
      <div className="container" style={containerStyle}>
        <div className="im here to ruin your DOM tree width">
          <ButtonAdjuster containerSelectorName=".container">
            <Button>REGISTER BLA B</Button>
            {/*<Button>REGISTER</Button>*/}
            <Button>LOGIN.OR.REALLY.LONG.TEXT.THAT.DOES.NOT.BREAK.UP</Button>
          </ButtonAdjuster>
        </div>
      </div>
    );
  }
}

export default Foo;
