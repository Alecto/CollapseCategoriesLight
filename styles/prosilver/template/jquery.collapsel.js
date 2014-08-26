(function ($) {

	var sh_i = -1;		// позиция в массиве
	var showhidden_triger = [];	// массив состояний категорий


	// создаем кнопки, загружам и устанавливаем состояния категорий
	$(".topiclist").each(function () {
	    $(this).before(function () {
			// для recent topics
 			// if ($(this).hasClass('topics') || $(this).hasClass('forums')) {
		// только категории
 		if ($(this).hasClass('forums')) {
			sh_i = sh_i + 1;
			var cat_id = 'cat_' + sh_i;	// формируем имя категории
						//localStorage.clear(cat_id);
			showhidden_triger[sh_i] = localStorage.getItem(cat_id); // загружаем состояние из локалхоста
						//alert(cat_id + '   ' + showhidden_triger[sh_i]);
			if (showhidden_triger[sh_i] == null) { showhidden_triger[sh_i] = 'true' };
                	if (showhidden_triger[sh_i] == 'false') {
				return '<div class="collapsetrigger collapseinactive" cat="' + cat_id +'"></div>';
				} else {
				return '<div class="collapsetrigger collapseactive" cat="' + cat_id +'"></div>';
			}
		}
	    });
	});

		// для recent topics
		// $("ul.topics").wrap('<div class="collapsethis" aria-hidden="false"></div>');
	$("ul.forums").wrap('<div class="collapsethis" aria-hidden="false"></div>');


	sh_i = 0;	// обнуляем позиции массива

	// создаем атрибуты, показываем/скрываем категории
	$(".collapsethis").each(function () {
		if (showhidden_triger[sh_i] == 'false') {
			$(this).attr('aria-hidden', 'true').hide();
			$(this).parents('div.forabg').css('opacity', '0.4');
		}
		sh_i = sh_i + 1;
	});


	var active = "collapseactive";
	var inactive = "collapseinactive";


	// отрабатываем клики показать/скрыть категорию
	$('.collapsetrigger').click(function () {
		var showhidden_triger_this = $(this).next().attr('aria-hidden');
		if (showhidden_triger_this == "false") {
			$(this).next().attr('aria-hidden', 'true').slideUp(500).parents('div.forabg').animate({opacity: '0.4'}, 500);
			$(this).removeClass(active).addClass(inactive);
		} else {
 			$(this).next().attr('aria-hidden', 'false').slideDown(500).parents('div.forabg').animate({opacity: '1.0'}, 500);
			$(this).removeClass(inactive).addClass(active);
		}
	localStorage.setItem($(this).attr('cat'), showhidden_triger_this);	// сохраняем

    });



})(jQuery);