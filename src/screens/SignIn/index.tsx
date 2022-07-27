import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {loadSing} from '../../store/modules/Auth/actions';

import {Button, Input} from '../../components';
import {Container, Content, Title, Error} from './styles';
import colors from '../../helpers/colors';
import {AuthState} from '../../store/modules/Auth/types';
import {ApplicationState} from '../../store';

export default () => {
  const {error}: AuthState = useSelector<ApplicationState>(state => state.auth);

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
        {error && <Error>{error}</Error>}
      </Content>
    </Container>
  );
};
