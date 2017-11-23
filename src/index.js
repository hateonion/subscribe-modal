import $ from 'jquery';
import * as Cookies from 'js-cookie';
import './index.css';

const toggleModal = isOpen => {
    const $d = $('#subscribe-modal');
    if (isOpen) {
        $d.addClass('is-opening');
        setTimeout(() => $d.addClass('is-active'), 300);
    } else {
        $d.removeClass('is-active');
        setTimeout(() => $d.removeClass('is-opening'), 300);
    }
};

$(document).ready(() => {
    if(Cookies.get('IsNewsLetterSubscribed') || Cookies.get('IsUserManualClose')) {
        return;
    }
    toggleModal(true);
    $('#subscribe-modal-close').on('click', (e) => {
        e.preventDefault();
        Cookies.set('IsUserManualClose', true, { expires: 1});
        toggleModal(false);
    });
    $('#subscribe-modal-submit').on('click', () => {
        Cookies.set('IsNewsLetterSubscribed', true);
        toggleModal(false);
    })
})
