import styled from 'styled-components/native';

export const ArtistCardContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;

  margin-right: 16px;
`;

export const ArtistCardPicture = styled.Image`
  width:  137.5px;
  height: 137.5px;

  border-radius: 300px;
`;

export const ArtistCardName = styled.Text`
  margin-top: 12px;

  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`;