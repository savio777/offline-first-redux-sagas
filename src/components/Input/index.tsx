import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput, Label} from './styles';

interface Props extends TextInputProps {
  textLabel?: string;
}

const Input: React.FC<Props> = ({textLabel, ...props}) => (
  <Container>
    {textLabel && <Label>{textLabel}</Label>}
    <TextInput {...props} />
  </Container>
);

export default Input;
