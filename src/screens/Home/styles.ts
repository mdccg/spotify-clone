import styled, { css } from 'styled-components/native';
import RawBellRegularIcon from '../../components/icons/BellRegular';
import RawClockRegularIcon from '../../components/icons/ClockRegular';
import RawGearSolidIcon from '../../components/icons/GearSolid';
import RawXMarkSolidIcon from '../../components/icons/XMarkSolid';

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