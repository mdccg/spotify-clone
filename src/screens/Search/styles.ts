import styled from 'styled-components/native';
import RawCameraSolidIcon from './../../components/icons/CameraSolid';
import RawMagnifyingGlassSolidIcon from './../../components/icons/MagnifyingGlassSolid';

export const SearchContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 32px 16px 0;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
`;

export const IconContainer = styled.TouchableOpacity`
  width:  40px;
  height: 40px;

  justify-content: center;
  align-items: center;
`;

export const CameraSolidIcon = styled(RawCameraSolidIcon)`
  width:  24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.white};
`;

export const SearchBar = styled.TouchableOpacity`
  margin-top: 16px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 12px 16px;

  flex-direction: row;
  align-items: center;
`;

export const MagnifyingGlassSolidIcon = styled(RawMagnifyingGlassSolidIcon)`
  width:  24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.black};

  margin-right: 16px;
`;

export const Placeholder = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamMedium};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
`;

export const SubHeading = styled(Heading)`
  margin: 16px 0;
  font-size: 16px;
`;

export const SectionGroup = styled.View`
  flex-direction: row;
`;

export const SectionColumn = styled.View`
  flex: 1;
`;

export const GapBetweenColumns = styled.View`
  width: 16px;
`;