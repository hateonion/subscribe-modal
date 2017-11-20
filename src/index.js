import $ from 'jquery';
import * as Cookies from 'js-cookie';
import 'font-awesome/css/font-awesome.min.css';
import _ from 'lodash';
import './index.css';

$(document).ready(() => {
  if(Cookies.get('IsNewsLetterSubscribed')) {
    return;
  }
  $('#subscribe-modal').css('display', 'flex');
  $('#subscribe-modal-close').on('click', (e) => {
    e.preventDefault();
    $('#subscribe-modal').css('display', 'none');
  });
  $('#subscribe-modal-submit').on('click', () => {
    Cookies.set('IsNewsLetterSubscribed', true);
  })
})