import { getGreetings } from './../../utils';
import { BellRegularIcon, ClockRegularIcon, GearSolidIcon, Greetings, HeaderContainer, IconContainer, IconGroup } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Greetings>{getGreetings()}</Greetings>
    
      <IconGroup>
        <IconContainer>
          <BellRegularIcon />
        </IconContainer>

        <IconContainer>
          <ClockRegularIcon />
        </IconContainer>
        
        <IconContainer>
          <GearSolidIcon />
        </IconContainer>
      </IconGroup>
    </HeaderContainer>
  );
}

export default Header;