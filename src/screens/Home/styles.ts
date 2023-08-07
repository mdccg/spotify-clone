import styled from 'styled-components/native';

export const HomeContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 32px 16px 0;
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

export const GenericTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Heading = styled(GenericTitle)`
  margin: 8px 0 24px;
`;

export const FavoriteArtistsHeading = styled(GenericTitle)`
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