import styled, { css } from 'styled-components/native';
import RawHeartRegularIcon from './../icons/HeartRegular';
import RawHeartSolidIcon from './../icons/HeartSolid';
import RawPauseSolidIcon from './../icons/PauseSolid';
import RawPlaySolidIcon from './../icons/PlaySolid';

export const PlayerContainer = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  bottom: 48px;
  
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 8px;
  width: 90%;
  
  border-bottom-color: ${({ theme }) => theme.colors.lightpurple};
  border-bottom-width: 4px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const MusicPicture = styled.Image`
  width:  40px;
  height: 40px;
  border-radius: 8px;
  
  margin-right: 12px;
`;

export const MusicDetails = styled.View`
  flex: 1;
`;

export const MusicName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;

export const MusicAuthor = styled.Text`
  margin-top: 4px;

  font-family: ${({ theme }) => theme.fonts.gotham.gothamMedium};
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: 12px;

  opacity: .9;
`;

export const Controls = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  width:  40px;
  height: 40px;

  justify-content: center;
  align-items: center;
`;

const iconStyles = css`
  width:  20px;
  height: 20px;

  fill: ${({ theme }) => theme.colors.white};
`;

export const PlaySolidIcon = styled(RawPlaySolidIcon)`
  ${iconStyles};
`;

export const PauseSolidIcon = styled(RawPauseSolidIcon)`
  ${iconStyles};
`;

export const HeartSolidIcon = styled(RawHeartSolidIcon)`
  width:  24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.green};
`;

export const HeartRegularIcon = styled(RawHeartRegularIcon)`
  ${iconStyles};
`;