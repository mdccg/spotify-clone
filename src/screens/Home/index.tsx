import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Eyedress from './../../../assets/images/eyedress.jpeg';
import ArtistCard from './../../components/ArtistCard';
import Highlight from './../../components/Highlight';
import MixCard from './../../components/MixCard';
import Theme from './../../stylesheets/theme';
import ArtistType from './../../types/ArtistType';
import MixType from './../../types/MixType';
import { getGreetings, isArtist } from './../../utils';
import { BellRegularIcon, Carousel, ClockRegularIcon, FavoriteArtistsHeading, GapBetweenColumns, GearSolidIcon, Greetings, Header, Heading, HighlightsColumn, HighlightsGroup, HomeContainer, IconContainer, IconGroup, LooksLikeArtistName, LooksLikeContainer, LooksLikeLabel, LooksLikeLabelContainer, LooksLikePicture, RoundedTag, Tag, TagGroup, TagLabel, XMarkSolidIcon } from './styles';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>();
  const [filters] = useState<string[]>(['Música', 'Podcasts e programas']);
  const [highlights] = useState<MixType[]>([
    { title: 'Músicas Curtidas',       imageUrl: require('./../../../assets/images/musicas-curtidas.png') },
    { title: 'Mix relax',              imageUrl: require('./../../../assets/images/mix-relax.jpeg') },
    { title: 'Mix de Kings of Leon',   imageUrl: require('./../../../assets/images/mix-de-kings-of-leon.jpeg') },
    { title: 'Mix romântico',          imageUrl: require('./../../../assets/images/mix-romantico.jpeg') },
    { title: 'Daily Mix 1',            imageUrl: require('./../../../assets/images/daily-mix-1.jpeg') },
    { title: 'Adeus, Aurora (Deluxe)', imageUrl: require('./../../../assets/images/adeus-aurora-deluxe.jpeg') },
  ]);
  const [mostListenedMixes] = useState<MixType[]>([
    { description: 'STARSET, Danger Danger, Linkin Park e mais',              imageUrl: require('./../../../assets/images/mix-rock.jpeg') },
    { description: 'The Rare Occasions, boy pablo, The Neighbourhood e mais', imageUrl: require('./../../../assets/images/mix-indie.jpeg') },
    { description: 'Matt Maltese, boy pablo e Hotel Ugly',                    imageUrl: require('./../../../assets/images/mix-de-vansire.jpeg') },
    { description: 'The Weeknd, Coldplay, The Technicolors e mais',           imageUrl: require('./../../../assets/images/mix-anos-2010.jpeg') },
    { description: 'Vansire, Lena Raine, Tyler, The Creator e mais',          imageUrl: require('./../../../assets/images/mix-relax.jpeg') },
    { description: 'Armandinho, kamaitachi, Supercombo e mais',               imageUrl: require('./../../../assets/images/mix-mpb.jpeg') },
    { description: 'Eyedress, TV Girl e Cigarettes After Sex',                imageUrl: require('./../../../assets/images/mix-de-arctic-monkeys.jpeg') },
    { description: 'Tim Maia, KISS, Van Halen e mais',                        imageUrl: require('./../../../assets/images/mix-anos-70.jpeg') },
    { description: 'Matt Maltese, Laufey, Christopher Cross e mais',          imageUrl: require('./../../../assets/images/mix-romantico.jpeg') },
    { description: 'OneRepublic, Harry Styles, Taylor Swift e mais',          imageUrl: require('./../../../assets/images/mix-pop.jpeg') },
  ]);
  const [favoriteArtists] = useState<ArtistType[]>([
    { name: 'grentperez',     imageUrl: require('./../../../assets/images/grentperez.jpeg') },
    { name: 'Fujii Kaze',     imageUrl: require('./../../../assets/images/fujii-kaze.jpeg') },
    { name: 'Miki Matsubara', imageUrl: require('./../../../assets/images/miki-matsubara.jpeg') },
    { name: 'd4vd',           imageUrl: require('./../../../assets/images/d4vd.jpeg') },
    { name: 'Arctic Monkeys', imageUrl: require('./../../../assets/images/arctic-monkeys.jpeg') },
    { name: 'kamaitachi',     imageUrl: require('./../../../assets/images/kamaitachi.jpeg') },
    { name: 'Joe Hisaishi',   imageUrl: require('./../../../assets/images/joe-hisaishi.jpeg') },
    { name: 'The Weeknd',     imageUrl: require('./../../../assets/images/the-weeknd.jpeg') },
    { name: 'Tim Maia',       imageUrl: require('./../../../assets/images/tim-maia.jpeg') },
    { name: 'Vinicius Maeda', imageUrl: require('./../../../assets/images/vinicius-maeda.png') },
  ]);
  const [similarToEyedress] = useState<(MixType | ArtistType)[]>([
    { title: 'Mrs Magic',           description: 'Single • Strawberry Guy',        imageUrl: require('./../../../assets/images/mrs-magic_single_strawberry-guy.jpeg') },
    { title: 'F Song',              description: 'Single • Strawberry Guy',        imageUrl: require('./../../../assets/images/f-song_single_strawberry-guy.jpeg') },
    { title: 'welcome and goodbye', description: 'Single • Dream, Ivory',        imageUrl: require('./../../../assets/images/welcome-and-goodbye_single_dream-ivory.jpeg') },
    { description: 'Arctic Monkeys, Tyler, The Creator, The Neighbourhood e mais', imageUrl: require('./../../../assets/images/indie-gaming.jpeg') },
    { description: 'Cigarettes After Sex, d4vd, Clairo, beabadoobee e mais',       imageUrl: require('./../../../assets/images/lo-fi-indie.jpeg') },
    { name: 'bôa',                  imageUrl: require('./../../../assets/images/boa.jpeg') },
    { name: 'Roar',                 imageUrl: require('./../../../assets/images/roar.jpeg') },
    { name: 'Duster',               imageUrl: require('./../../../assets/images/duster.jpeg') },
    { description: 'Steve Lacy, Cigarettes After Sex, Mac DeMarco e mais',         imageUrl: require('./../../../assets/images/eyedress-radio.jpeg') },
  ]);

  const selectFilter = (newFilter: string) => {
    setSelectedFilter(newFilter === selectedFilter ? undefined : newFilter);
  }

  return (
    <HomeContainer contentContainerStyle={styles.homeContainer} style={{ flex: 1 }}>
      <Header>
        <Greetings>
          {getGreetings()}
        </Greetings>
      
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

      <HighlightsGroup>
        <HighlightsColumn>
          {highlights.slice(0, 3).map((highlight, index) => (
            <Highlight key={index} mix={highlight} isPlaying={index === 0} />
          ))}
        </HighlightsColumn>

        <GapBetweenColumns />

        <HighlightsColumn>
          {highlights.slice(3, 6).map((highlight, index) => (
            <Highlight key={3 + index} mix={highlight} isPlaying={3 + index === 0} />
          ))}
        </HighlightsColumn>
      </HighlightsGroup>

      <Heading>Seus mixes mais ouvidos</Heading>

      <Carousel horizontal>
        {mostListenedMixes.map((mix, index, array) => (
          <MixCard key={index} mix={mix} isTheLastOne={index === array.length - 1} />
        ))}
      </Carousel>

      <FavoriteArtistsHeading>Seus artistas favoritos</FavoriteArtistsHeading>

      <Carousel horizontal>
        {favoriteArtists.map((artist, index, array) => (
          <ArtistCard key={index} artist={artist} isTheLastOne={index === array.length - 1} />
        ))}
      </Carousel>

      <LooksLikeContainer>
        <LooksLikePicture source={Eyedress} />
        <LooksLikeLabelContainer>
          <LooksLikeLabel>Parecido com</LooksLikeLabel>
          <LooksLikeArtistName>Eyedress</LooksLikeArtistName>
        </LooksLikeLabelContainer>
      </LooksLikeContainer>

      <Carousel horizontal>
        {similarToEyedress.map((object, index, array) => {
          const isTheLastOne = index === array.length - 1;

          return isArtist(object) ? (
            <ArtistCard key={index} artist={object} isTheLastOne={isTheLastOne} />
          ) : (
            <MixCard key={index} mix={object} isTheLastOne={isTheLastOne} />
          );
        })}
      </Carousel>
    </HomeContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingBottom: 160,
  },

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

  lastCarouselItem: {
    marginRight: 0,
  },
});

export default Home;