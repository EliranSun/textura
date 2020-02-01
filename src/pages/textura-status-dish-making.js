import React from 'react';
import { HugeTitle, Image, Title } from '../components/styles';
import SaladMaking from '../assets/salad-making.gif';

// TODO: name is WIP. TBD based on app theme
class TexturaStatusDishMaking extends React.Component {
  renderTitles = () => {
    const { gift } = this.props;
    if (gift) {
      return <Title centered>{gift}</Title>;
    }

    return (
      <>
        <HugeTitle centered>להרכיב את הסלט שלך/איך זה עובד</HugeTitle>
        <Title centered>האם זה מסך הסטטוס/הרכבת המנה ממש, או משהו אחר?</Title>
      </>
    );
  };

  render() {
    return (
      <>
        { this.renderTitles() }
        <Image centered src={SaladMaking}/>
      </>
    );
  }
}

export default TexturaStatusDishMaking;
