import React from 'react';
import { Card, Title, Thumbnail, Subtitle } from './styles';
import TimeToRead from './time-to-read';
import WriterProfileImage from './writer-profile-image';

const TexturaStoryCard = ({
  title = '',
  texturaUnix = new Date().getTime(),
  authorName = '',
  authorProfileImageSrc = '',
  texturaThumbnailSrc = '',
  timeToRead = 1,
  stars = 0,
  comments = 0,
  onClick
}) => {
  return (
    <Card onClick={ onClick }>
      <Title>{ authorName }</Title>
      <Subtitle>{ title }</Subtitle>
      <Thumbnail src={ texturaThumbnailSrc } />
      <Thumbnail src={ authorProfileImageSrc } />
      <TimeToRead ttr={ timeToRead } />
      { texturaUnix }
      { stars }
      { comments }
    </Card>
  );
};

export default TexturaStoryCard;
