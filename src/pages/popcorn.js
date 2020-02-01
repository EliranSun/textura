import React, { useState } from 'react';
import { PopcornDiv, PopcornInput, Title, PopcornChoiceButton, ExtraSpace, HugeTitle } from '../components/styles';

const POPCORN_EMOJI = '🍿';
const UNICORN_EMOJI = '🦄';
const HEART_EMOJI = '❤️';
const BROKEN_HEART_EMOJI = '💔';
const POPCORN_TITLE = 'אז כמה אהבה יש לך לפופקורן מאחד עד עשר?';
const CHOICE_BUTTON_TEXT_CHECKED = 'אני מוכן לבחור את הבחירה החשובה ביותר בחיי';
const CHOICE_BUTTON_TEXT_UNCHECKED = 'עוד לא בחרתי את הבחירה החשובה ביותר בחיי';
const FILL_GENDER_TITLE = 'על מנת לענות על סקר הפופקורן הגדול, אנא מלאו את הפרטים הבאים';

const GENDER_OPTIONS = {
  male: 'גבר',
  female: 'אישה',
  unicorn: UNICORN_EMOJI
};

const popcornScore = number => new Array(number).fill(POPCORN_EMOJI)
                                                .join('');

const OPTIONS = {
  0: {
    valueMALE: 'בכלל לא אוהב פופקורן',
    valueFEMALE: 'בכלל לא אוהבת פופקורן',
    valueUNICORN: `${UNICORN_EMOJI} ${BROKEN_HEART_EMOJI} ${popcornScore(0)}`,
    answerMALE: 'תתבייש לך.',
    answerFEMALE: 'תביישי לך.',
    answerUNICORN: `${UNICORN_EMOJI} ${BROKEN_HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  1: {
    valueMALE: 'מסמפת פופקורן',
    valueFEMALE: 'מסמפתת פופקורן',
    valueUNICORN: `${UNICORN_EMOJI} ${BROKEN_HEART_EMOJI} ${popcornScore(1)}`,
    answerMALE: 'לך לעמוד בפינה ותחשוב על מה שעשית.',
    answerFEMALE: 'לכי לעמוד בפינה ותחשבי על מה שעשית.',
    answerUNICORN: `${UNICORN_EMOJI} ${BROKEN_HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  2: {
    valueMALE: 'שלום שלום',
    valueFEMALE: 'שלום שלום',
    valueUNICORN: `${UNICORN_EMOJI} ${BROKEN_HEART_EMOJI} ${popcornScore(2)}`,
    answerMALE: 'ואל תבוא לי בחלום',
    answerFEMALE: 'ואל תבואי לי בחלום',
    answerUNICORN: `${UNICORN_EMOJI} ${BROKEN_HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  3: {
    valueMALE: 'מחייך אליו ושואל מה נשמע כשרואה אותו',
    valueFEMALE: 'מחייכת אליו ושואל מה נשמע כשרואה אותו',
    valueUNICORN: `${UNICORN_EMOJI} ${BROKEN_HEART_EMOJI} ${popcornScore(3)}`,
    answerMALE: 'אני מקווה שאתה מרוצה מהבחירות שלך בחיים',
    answerFEMALE: 'אני מקווה שאת מרוצה מהבחירות שלך בחיים',
    answerUNICORN: `${UNICORN_EMOJI} ${BROKEN_HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  4: {
    valueMALE: 'לא הבנתי למה צריך עמוד שלם בשביל פופקורן',
    valueFEMALE: 'לא הבנתי למה צריך עמוד שלם בשביל פופקורן',
    valueUNICORN: `${UNICORN_EMOJI} ${popcornScore(4)}`,
    answerMALE: 'אתה לא תבין לעולם ...',
    answerFEMALE: 'את לא תביני לעולם ...',
    answerUNICORN: `${UNICORN_EMOJI} ${POPCORN_EMOJI}`
  },
  5: {
    valueMALE: 'אין לי דעה. גם בחיים. החיים זה דבר אחד אפור ומתמשך עבורי. אין עליות. אין מורדות. פשוט' +
      ' קו חיים אחד רציף וסטטי. אני הקבוע הלא משתנה בעולם הזה, והעולם לא משתנה עבורי. כשאנשים עוברים לידי' +
      ' ברחוב, הם לא זוכרים אותי, ואני לא זוכר אותם. כשאני רוכש חברים, הם שוכחים ממני אחרי כמה שנים, ואני' +
      ' שוכח מהם. אני בסדר עם זה. טוב לי. תעזוב אותי בשקט.',
    valueFEMALE: 'אין לי דעה. גם בחיים. החיים זה דבר אחד אפור ומתמשך עבורי. אין עליות. אין מורדות.' +
      ' פשוט' +
      ' קו חיים אחד רציף וסטטי. אני הקבוע הלא משתנה בעולם הזה, והעולם לא משתנה עבורי. כשאנשים עוברים לידי' +
      ' ברחוב, הם לא זוכרים אותי, ואני לא זוכרת אותם. כשאני רוכשת חברים, הם שוכחים ממני אחרי כמה שנים, ואני' +
      ' שוכחת מהם. אני בסדר עם זה. טוב לי. תעזוב אותי בשקט.',
    valueUNICORN: `${UNICORN_EMOJI} ${popcornScore(5)}`,
    answerMALE: 'תשובה ניטרלית לגבר ניטרלי.',
    answerFEMALE: 'תשובה ניטרלית לאישה ניטרלית',
    answerUNICORN: `${UNICORN_EMOJI} ${POPCORN_EMOJI}`
  },
  7: {
    valueMALE: 'הביאו הנה פופקורן מידדדדדדד',
    valueFEMALE: 'הביאו הנה פופקורן מידדדדדדד',
    valueUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${popcornScore(6)}`,
    answerMALE: 'מביאיםםםםםם',
    answerFEMALE: 'מביאיםםםםםם',
    answerUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  6: {
    valueMALE: 'אין על פופקורן',
    valueFEMALE: 'אין על פופקורן',
    valueUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${popcornScore(7)}`,
    answerMALE: 'אין עלייך יא גבר',
    answerFEMALE: 'אין עלייך יא מלכה',
    answerUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  8: {
    valueMALE: 'אני ופופקורן רק כפיות',
    valueFEMALE: 'אני ופופקורן רק כפיות',
    valueUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${popcornScore(8)}`,
    answerMALE: 'אפשר שלישיה?',
    answerFEMALE: 'אפשר שלישיה?',
    answerUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  9: {
    valueMALE: 'אני מתקשר לפופקורן בדרך לעבודה לספר לו על כל הצרות שלי',
    valueFEMALE: 'אני מתקשרת לפופקורן בלילה לספר לו על כל הצרות שלי',
    valueUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${popcornScore(9)}`,
    answerMALE: 'תחלוק איתנו את חוכמת הפופקורן!',
    answerFEMALE: 'תחלקי איתנו את חוכמת הפופקורן!',
    answerUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  10: {
    valueMALE: 'פופקורן יביא שלום עולמי',
    valueFEMALE: 'פופקורן יביא שלום עולמי',
    valueUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${popcornScore(10)}`,
    answerMALE: 'אתה והפופקורן',
    answerFEMALE: 'את והפופקורן',
    answerUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  11: {
    valueMALE: 'לשמוע אנשים משחקים במשחק של משחקיה ולחשוב שזה מכונת פופקורן',
    valueFEMALE: 'לשמוע אנשים משחקים במשחק של משחקיה ולחשוב שזה מכונת פופקורן',
    valueUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${popcornScore(11)}`,
    answerMALE: 'היי אלירן!',
    answerFEMALE: `היי גלית! ${HEART_EMOJI}`,
    answerUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${POPCORN_EMOJI}`
  },
  12: {
    valueMALE: 'להזהר לא לאכול את הכפתורים במשחק של המשחקיה',
    valueFEMALE: 'להזהר לא לאכול את הכפתורים במשחק של המשחקיה',
    valueUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${popcornScore(12)}`,
    answerMALE: 'היי אלירן?',
    answerFEMALE: `היי גלית? ${HEART_EMOJI}`,
    answerUNICORN: `${UNICORN_EMOJI} ${HEART_EMOJI} ${POPCORN_EMOJI}`
  }
};

window.scrollTo(0, 0);

const Popcorn = () => {
  const [gender, setGender] = useState('');
  const [chosenPopcornValue, setPopcornValue] = useState('');
  const [submittedForm, setSubmission] = useState(false);

  const resetGame = () => {
    window.scrollTo(0, 0);
    setGender('');
    setPopcornValue('');
    setSubmission(false);
  };

  const nextStep = genderKey => {
    window.scrollTo(0, 0);
    setGender(genderKey);
  };

  const renderPopcornOptions = () => {
    return Object
      .entries(OPTIONS)
      .map(([entryNumber, option]) => {
        const chosenOne = chosenPopcornValue === entryNumber;
        return (
          <PopcornInput
            checked={chosenOne}
            onClick={() => setPopcornValue(entryNumber)}>
            <input
              type="radio"
              name="popcorn"
              value={entryNumber}
              checked={chosenOne}/>
            {option[`value${gender.toUpperCase()}`]}
            {gender !== 'unicorn' && chosenOne && popcornScore(parseInt(entryNumber))}
          </PopcornInput>
        );
      });
  };

  const renderGenderOptions = () => {
    return Object
      .entries(GENDER_OPTIONS)
      .map(([genderKey, gender]) => {
        return (
          <PopcornInput
            onClick={() => nextStep(genderKey)}
            type="radio"
            name="gender"
            value={gender}
            checked={gender === genderKey}>
            {gender}
          </PopcornInput>
        );
      });
  };


  if (!gender) {
    return (
      <PopcornDiv>
        <Title>{FILL_GENDER_TITLE}</Title>
        {renderGenderOptions()}
        <ExtraSpace/>
      </PopcornDiv>
    );
  }

  if (!submittedForm) {
    return (
      <PopcornDiv>
        <Title>{POPCORN_TITLE}</Title>
        {renderPopcornOptions()}
        <PopcornChoiceButton
          fixed={chosenPopcornValue}
          disabled={ !chosenPopcornValue}
          onClick={() => {
            window.scrollTo(0, 0);
            setSubmission(true);
          }}>
          {chosenPopcornValue ? CHOICE_BUTTON_TEXT_CHECKED : CHOICE_BUTTON_TEXT_UNCHECKED}
        </PopcornChoiceButton>
        <ExtraSpace/>
      </PopcornDiv>
    );
  }

  if (gender && submittedForm && chosenPopcornValue) {
    return (
      <>
        <HugeTitle centered>{OPTIONS[chosenPopcornValue][`answer${gender.toUpperCase()}`]}</HugeTitle>
        <PopcornChoiceButton onClick={resetGame}>מחדש</PopcornChoiceButton>
      </>
    );
  }
};

export default Popcorn;
