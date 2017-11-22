import $ from 'jquery';
import * as Cookies from 'js-cookie';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

const popupModal = () => {
    $('#subscribe-modal').css('transform', 'scale(1)');
}

$(document).ready(() => {
  if(Cookies.get('IsNewsLetterSubscribed') || Cookies.get('IsUserManualClose')) {
    return;
  }
    window.setTimeout(popupModal, 500);
  $('#subscribe-modal-close').on('click', (e) => {
    e.preventDefault();
    Cookies.set('IsUserManualClose', true, { expires: 1});
      $('#subscribe-modal').css('transform', 'scale(0)');
  });
  $('#subscribe-modal-submit').on('click', () => {
    Cookies.set('IsNewsLetterSubscribed', true);
  })
})
