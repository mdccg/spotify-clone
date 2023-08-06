import styled, { css } from 'styled-components/native';
import RawBellRegularIcon from './../../components/icons/BellRegular';
import RawClockRegularIcon from './../../components/icons/ClockRegular';
import RawGearSolidIcon from './../../components/icons/GearSolid';
import RawXMarkSolidIcon from './../../components/icons/XMarkSolid';

export const HomeContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 32px 16px 0;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Greetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const IconGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  width:  48px;
  height: 48px;

  justify-content: center;
  align-items: center;
`;

const iconStyles = css`
  width:  24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.white};
`;

export const BellRegularIcon = styled(RawBellRegularIcon)`
  ${iconStyles};
`;

export const ClockRegularIcon = styled(RawClockRegularIcon)`
  ${iconStyles};
`;

export const GearSolidIcon = styled(RawGearSolidIcon)`
  ${iconStyles};
`;

// FIXME
export const TagGroup = styled.ScrollView``;

export const Tag = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  margin-right: 8px;
  padding: 0 16px;
  height: 32px;

  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 32px;
`;

export const RoundedTag = styled(Tag)`
  width: 32px;
  padding: 0;
`;

export const TagLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamMedium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
`;

export const XMarkSolidIcon = styled(RawXMarkSolidIcon)`
  width:  20px;
  height: 20px;

  fill: ${({ theme }) => theme.colors.white};
`;

export const HighlightsGroup = styled.View`
  margin: 8px 0;

  flex-direction: row;
  align-items: center;
`;

export const HighlightsColumn = styled.View`
  flex: 1;
`;

export const GapBetweenColumns = styled.View`
  width: 8px;
`;

export const Heading = styled(Greetings)`
  margin: 8px 0 24px;
`;

export const FavoriteArtistsHeading = styled(Greetings)`
  margin: 24px 0;
`;

export const Carousel = styled.ScrollView``;

export const LooksLikeContainer = styled.View`
  margin: 48px 0 20px;

  flex-direction: row;
  align-items: center;
`;

export const LooksLikePicture = styled.Image`
  width:  48px;
  height: 48px;

  border-radius: 24px;

  margin-right: 8px;
`;

export const LooksLikeLabelContainer = styled.View``;

export const LooksLikeLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBook};
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: 12px;

  text-transform: uppercase;
`;

export const LooksLikeArtistName = styled.Text`
  margin-top: 2px;

  font-family: ${({ theme }) => theme.fonts.gotham.gotham_Bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
`;