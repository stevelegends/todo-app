import ProdConfig from './config.prod';
import DevConfig from './config.dev';

let Config = ProdConfig;

if (__DEV__) {
  Config = DevConfig;
}

export default Config;
