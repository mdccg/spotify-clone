import styled, { css } from 'styled-components/native';
import RawPinSolidIcon from './../icons/PinSolid';
import RawCircleArrowDownSolidIcon from './../icons/CircleArrowDownSolid';

export const PlaylistItemListContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const PlaylistImage = styled.Image`
  width:  72px;
  height: 72px;

  margin-right: 16px;
`;

export const PlaylistDataContainer = styled.View`
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const PlaylistTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamMedium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
`;

export const PlaylistDetails = styled.View`
  margin-top: 6px;

  flex-direction: row;
  align-items: center;
`;

const iconStyles = css`
  width:  15px; 
  height: 15px; 
  fill: ${({ theme }) => theme.colors.green};

  margin-right: 6px;
`;

export const PinSolidIcon = styled(RawPinSolidIcon)`
  ${iconStyles};
`;

export const CircleArrowDownSolidIcon = styled(RawCircleArrowDownSolidIcon)`
  ${iconStyles};
`;

export const ExtraInformation = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamMedium};
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: 12px;
`;

[PlaylistTitle, ExtraInformation].map((e) => (e.defaultProps = { numberOfLines: 1 }));