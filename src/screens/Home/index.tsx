import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AdeusAuroraDeluxe from './../../../assets/images/adeus-aurora-deluxe.jpeg';
import DailyMix1 from './../../../assets/images/daily-mix-1.jpeg';
import MixAnos2010 from './../../../assets/images/mix-anos-2010.jpeg';
import MixAnos70 from './../../../assets/images/mix-anos-70.jpeg';
import MixRock from './../../../assets/images/mix-rock.jpeg';
import MixIndie from './../../../assets/images/mix-indie.jpeg';
import MixMpb from './../../../assets/images/mix-mpb.jpeg';
import MixPop from './../../../assets/images/mix-pop.jpeg';
import MixDeArcticMonkeys from './../../../assets/images/mix-de-arctic-monkeys.jpeg';
import MixDeKingsOfLeon from './../../../assets/images/mix-de-kings-of-leon.jpeg';
import MixDeVansire from './../../../assets/images/mix-de-vansire.jpeg';
import MixRelax from './../../../assets/images/mix-relax.jpeg';
import MixRomantico from './../../../assets/images/mix-romantico.jpeg';
import MusicasCurtidas from './../../../assets/images/musicas-curtidas.png';
import Theme from './../../stylesheets/theme';
import Grentperez from './../../../assets/images/grentperez.jpeg';
import FujiiKaze from './../../../assets/images/fujii-kaze.jpeg';
import MikiMatsubara from './../../../assets/images/miki-matsubara.jpeg';
import D4vd from './../../../assets/images/d4vd.jpeg';
import ArcticMonkeys from './../../../assets/images/arctic-monkeys.jpeg';
import Kamaitachi from './../../../assets/images/kamaitachi.jpeg';
import JoeHisaishi from './../../../assets/images/joe-hisaishi.jpeg';
import TheWeeknd from './../../../assets/images/the-weeknd.jpeg';
import TimMaia from './../../../assets/images/tim-maia.jpeg';
import ViniciusMaeda from './../../../assets/images/vinicius-maeda.png';
import { BellRegularIcon, Carousel, CarouselDescription, CarouselImage, CarouselItem, ClockRegularIcon, EllipsisSolidIcon, FavoriteArtistsHeading, GearSolidIcon, Greetings, Header, Heading, HomeContainer, IconContainer, IconGroup, MixColumn, GapBetweenColumns, MixContainer, MixGroup, MixImage, MixIsPlayingContainer, MixTitle, RoundedTag, Tag, TagGroup, TagLabel, XMarkSolidIcon, Artist, ArtistName, ArtistPicture, Footer } from './styles';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>();
  const [filters] = useState<string[]>(['Música', 'Podcasts e programas']);

  const openNotifications = () => {}

  const openHistory = () => {}

  const openSettings = () => {}

  const selectFilter = (newFilter: string) => {
    setSelectedFilter(newFilter === selectedFilter ? undefined : newFilter);
  }

  return (
    <>
      <HomeContainer contentContainerStyle={styles.homeContainer}>
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

        <MixGroup>
          <MixColumn>
            <MixContainer>
              <MixImage source={MusicasCurtidas} />
              <MixTitle>Músicas Curtidas</MixTitle>
              <MixIsPlayingContainer>
                <EllipsisSolidIcon />
              </MixIsPlayingContainer>
            </MixContainer>

            <MixContainer>
              <MixImage source={MixRelax} />
              <MixTitle>Mix relax</MixTitle>
            </MixContainer>

            <MixContainer>
              <MixImage source={MixDeKingsOfLeon} />
              <MixTitle>Mix de Kings of Leon</MixTitle>
            </MixContainer>
          </MixColumn>

          <GapBetweenColumns />

          <MixColumn>
            <MixContainer>
              <MixImage source={MixRomantico} />
              <MixTitle>Mix romântico</MixTitle>
            </MixContainer>

            <MixContainer>
              <MixImage source={DailyMix1} />
              <MixTitle>Daily Mix 1</MixTitle>
            </MixContainer>

            <MixContainer>
              <MixImage source={AdeusAuroraDeluxe} />
              <MixTitle>Adeus, Aurora (Deluxe)</MixTitle>
            </MixContainer>
          </MixColumn>
        </MixGroup>

        <Heading>Seus mixes mais ouvidos</Heading>

        <Carousel horizontal>
          <CarouselItem>
            <CarouselImage source={MixRock} />
            <CarouselDescription>STARSET, Danger Danger, Linkin Park e mais</CarouselDescription>
          </CarouselItem>

          <CarouselItem>
            <CarouselImage source={MixIndie} />
            <CarouselDescription>The Rare Occasions, boy pablo, The Neighbourhood e mais</CarouselDescription>
          </CarouselItem>

          <CarouselItem>
            <CarouselImage source={MixDeVansire} />
            <CarouselDescription>Matt Maltese, boy pablo e Hotel Ugly</CarouselDescription>
          </CarouselItem>

          <CarouselItem>
            <CarouselImage source={MixAnos2010} />
            <CarouselDescription>The Weeknd, Coldplay, The Technicolors e mais</CarouselDescription>
          </CarouselItem>

          <CarouselItem>
            <CarouselImage source={MixRelax} />
            <CarouselDescription>Vansire, Lena Raine, Tyler, The Creator e mais</CarouselDescription>
          </CarouselItem>

          <CarouselItem>
            <CarouselImage source={MixMpb} />
            <CarouselDescription>Armandinho, kamaitachi, Supercombo e mais</CarouselDescription>
          </CarouselItem>

          <CarouselItem>
            <CarouselImage source={MixDeArcticMonkeys} />
            <CarouselDescription>Eyedress, TV Girl e Cigarettes After Sex</CarouselDescription>
          </CarouselItem>

          <CarouselItem>
            <CarouselImage source={MixAnos70} />
            <CarouselDescription>Tim Maia, KISS, Van Halen e mais</CarouselDescription>
          </CarouselItem>

          <CarouselItem>
            <CarouselImage source={MixRomantico} />
            <CarouselDescription>Matt Maltese, Laufey, Christopher Cross e mais</CarouselDescription>
          </CarouselItem>

          <CarouselItem style={styles.lastCarouselItem}>
            <CarouselImage source={MixPop} />
            <CarouselDescription>OneRepublic, Harry Styles, Taylor Swift e mais</CarouselDescription>
          </CarouselItem>
        </Carousel>

        <FavoriteArtistsHeading>Seus artistas favoritos</FavoriteArtistsHeading>

        <Carousel horizontal>
          <Artist>
            <ArtistPicture source={Grentperez} />
            <ArtistName>grentperez</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={FujiiKaze} />
            <ArtistName>Fujii Kaze</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={MikiMatsubara} />
            <ArtistName>Miki Matsubara</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={D4vd} />
            <ArtistName>d4vd</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={ArcticMonkeys} />
            <ArtistName>Arctic Monkeys</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={Kamaitachi} />
            <ArtistName>kamaitachi</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={JoeHisaishi} />
            <ArtistName>Joe Hisaishi</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={TheWeeknd} />
            <ArtistName>The Weeknd</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={TimMaia} />
            <ArtistName>Tim Maia</ArtistName>
          </Artist>

          <Artist style={styles.lastCarouselItem}>
            <ArtistPicture source={ViniciusMaeda} />
            <ArtistName>Vinicius Maeda</ArtistName>
          </Artist>
        </Carousel>
      </HomeContainer>
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingBottom: 72,
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