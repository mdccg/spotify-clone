import styled from 'styled-components/native';

export const HomeContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.black};

  padding: 32px 16px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Greetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;