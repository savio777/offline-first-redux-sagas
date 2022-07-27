import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.green};
  border-radius: 8px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 15px;
`;
