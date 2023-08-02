import { BellRegularIcon, ClockRegularIcon, GearSolidIcon, Greetings, Header, HomeContainer, IconContainer, IconGroup } from './styles';

const Home = () => {
  const openNotifications = () => {}

  const openHistory = () => {}

  const openSettings = () => {}

  return (
    <HomeContainer>
      <Header>
        <Greetings>Boa noite</Greetings>
      
        <IconGroup>
          <IconContainer onPress={openNotifications}>
            <BellRegularIcon />
          </IconContainer>

          <IconContainer onPress={openHistory}>
            <ClockRegularIcon />
          </IconContainer>
          
          <IconContainer onPress={openSettings}>
            <GearSolidIcon />
          </IconContainer>
        </IconGroup>
      </Header>
    </HomeContainer>
  );
}

export default Home;