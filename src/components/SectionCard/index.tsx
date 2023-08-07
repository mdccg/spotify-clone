import SectionType from './../../types/SectionType';
import { SearchFrame, SectionCardContainer, SectionFrameWrapper, SectionImage, SectionTitle } from './styles';

type SectionCardProps = {
  section: SectionType;
}

const SectionCard: React.FC<SectionCardProps> = ({
  section: { backgroundColor, imageUrl, title }
}) => {
  return (
    <SectionCardContainer style={{ backgroundColor }}>
      <SectionTitle>{title}</SectionTitle>

      <SectionFrameWrapper>
        <SearchFrame>
          <SectionImage source={imageUrl} />
        </SearchFrame>
      </SectionFrameWrapper>
    </SectionCardContainer>
  );
}

export default SectionCard;