import { useState } from 'react';
import MullholandDrive from './../../../assets/images/mullholand-drive.jpeg';
import { Controls, HeartSolidIcon, IconContainer, MusicAuthor, MusicDetails, MusicName, MusicPicture, PauseSolidIcon, PlaySolidIcon, PlayerContainer } from './styles';
import HeartRegularIcon from './../icons/HeartRegular';
import Theme from './../../stylesheets/theme';
import { Audio } from 'expo-av';
import AvPlaybackStatus from '../../types/AvPlaybackStatus';

const Player = () => {
  const [music, setMusic] = useState<Audio.Sound | undefined>();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [endHandler, setEndHandler] = useState<NodeJS.Timeout | undefined>();

  const like = () => setIsLiked(!isLiked);
  
  const getMusic = async (): Promise<Audio.Sound> => {
    const { sound } = await Audio.Sound.createAsync(require('./../../../assets/audios/something-about-you-eyedress-dent-may.mp3'));
    await sound.playAsync();
    setMusic(sound);
    return sound;
  }

  const getTimeout = async (music: Audio.Sound) => {
    const { positionMillis, durationMillis } = await music.getStatusAsync() as AvPlaybackStatus;

    setEndHandler(
      setTimeout(async () => {
        setMusic(undefined);
        setIsPlaying(false);

      }, durationMillis - positionMillis)
    );
  }

  const play = async () => {
    clearInterval(endHandler);
    
    if (isPlaying) {
      music?.pauseAsync();
      
    } else {

      if (!music) {
        let music = await getMusic();
        getTimeout(music);
      
      } else {
        music.playAsync();
        getTimeout(music);
      }
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <PlayerContainer>
      <MusicPicture source={MullholandDrive} />

      <MusicDetails>
        <MusicName>Something About You</MusicName>
        <MusicAuthor>Eyedress</MusicAuthor>
      </MusicDetails>

      <Controls>
        <IconContainer onPress={like}>
          {isLiked ? <HeartSolidIcon /> : (
            <HeartRegularIcon width={24} height={24} fill={Theme.colors.white} />
          )}
        </IconContainer>

        <IconContainer onPress={play}>
          {isPlaying ? <PauseSolidIcon /> : <PlaySolidIcon />}
        </IconContainer>
      </Controls>
    </PlayerContainer>
  );
}

export default Player;