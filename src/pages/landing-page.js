import React from 'react';
import HAPPY_PPL_SRC from '../assets/happy-people-lib.jpg';
import EARTH from '../assets/earth.gif';

import { Section, Title, Button, Subtitle, Paragraph, CTAButton, Image } from '../components/styles';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error.message);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollPosition);
  }

  updateScrollPosition = event => {
    this.setState({ scrollYPosition: event.target.scrollingElement.scrollTop });
  };

  scrollToAction = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  render() {
    const { hasError } = this.state;
    const { setPage } = this.props;

    if (hasError) return <h1>אופס! הטקסטורה הלכה לאיבוד...</h1>;

    return (
      <>
        <Section backgroundURL={HAPPY_PPL_SRC}>
          <Title color="white">הכאבים של הכותב</Title>
          <Paragraph color="white">המסר של האפליקציה והחזון. הכל פה צריך להיות ציורי ואינטרקטיבי. אופציית סרטונים. משחקיות וקלילות. אינפוגרפיקה סטייל in a nutshell</Paragraph>
          <CTAButton onClick={ this.scrollToAction }>אני רוצה לקחת חלק בעשייה</CTAButton>
        </Section>
        <Section secondary>
          <Title display="inline">אז איך זה עובד</Title>
          <Image float="right" src={ EARTH } />
          <Paragraph>הציור האינטרקטיבי של כדור הארץ עם הידיים, כל יד לחיצה ומסבירה על שלב אחד בתהליך</Paragraph>
        </Section>
        <Section>
          <Title>פיצ׳רים</Title>
          <Subtitle>ציר הכותב</Subtitle>
          <Paragraph>הסברים ואינטרקטיביות מהדף של מיקה שמחולק לאנשים לפני טקסטורה</Paragraph>
          <Subtitle>ציר המנהל</Subtitle>
          <Paragraph>הסברים ואינטרקטיביות מהדף של מיקה שמחולק לאנשים לפני טקסטורה</Paragraph>
        </Section>
        <Section secondary>
          <Title>אז מה עכשיו</Title>
          <Button onClick={ setPage('texturas-hub') }>לקרוא</Button>
          <Button onClick={ setPage('active-textures')}>לכתוב</Button>
          <Button onClick={ setPage('textura-management') }>לנהל</Button>
        </Section>
      </>
    );
  }
}

export default LandingPage;
