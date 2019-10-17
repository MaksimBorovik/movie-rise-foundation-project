$(document).ready(function(){
  $('.header__slider-items').slick({
    adaptiveHeigh: true,
    autoplay: true,
    dots: true,
    appendDots: $('.header__slider'),
    arrows: false
  });
});

$(document).foundation();

$('.header__top-controls').click(function() {
  $('.header__top-button').toggleClass('active');
});

$('.header__slider-item-buttons').click(function() {
  $('.header__slider-item-button').toggleClass('active');
});

$('.chart__menu-right-list').click(function() {
  $('.chart__menu-right-list-item .chart__menu-right-list-item-link').toggleClass('active');
});

$('[data-js="open-full-info"]').on('click', function () {

  let fullInfo = $(this).parents('.card').find('.chart__list-item-full-info').fadeToggle('fast');

  let cardSection = $(this).parents('.card').find('.card-section').css({'display': 'none'});

  let info = $(this).parents('.card').find('.chart__list-item-info').css({'display': 'none'});

  return false;
});

$('[data-close]').on('click', function () {
  let cardSection = $(this).parents('.card').find('.card-section').css({'display': 'flex'});

  let info = $(this).parents('.card').find('.chart__list-item-info').css({'display': 'flex'});
});