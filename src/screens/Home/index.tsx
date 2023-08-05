import { useState } from 'react';
import { StyleSheet } from 'react-native';
import AdeusAuroraDeluxe from './../../../assets/images/adeus-aurora-deluxe.jpeg';
import ArcticMonkeys from './../../../assets/images/arctic-monkeys.jpeg';
import D4vd from './../../../assets/images/d4vd.jpeg';
import DailyMix1 from './../../../assets/images/daily-mix-1.jpeg';
import FujiiKaze from './../../../assets/images/fujii-kaze.jpeg';
import Grentperez from './../../../assets/images/grentperez.jpeg';
import JoeHisaishi from './../../../assets/images/joe-hisaishi.jpeg';
import Kamaitachi from './../../../assets/images/kamaitachi.jpeg';
import MikiMatsubara from './../../../assets/images/miki-matsubara.jpeg';
import MixAnos2010 from './../../../assets/images/mix-anos-2010.jpeg';
import MixAnos70 from './../../../assets/images/mix-anos-70.jpeg';
import MixDeArcticMonkeys from './../../../assets/images/mix-de-arctic-monkeys.jpeg';
import MixDeKingsOfLeon from './../../../assets/images/mix-de-kings-of-leon.jpeg';
import MixDeVansire from './../../../assets/images/mix-de-vansire.jpeg';
import MixIndie from './../../../assets/images/mix-indie.jpeg';
import MixMpb from './../../../assets/images/mix-mpb.jpeg';
import MixPop from './../../../assets/images/mix-pop.jpeg';
import MixRelax from './../../../assets/images/mix-relax.jpeg';
import MixRock from './../../../assets/images/mix-rock.jpeg';
import MixRomantico from './../../../assets/images/mix-romantico.jpeg';
import MusicasCurtidas from './../../../assets/images/musicas-curtidas.png';
import TheWeeknd from './../../../assets/images/the-weeknd.jpeg';
import TimMaia from './../../../assets/images/tim-maia.jpeg';
import ViniciusMaeda from './../../../assets/images/vinicius-maeda.png';
import Theme from './../../stylesheets/theme';
import MrsMagicSingleStrawberryGuy from './../../../assets/images/mrs-magic_single_strawberry-guy.jpeg';
import FSongSingleStrawberryGuy from './../../../assets/images/f-song_single_strawberry-guy.jpeg';
import WelcomeAndGoodbyeSingleDreamIvory from './../../../assets/images/welcome-and-goodbye_single_dream-ivory.jpeg';
import IndieGaming from './../../../assets/images/indie-gaming.jpeg';
import LoFiIndie from './../../../assets/images/lo-fi-indie.jpeg';
import Boa from './../../../assets/images/boa.jpeg';
import Roar from './../../../assets/images/roar.jpeg';
import Duster from './../../../assets/images/duster.jpeg';
import EyedressRadio from './../../../assets/images/eyedress-radio.jpeg';
import Eyedress from './../../../assets/images/eyedress.jpeg';
import { Artist, ArtistName, ArtistPicture, BellRegularIcon, Carousel, ClockRegularIcon, EllipsisSolidIcon, FavoriteArtistsHeading, GapBetweenColumns, GearSolidIcon, Greetings, Header, Heading, HighlightedMix, HighlightedMixColumn, HighlightedMixGroup, HighlightedMixImage, HighlightedMixIsPlayingContainer, HighlightedMixTitle, HomeContainer, IconContainer, IconGroup, LooksLikeArtistName, LooksLikeContainer, LooksLikeLabel, LooksLikeLabelContainer, LooksLikePicture, Mix, MixDescription, MixDescriptionWithoutTitle, MixImage, MixTitle, RoundedTag, Tag, TagGroup, TagLabel, XMarkSolidIcon } from './styles';

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

        <HighlightedMixGroup>
          <HighlightedMixColumn>
            <HighlightedMix>
              <HighlightedMixImage source={MusicasCurtidas} />
              <HighlightedMixTitle>Músicas Curtidas</HighlightedMixTitle>
              <HighlightedMixIsPlayingContainer>
                <EllipsisSolidIcon />
              </HighlightedMixIsPlayingContainer>
            </HighlightedMix>

            <HighlightedMix>
              <HighlightedMixImage source={MixRelax} />
              <HighlightedMixTitle>Mix relax</HighlightedMixTitle>
            </HighlightedMix>

            <HighlightedMix>
              <HighlightedMixImage source={MixDeKingsOfLeon} />
              <HighlightedMixTitle>Mix de Kings of Leon</HighlightedMixTitle>
            </HighlightedMix>
          </HighlightedMixColumn>

          <GapBetweenColumns />

          <HighlightedMixColumn>
            <HighlightedMix>
              <HighlightedMixImage source={MixRomantico} />
              <HighlightedMixTitle>Mix romântico</HighlightedMixTitle>
            </HighlightedMix>

            <HighlightedMix>
              <HighlightedMixImage source={DailyMix1} />
              <HighlightedMixTitle>Daily Mix 1</HighlightedMixTitle>
            </HighlightedMix>

            <HighlightedMix>
              <HighlightedMixImage source={AdeusAuroraDeluxe} />
              <HighlightedMixTitle>Adeus, Aurora (Deluxe)</HighlightedMixTitle>
            </HighlightedMix>
          </HighlightedMixColumn>
        </HighlightedMixGroup>

        <Heading>Seus mixes mais ouvidos</Heading>

        <Carousel horizontal>
          <Mix>
            <MixImage source={MixRock} />
            <MixDescriptionWithoutTitle>STARSET, Danger Danger, Linkin Park e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={MixIndie} />
            <MixDescriptionWithoutTitle>The Rare Occasions, boy pablo, The Neighbourhood e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={MixDeVansire} />
            <MixDescriptionWithoutTitle>Matt Maltese, boy pablo e Hotel Ugly</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={MixAnos2010} />
            <MixDescriptionWithoutTitle>The Weeknd, Coldplay, The Technicolors e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={MixRelax} />
            <MixDescriptionWithoutTitle>Vansire, Lena Raine, Tyler, The Creator e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={MixMpb} />
            <MixDescriptionWithoutTitle>Armandinho, kamaitachi, Supercombo e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={MixDeArcticMonkeys} />
            <MixDescriptionWithoutTitle>Eyedress, TV Girl e Cigarettes After Sex</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={MixAnos70} />
            <MixDescriptionWithoutTitle>Tim Maia, KISS, Van Halen e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={MixRomantico} />
            <MixDescriptionWithoutTitle>Matt Maltese, Laufey, Christopher Cross e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Mix style={styles.lastCarouselItem}>
            <MixImage source={MixPop} />
            <MixDescriptionWithoutTitle>OneRepublic, Harry Styles, Taylor Swift e mais</MixDescriptionWithoutTitle>
          </Mix>
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

        <LooksLikeContainer>
          <LooksLikePicture source={Eyedress} />
          <LooksLikeLabelContainer>
            <LooksLikeLabel>Parecido com</LooksLikeLabel>
            <LooksLikeArtistName>Eyedress</LooksLikeArtistName>
          </LooksLikeLabelContainer>
        </LooksLikeContainer>

        <Carousel horizontal>
          <Mix>
            <MixImage source={MrsMagicSingleStrawberryGuy} />
            <MixTitle>Mrs Magic</MixTitle>
            <MixDescription>Single • Strawberry Guy</MixDescription>
          </Mix>

          <Mix>
            <MixImage source={FSongSingleStrawberryGuy} />
            <MixTitle>F Song</MixTitle>
            <MixDescription>Single • Strawberry Guy</MixDescription>
          </Mix>

          <Mix>
            <MixImage source={WelcomeAndGoodbyeSingleDreamIvory} />
            <MixTitle>welcome and goodbye</MixTitle>
            <MixDescription>Single • Dream, Ivory</MixDescription>
          </Mix>

          <Mix>
            <MixImage source={IndieGaming} />
            <MixDescriptionWithoutTitle>Arctic Monkeys, Tyler, The Creator, The Neighbourhood e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Mix>
            <MixImage source={LoFiIndie} />
            <MixDescriptionWithoutTitle>Cigarettes After Sex, d4vd, Clairo, beabadoobee e mais</MixDescriptionWithoutTitle>
          </Mix>

          <Artist>
            <ArtistPicture source={Boa} />
            <ArtistName>bôa</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={Roar} />
            <ArtistName>Roar</ArtistName>
          </Artist>

          <Artist>
            <ArtistPicture source={Duster} />
            <ArtistName>Duster</ArtistName>
          </Artist>

          <Mix style={styles.lastCarouselItem}>
            <MixImage source={EyedressRadio} />
            <MixDescriptionWithoutTitle>Steve Lacy, Cigarettes After Sex, Mac DeMarco e mais</MixDescriptionWithoutTitle>
          </Mix>
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