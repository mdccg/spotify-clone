import styled from 'styled-components/native';
import RawXMarkSolidIcon from './../../components/icons/XMarkSolid';

export const FixedTagGroupWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0 16px;
`;

export const TagGroupContainer = styled.ScrollView`
  height: 48px;
`;

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