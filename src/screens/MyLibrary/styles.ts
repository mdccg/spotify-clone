import styled, { css } from 'styled-components/native';
import RawMagnifyingGlassSolidIcon from './../../components/icons/MagnifyingGlassSolid';
import RawPlusSolidIcon from './../../components/icons/PlusSolid';
import RawSortSolidIcon from './../../components/icons/SortSolid';
import RawSquaresRegularIcon from './../../components/icons/SquaresRegular';
import RawListSolidIcon from './../../components/icons/ListSolid';

const gutter = css`
  padding: 32px 16px 0;
`;

export const MyLibraryContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  ${gutter};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const MyProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MyProfilePicture = styled.Image`
  width:  32px;
  height: 32px;
  border-radius: 16px;

  margin-right: 16px;
`;

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;

export const IconGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  width:  32px;
  height: 32px;

  justify-content: center;
  align-items: center;

  margin-left: 16px;
`;

const iconStyles = css`
  width:  24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.white};
`;

export const MagnifyingGlassSolidIcon = styled(RawMagnifyingGlassSolidIcon)`
  ${iconStyles};
`;

export const TinyPlusSolidIcon = styled(RawPlusSolidIcon)`
  ${iconStyles};
`;

export const TagGroupWrapper = styled.View`
  padding: 16px 16px 0;
  
  border-bottom-width: 2px;
  border-bottom-color: #000;
`;

export const SavedStuffContainer = styled.View`
  ${gutter};
  padding-top: 16px;
`;

export const FilterContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const SortByContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const filterIconStyles = css`
  ${iconStyles};
`;

export const SortSolidIconContainer = styled.View`
  position: relative;
  top: 2px;
`;

export const SortSolidIcon = styled(RawSortSolidIcon)`
  ${filterIconStyles};

  width:  26px;
  height: 26px;

  margin-right: 8px;
`;

export const SelectedClassification = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamMedium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;

export const ChangeViewContainer = styled.TouchableOpacity`
  width:  32px;
  height: 32px;

  justify-content: center;
  align-items: center;
`;

export const SquaresRegularIcon = styled(RawSquaresRegularIcon)`
  ${filterIconStyles};

  width:  20px;
  height: 20px;
`;

export const ListSolidIcon = styled(RawListSolidIcon)`
  ${filterIconStyles};

  width:  18px;
  height: 18px;
`;