import React from 'react';
import { Section, Title, Subtitle, FlexSection } from '../components/styles';
import TexturaStoryCard from '../components/textura-story-card';
import uuidV1 from 'uuid';
import { TEXTURA_THUMBNAIL_MOCK, AUTHOR_PROFILE_IMAGE_MOCK } from '../mocks';

const texturaMock = () => ({
  id: uuidV1(),
  title: 'פיש',
  texturaUnix: 1579883156,
  authorName: 'אלירן שמש',
  texturaThumbnailSrc: TEXTURA_THUMBNAIL_MOCK,
  authorProfileImageSrc: AUTHOR_PROFILE_IMAGE_MOCK,
  timeToRead: 11, // based on user test,
  stars: 355,
  comments: 72
});

class TexturasHub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: {
        mostPopular: [
          texturaMock(),
          texturaMock(),
          texturaMock(),
          texturaMock(),
          texturaMock(),
          texturaMock(),
          texturaMock(),
          texturaMock(),
          texturaMock(),
          texturaMock(),
          texturaMock()
        ]
      }
    };
  }

  renderStoryCard = story => {
    // is extracting here for each story slower than outside, then pass as props?
    const { setPage } = this.props;

    return (
      <TexturaStoryCard
        key={story.id}
        onClick={ setPage('textura') }
        {...story} />
    );
  };

  render() {
    return (
      <>
        <Title centered>דף הקורא</Title>
        <div>פוטנציאל תצוגה של מדפים בספריה ממש, או כל מה שיתאים לתמה הכללית של האתר</div>
        <FlexSection>
          <Subtitle>הכי נקראים</Subtitle>
          {this.state.stories.mostPopular.map(this.renderStoryCard)}
        </FlexSection>
        <br/>
        <Section>
          <Subtitle>מטלות שהסתיימו</Subtitle>
        </Section>
        <br/>
        <Section>
          <Subtitle>פיוטים</Subtitle>
        </Section>
        <br/>
        <Section>
          <Subtitle>קצרים</Subtitle>
        </Section>
        <br/>
        <Section>
          <Subtitle>ארוכים</Subtitle>
        </Section>
        <br/>
        <Section>
          <Subtitle>אקשן</Subtitle>
        </Section>
        <br/>
        <Section>
          <Subtitle>דרמה</Subtitle>
        </Section>
        <br/>
      </>
    );
  }
}

export default TexturasHub;
