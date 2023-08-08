import styled from 'styled-components/native';

export const SectionCardContainer = styled.TouchableOpacity`
  flex-direction: row;

  padding: 16px 0 0 16px;
  border-radius: 4px;
  overflow: hidden;
  height: 90px;

  margin-bottom: 16px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.gotham.gothamBold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 20px;

  width: 80%;
`;

export const SectionFrameWrapper = styled.View`
  position: absolute;
`;

export const SearchFrame = styled.View`
  position: relative;
  left: 110px;
  top: 25px;
  transform: rotate(22.5deg);
`;

SearchFrame.defaultProps = {
  style: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  }
};

export const SectionImage = styled.Image`
  width:  64px;
  height: 64px;
  border-radius: 4px;
`;