import $ from 'jquery';
import * as Cookies from 'js-cookie';
import 'font-awesome/css/font-awesome.min.css';
import _ from 'lodash';
import './index.css';

$(document).ready(() => {
  $('#test-button').on('click', (e) => {
    e.preventDefault();
  })
})