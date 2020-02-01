import React from 'react';

import LandingPage from './pages/landing-page';
import TexturasHub from './pages/texturas-hub';
import Foo from './pages/foo';

import { LogoText, Body, Header, Logo, HeaderButton, Button } from './components/styles';
import TexturaStory from './pages/textura-story';
import TexturaStatusDishMaking from './pages/textura-status-dish-making';
import SignUpLogin from './pages/sign-up-login';
import ActiveTextures from './pages/active-textures';
import TexturaEditorManagerPage from './pages/manager/manager-textura-editor';
import Popcorn from './pages/popcorn';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollYPosition: window.scrollY,
      pageName: 'popcorn'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollPosition);
    window.addEventListener('popstate', (event) => {
      console.log('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollPosition);
  }

  updateScrollPosition = event => {
    this.setState({ scrollYPosition: event.target.scrollingElement.scrollTop });
  };

  setPage = pageName => () => {
    // TODO: deal in with-routing HOC
    window.history.pushState({ pageName }, 'Textura', pageName);
    // TODO: deal in with-scrolling HOC
    window.scrollTo(0, 0);
    this.setState({ pageName });
  };

  renderPage = () => {
    const { pageName } = this.state;
    const defaultParams = { setPage: this.setPage };

    switch (pageName) {
      case 'foo':
        return <Foo/>;

      case 'build-your-salad':
      case 'how-it-works':
        return <TexturaStatusDishMaking {...defaultParams}/>;

      case 'login':
      case 'sign-up':
        return <SignUpLogin {...defaultParams} />;

      case 'active-textures':
        return <ActiveTextures {...defaultParams}/>;

      case 'home':
      case 'landing-page':
        return <LandingPage {...defaultParams}/>;

      case 'texturas-hub':
      case 'reader-page':
        return <TexturasHub {...defaultParams}/>;

      case 'textura-editor':
        return <TexturaStory {...defaultParams}/>;

      case 'textura':
      case 'textura-story':
      case 'story-reader':
      case 'story':
        return <TexturaStory readonly {...defaultParams}/>;

      case 'textura-management':
      case 'manager-textura-editor':
      case 'textura-editor-manager':
      case 'textura-editor-manager-page':
      case 'textura-editor-page-manager':
        return <TexturaEditorManagerPage {...defaultParams}/>;

      default:
      case 'popcorn':
        return <Popcorn/>;
    }
  };

  renderHeader = () => {
    const { pageName, scrollYPosition } = this.state;
    if (pageName === 'popcorn') {
      return '';
    } else {
      return (
        <Header position={scrollYPosition}>
          <Button>Flow Mode</Button>
          <Logo onClick={this.setPage('home')}>טקסטורה</Logo>
          <LogoText onClick={this.setPage('home')}>בית קפה לכותבים</LogoText>
          <HeaderButton onClick={this.setPage('sign-up')}>היכנס</HeaderButton>
          <HeaderButton onClick={this.setPage('build-your-salad')}>☆</HeaderButton>
        </Header>
      );
    }
  };

  render() {
    return (
      <Body>
        {this.renderHeader()}
        {this.renderPage()}
      </Body>
    );
  }
}

export default App;
