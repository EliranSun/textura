import styled from 'styled-components';
import {
  APP_BASE_COLOR,
  APP_FONT_SECONDARY_COLOR,
  APP_FONT_COLOR,
  BASE_BUTTON_SIZE,
  BASE_FONT_SIZE,
  CALL_TO_ACTION_COLOR,
  APP_SECONDARY_COLOR,
  ORANGE_YELLOW,
  BABY_POWDER, DARK_TANGERINE
} from '../constants/styles';

export const Section = styled.section`
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:url(${props => props.backgroundURL});
  background-color: ${props => props.secondary ? '#ededed' : 'white' };
  text-align: ${props => props.secondary ? 'left' : 'right' };
  height: 350px;
  padding: 100px 250px;
`;

export const FlexSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  
  // img {
  //   flex: 1 1 100%;
  // }
  
  h1, h2 {
    flex: 1 1 100%;
  }
`;

export const FlexImage = styled.img`
 flex: 1 1 100%;
`;

export const Title = styled.h1`
  font-weight: 900;
  margin: 10px;
  display: ${props => props.display ? props.display : 'inherit'};
  font-size: ${BASE_FONT_SIZE * 1.5}em;
  text-align: ${props => props.centered ? 'center' : 'inherit'};
  color: ${props => props.color ? props.color : 'black'};
`;

export const HugeTitle = styled(Title)`
  font-size: ${BASE_FONT_SIZE * 2}em;
  margin: 50px 30px;
`;

export const Subtitle = styled.h2`
  font-weight: 900;
  color: ${APP_FONT_SECONDARY_COLOR};
  font-size: ${BASE_FONT_SIZE}em;
  line-height: ${BASE_FONT_SIZE}em;
`;

export const Button = styled.button`
  border-radius: 0;
  height: ${BASE_BUTTON_SIZE * 2}px;
  width: ${BASE_BUTTON_SIZE * 2}px;
  margin: ${BASE_BUTTON_SIZE}px;
  background-color: ${APP_BASE_COLOR};
  border: none;
  font-size: ${BASE_BUTTON_SIZE / 40}em;
  font-weight: 900;
  border-radius: 4px;
  box-shadow: ${ props => props.disabled ? 'none' : '0px 0px 8px 4px rgba(0,0,0,0.1)' };
  outline: 0;
  cursor: pointer;
  color: ${APP_FONT_COLOR};
`;

export const CTAButton = styled(Button)`
  background-color: ${ props => props.disabled ? 'rgba(0,0,0,0.1)' : CALL_TO_ACTION_COLOR};
  color: ${APP_BASE_COLOR};
  // width: ${BASE_BUTTON_SIZE * 4}px;
  // height: ${BASE_BUTTON_SIZE}px;
  width: auto;
  padding: 20px;
  height: auto;
`;

export const FloatCTAButton = styled(CTAButton)`
  position: fixed;
  top: 100px;
  left: 100px;
`;

export const Paragraph = styled.p`
  color: ${props => props.color ? props.color : 'black'};
  max-width: 30%;
  margin: 0;
`;

export const Image = styled.img`
  color: ${props => props.centered ? '' : 'black'};
  float: ${props => props.float ? props.float : 'none'};
  width: auto;
`;

export const Thumbnail = styled.img`
  width: ${BASE_BUTTON_SIZE * 2}px;
  height: ${BASE_BUTTON_SIZE * 2}px;
  flex-basis: ${BASE_BUTTON_SIZE * 2}px;
`;

export const Body = styled.div`
  direction: rtl;
`;

export const Header = styled.div`
  display: flex;
  background-color: ${APP_BASE_COLOR};
  padding: 5px 50px;
  box-shadow: 9px 3px 20px 7px rgba(0,0,0,0.1);
  position: ${props => props.position > 100 ? 'fixed' : 'relative'};
  height: ${props => props.position > 100 ? '25px' : '50px'};
  width: 100%;
  top: 0;
`;

export const Logo = styled.h1`
  font-size: ${BASE_FONT_SIZE}em;
  line-height: 1.1em;
  margin: auto 20px;
`;

export const LogoText = styled(Logo)`
  font-size: ${BASE_FONT_SIZE / 2}em;
  color: ${APP_FONT_SECONDARY_COLOR};
`;

export const HeaderButton = styled(Button)`
  margin: 0;
  background-color: transparent;
  border: none;
  color: ${APP_SECONDARY_COLOR};
  box-shadow: none;
  height: auto;
  margin: 0;
`;

export const Card = styled.div`
  background-color: ${APP_BASE_COLOR};
  width: 30%; 
  margin: 10px;
`;

export const TextField = styled.input``;

export const TTL = styled.div`
  width: 100px;
  height: 100px;
  // background-color: ${CALL_TO_ACTION_COLOR};
  font-size: 100px;
`;

export const FixedDiv = styled.div`
   position: fixed;
   top: 100px;
   left: 100px;
`;

export const PopcornDiv = styled.div`
  max-width: 480px;
  width: 100%;
  margin: auto;
  font-size: ${BASE_FONT_SIZE / 2}em;
`;

export const PopcornInput = styled.div`
  cursor: pointer;
  margin: 10px;
  height: auto;
  padding: 10px;
  border-right: ${ props => props.checked ? 'none' : `1px solid ${DARK_TANGERINE}` };
  background-color: ${ props => props.checked ? DARK_TANGERINE : BABY_POWDER }; 
  color: ${ props => props.checked ? BABY_POWDER : DARK_TANGERINE };
  font-weight: 900;
  
  input[type="radio"] {
    display: none;
  }
`;

export const PopcornChoiceButton = styled(CTAButton)`
  display: table;
  height: ${ props => props.fixed ? 'auto' : '123px' };
  width: ${ props => props.fixed ? 'auto' : '90%' };
  position: ${ props => props.fixed ? 'fixed' : 'static' };
  margin: ${ props => props.fixed ? '' : '50px auto' };
  left: 0;
  right: 0;
  bottom: -50px;
`;

export const ExtraSpace = styled.div`
  height: 200px;
`;
