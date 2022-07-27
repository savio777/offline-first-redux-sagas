import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ApplicationState} from '../../store';
import {loadSing} from '../../store/modules/Auth/actions';
import {AuthState} from '../../store/modules/Auth/types';

import {Container} from './styles';

export default () => {
  const {user, logged}: AuthState = useSelector<ApplicationState>(
    state => state.auth,
  );
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
      <TextInput
        value={login}
        onChangeText={setLogin}
        style={{width: '100%', backgroundColor: 'white'}}
      />
      <TouchableOpacity onPress={handleSignin}>
        <Text>logar</Text>
      </TouchableOpacity>
      <Text>{user?.id}</Text>
      {logged && <Text>logado! {logged}</Text>}
    </Container>
  );
};
