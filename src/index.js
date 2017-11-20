import $ from 'jquery';
import * as Cookies from 'js-cookie';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

$(document).ready(() => {
  if(Cookies.get('IsNewsLetterSubscribed') || Cookies.get('IsUserManualClose')) {
    return;
  }
  $('#subscribe-modal').css('display', 'flex');
  $('#subscribe-modal-close').on('click', (e) => {
    e.preventDefault();
    Cookies.set('IsUserManualClose', true, { expires: 1});
    $('#subscribe-modal').css('display', 'none');
  });
  $('#subscribe-modal-submit').on('click', () => {
    Cookies.set('IsNewsLetterSubscribed', true);
  })
})
