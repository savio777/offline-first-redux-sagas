import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  background-color: white;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${colors.border};
  padding: 4px;
`;

export const Label = styled.Text`
  color: ${colors.black};
  margin-bottom: 10px;
`;
