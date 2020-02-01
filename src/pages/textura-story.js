import React from 'react';

import { STORY_MOCK, TEXTURA_THUMBNAIL_MOCK, AUTHOR_PROFILE_IMAGE_MOCK } from '../mocks';
import { FlexSection, Subtitle, Thumbnail, Title, FlexImage, TTL, FixedDiv, CTAButton } from '../components/styles';
import { fetchStory } from '../api/fetcher';

import Comments from '../components/comments';

// if readonly=false, will return the textura editor
const TexturaStory = ({ readonly }) => {
  fetchStory()
    .then(results => {
      console.log(results);
    });

  if (readonly) {
    return (
      <FlexSection>
        <FlexImage src={TEXTURA_THUMBNAIL_MOCK}/>
        <Thumbnail src={AUTHOR_PROFILE_IMAGE_MOCK}/>
        <Title>פיש</Title>
        <Subtitle>אלירן שמש</Subtitle>
        <p>{STORY_MOCK}</p>
        <Comments/>
      </FlexSection>
    );
  } else {
    return (
      <FlexSection>
        <FixedDiv>
          {/* TODO: export to components */}
          <TTL>🕐</TTL> זמן להגשה
          <TTL>🗑️</TTL>זרקת 20 טקסטורות לפח
          <CTAButton>הגשה</CTAButton>
        </FixedDiv>
        <FlexImage src={TEXTURA_THUMBNAIL_MOCK}/>
        <Thumbnail src={AUTHOR_PROFILE_IMAGE_MOCK}/>
        <Title>פיש</Title>
        <Subtitle>אלירן שמש</Subtitle>
        <p>{STORY_MOCK}</p>
        <Comments/>
      </FlexSection>
    );
  }
};

export default TexturaStory;
