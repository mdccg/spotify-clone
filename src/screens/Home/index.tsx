import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Theme from './../../stylesheets/theme';
import { BellRegularIcon, ClockRegularIcon, GearSolidIcon, Greetings, Header, HomeContainer, IconContainer, IconGroup, RoundedTag, Tag, TagGroup, TagLabel, XMarkSolidIcon } from './styles';

type MixType = {
  name: string;
  imageUrl: string;
}

const mixesPath = './../../assets/images';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>();
  const [filters] = useState<string[]>(['Música', 'Podcasts e programas']);
  const [mixes] = useState<MixType[]>([
    { name: 'Músicas Curtidas',       imageUrl: `${mixesPath}/musicas-curtidas.png` },
    { name: 'Mix romântico',          imageUrl: `${mixesPath}/mix-romantico.jpeg` },
    { name: 'Mix relax',              imageUrl: `${mixesPath}/mix-relax.jpeg` },
    { name: 'Daily Mix 1',            imageUrl: `${mixesPath}/daily-mix-1.jpeg` },
    { name: 'Mix de Kings of Leon',   imageUrl: `${mixesPath}/mix-de-kings-of-leon.jpeg` },
    { name: 'Adeus, Aurora (Deluxe)', imageUrl: `${mixesPath}/adeus-aurora-deluxe.jpeg` }
  ]);

  const openNotifications = () => {}

  const openHistory = () => {}

  const openSettings = () => {}

  const selectFilter = (newFilter: string) => {
    setSelectedFilter(newFilter === selectedFilter ? undefined : newFilter);
  }

  return (
    <>
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

        <TagGroup contentContainerStyle={styles.tagGroup} horizontal>
          {selectedFilter && (
            <RoundedTag onPress={() => setSelectedFilter(undefined)}>
              <XMarkSolidIcon />
            </RoundedTag>
          )}

          {filters.map((currentFilter) => {
            const isSelected = currentFilter === selectedFilter;

            return (!selectedFilter || isSelected) && (
              <Tag
                key={currentFilter}
                style={isSelected ? styles.selectedTag : {}}
                onPress={() => selectFilter(currentFilter)}>
                <TagLabel style={isSelected ? styles.selectedTagLabel : {}}>
                  {currentFilter}
                </TagLabel>
              </Tag>
            );
          })}
        </TagGroup>

        {Array(250).fill(null).map((_, index) => <Text style={{ color: 'white' }} key={index}>Teste</Text>)}
      </HomeContainer>
    </>
  );
}

const styles = StyleSheet.create({
  tagGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingRight: 0,
    paddingBottom: 16,
    paddingLeft: 0,
  },

  selectedTag: {
    backgroundColor: Theme.colors.green,
  },

  selectedTagLabel: {
    color: Theme.colors.black
  },
});

export default Home;