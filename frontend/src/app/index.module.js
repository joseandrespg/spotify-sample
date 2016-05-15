/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import {  } from './models/models.module';
import {  } from './components/components.module';
import { MainController } from './main/main.controller';

angular.module('frontend', [
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ui.router',
  'ui.bootstrap',
  'toastr',

  'frontend.models',
  'frontend.components'
])
  .constant('API_URL', 'http://127.0.0.1:9000/v1')
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);
