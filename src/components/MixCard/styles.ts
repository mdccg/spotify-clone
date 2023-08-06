import styled from 'styled-components/native';

export const MixCardContainer = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const MixCardImage = styled.Image`
  width:  150px;
  height: 150px;
`;

export const MixCardTitle = styled.Text`
  margin: 12px 0 2px;

  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;

export const MixCardDescription = styled.Text`
  width: 150px;

  font-family: ${({ theme }) => theme.fonts.gotham.gothamBook};
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: 12px;

  line-height: 20px;
`;

export const MixCardDescriptionWithoutTitle = styled(MixCardDescription)`
  margin-top: 8px;
`;

[MixCardTitle, MixCardDescription].map((e) => (e.defaultProps = { numberOfLines: 1 }));
MixCardDescriptionWithoutTitle.defaultProps = {
  numberOfLines: 2,
};