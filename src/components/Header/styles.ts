import styled, { css } from 'styled-components/native';
import RawBellRegularIcon from './../../components/icons/BellRegular';
import RawClockRegularIcon from './../../components/icons/ClockRegular';
import RawGearSolidIcon from './../../components/icons/GearSolid';

export const HeaderContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  
  height: 48px;
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