import MixType from './../../types/MixType';
import { MixCardContainer, MixCardDescription, MixCardDescriptionWithoutTitle, MixCardImage, MixCardTitle } from './styles';

type MixCardProps = {
  mix: MixType;
  isTheLastOne: boolean;
}

const MixCard: React.FC<MixCardProps> = ({ mix, isTheLastOne }) => {
  const MixCardDescriptionComponent = mix.title ? MixCardDescription : MixCardDescriptionWithoutTitle;

  return (
    <MixCardContainer style={isTheLastOne ? { marginRight: 0 }: {}}>
      <MixCardImage source={mix.imageUrl} />
      {mix.title && <MixCardTitle>{mix.title}</MixCardTitle>}
      <MixCardDescriptionComponent>{mix.description}</MixCardDescriptionComponent>
    </MixCardContainer>
  );
}

export default MixCard;