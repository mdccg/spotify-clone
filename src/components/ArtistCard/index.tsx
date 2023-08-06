import ArtistType from './../../types/ArtistType';
import { ArtistCardContainer, ArtistCardName, ArtistCardPicture } from './styles';

type ArtistCardProps = {
  artist: ArtistType;
  isTheLastOne: boolean;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, isTheLastOne }) => (
  <ArtistCardContainer style={isTheLastOne ? { marginRight: 0 } : {}}>
    <ArtistCardPicture source={artist.imageUrl} />
    <ArtistCardName>{artist.name}</ArtistCardName>
  </ArtistCardContainer>
);

export default ArtistCard;