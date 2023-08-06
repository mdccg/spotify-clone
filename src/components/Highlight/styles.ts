import styled from 'styled-components/native';
import RawEllipsisSolidIcon from './../../components/icons/EllipsisSolid';

export const HighlightContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  flex: 1;

  margin-bottom: 8px;
`;

export const HighlightImage = styled.Image`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  width:  64px;
  height: 64px;

  margin-right: 12px;
`;

export const HighlightTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  
  flex-shrink: 1;
  line-height: 18px;
`;

HighlightTitle.defaultProps = {
  numberOfLines: 2,
};

export const HighlightIsPlayingContainer = styled.View`
  padding-right: 4px;
`;

export const EllipsisSolidIcon = styled(RawEllipsisSolidIcon)`
  margin-top: 8px;

  width:  12px;
  height: 12px;

  fill: ${({ theme }) => theme.colors.green};
`;