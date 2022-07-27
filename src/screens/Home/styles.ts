import styled from 'styled-components/native';

import colors from '../../helpers/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding-top: 20%;
`;

export const Content = styled.View`
  width: 80%;
  background-color: ${colors.gray};
  border-width: 1px;
  border-radius: 10px;
  border-color: ${colors.border};
  padding: 20px 15px 5px 15px;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: ${colors.black2};
  margin-top: 20px;
`;
