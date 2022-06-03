$(function(){
  $(".menu a, .footer__logo").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту go-topот начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

$('.slider__items').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
});

var mixer = mixitup('.gallery__items');
});