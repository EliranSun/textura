import React from 'react';
import { Section, Title } from '../components/styles';
import TexturaStoryCard from '../components/textura-story-card';
import { ACTIVE_TEXTURAS_MOCK } from '../mocks';

const ActiveTextures = ({ setPage }) => {
  const renderTexturaCards = () => ACTIVE_TEXTURAS_MOCK.map(textura =>
    <TexturaStoryCard onClick={ setPage('textura-editor') } { ...textura } /> );

  return (
    <>
      <Section>
        <Title>טקסטורות פעילות</Title>
        { renderTexturaCards() }
      </Section>
      <Section>
        <Title>טקסטורות של העבר</Title>
        { renderTexturaCards() }
      </Section>
    </>
  );
};

export default ActiveTextures;
