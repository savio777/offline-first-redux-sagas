import React, {useState} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {loadSing} from '../../store/modules/Auth/actions';

import {Button, Input} from '../../components';
import {Container, Content, Title} from './styles';
import colors from '../../helpers/colors';

export default () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');

  const handleSignin = () => {
    try {
      dispatch(loadSing({login}));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Icon name="github" color={colors.black} size={40} />
      <Title>Sign in to GitHub</Title>
      <Content>
        <Input
          value={login}
          onChangeText={setLogin}
          textLabel="Username"
          onSubmitEditing={handleSignin}
        />
        <Button onPress={handleSignin}>Sign in</Button>
      </Content>
    </Container>
  );
};
