import MixType from './../../types/MixType';
import { EllipsisSolidIcon, HighlightContainer, HighlightImage, HighlightIsPlayingContainer, HighlightTitle } from './styles';

type HighlightProps = {
  mix: MixType;
  isPlaying: boolean;
}

const Highlight: React.FC<HighlightProps> = ({ mix, isPlaying }) => (
  <HighlightContainer>
    <HighlightImage source={mix.imageUrl} />
    <HighlightTitle>{mix.title}</HighlightTitle>
    {isPlaying && (
      <HighlightIsPlayingContainer>
        <EllipsisSolidIcon />
      </HighlightIsPlayingContainer>
    )}
  </HighlightContainer>
);

export default Highlight;