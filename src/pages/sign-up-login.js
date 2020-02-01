import React, { useState } from 'react';
import { Section, Subtitle, TextField, Title, Button } from '../components/styles';
import TexturaStatusDishMaking from './textura-status-dish-making';

const SignUpLogin = ({ setPage }) => {
  const [renderSalad, setSalad] = useState(false);

  if (renderSalad) {
    // TODO: making the salad in step, modal above all...
    setTimeout(() => setPage('home'), 5000);
    return <TexturaStatusDishMaking gift="קיבלת עגבנייה במתנה!!!"/>;
  }

  return (
    <>
      <Section>
        <Title>התחברות</Title>
        <Subtitle>שם משתמש</Subtitle>
        <TextField/>
        <Subtitle>סיסמא</Subtitle>
        <TextField/>
        <Button onClick={() => setSalad(true)}>היכנס</Button>
      </Section>
      <Section>
        <Title>...או הרשמה</Title>
        <Subtitle>שם משתמש</Subtitle>
        <TextField/>
        <Subtitle>אימייל</Subtitle>
        <TextField/>
        <Subtitle>סיסמא</Subtitle>
        <TextField/>
        <Button onClick={() => setSalad(true)}>היכנס</Button>
      </Section>
    </>
  );
};

export default SignUpLogin;
