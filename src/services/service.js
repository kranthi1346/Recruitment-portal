import HttpService from './HttpService';
import {
  GET_ALL_POST,
} from './endPointConstant';
import {
  X_API_KEY,
} from '../utils/constants';
// import {
//   getSelectedNPI,
// } from '../utils/common/helpers';
import _ from 'lodash';

const getToken = () => localStorage.getItem('token');

const getDefaultConfig = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

const getAPIKeyConfig = () => ({
  'Content-Type': 'application/json',
  'x-api-key': `${X_API_KEY}`,
});

const headersContentType = () => ({
  'Content-Type': 'application/json',
});

//For PostFiles starts
const getDefaultFileConfig = () => ({
  Authorization: `Bearer ${getToken()}`,
});
//For PostFiles ends

export const getPostlist = () => HttpService.get(GET_ALL_POST, {}, {});
