import React from 'react';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import {Container} from './styles';
import {singnOut} from '../../store/modules/Auth/actions';

export default () => {
  const distpatch = useDispatch();

  return (
    <Container>
      <TouchableOpacity onPress={() => distpatch(singnOut())}>
        <Icon name="exit-to-app" size={50} />
      </TouchableOpacity>
    </Container>
  );
};
