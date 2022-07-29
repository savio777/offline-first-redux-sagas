import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const tron = Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect();

console.tron = tron;

//tron.clear();

export default tron;
