import $ from 'jquery';
import bootstrap from 'bootstrap';
// import './jquery.scrollbar'
import PerfectScrollbar from 'perfect-scrollbar';
import '../scss/style.scss';



$(document).ready(function(){
    // $('#search-list').scrollbar();
    const container = document.querySelector('#search-list', {
        
    });
    const ps = new PerfectScrollbar(container);
    document.querySelector('.ps__rail-y').style.height = '155px';
    document.querySelector('.ps__thumb-y').style.height = '59px';

    var input = $('.modal-form__search-field');
    $('.modal-send').on('click', function(){
        console.log('click');

        if(input.val() == '') {
            $('.modal-form__search-container').addClass('error');
            $('.error-message').text('заполните поле поиска');
        } else {
            if(input.val().indexOf('@') != -1 || input.val().indexOf('.') != -1) {
                var r = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,7}\.)?[a-z]{2,7}$/i;
                if (!r.test(input.val())) {
                    $('.modal-form__search-container').addClass('error');
                    $('.error-message').text('некорректный формат почты');
                }
            }
        }
    });

    input.focusin(function(){
        $('.modal-form__search-container').removeClass('error');
    });

});