
$(document).ready(function (){
    //Состояние главного sidebar
    if($(window).width() > 500) {
        $('.sidebar-toggle').click(function (){
            $('.main-wrapper').toggleClass('mini-sidebar');
        });
    }
    if($(window).width() < 500) {
        //показать sidebar в мобилке
        $('.call-main-sidebar').click(function (){
            $('.main-sidebar').addClass('show');
            $('body').addClass('scroll-locked');
            $('.overlay').addClass('show');
        })
        $('.sidebar-toggle').click(function (){
            $('.main-sidebar').removeClass('show');
            $('body').removeClass('scroll-locked');
            $('.overlay').removeClass('show');
        })
        //functions when dropdown menu show
        $('.dropdown').on('show.bs.dropdown', function () {
            $('.overlay').addClass('show');
            $('body').addClass('scroll-locked');
        });
        $('.dropdown').on('hide.bs.dropdown', function () {
            $('.overlay').removeClass('show');
            $('body').removeClass('scroll-locked');
        });
    }

    // input формы
    $('.form-label').each(function (){
        if($(this).find('input').val() != '') {
            $(this).closest('.form-label').addClass('form-label-done');
            $(this).closest('.form-label').addClass('form-filled');
            $(this).closest('.select-form').removeClass('form-label-done');
            $(this).closest('.select-form').removeClass('form-filled');
            $(this).closest('.textarea-form').removeClass('form-label-done');
            $(this).closest('.textarea-form').removeClass('form-filled');
        }
    });
    $('.form-label input').focus(function () {
        $(this).closest('.form-label').addClass('form-label-focus');
    });
    $('.form-label input').blur(function () {
        $(this).closest('.form-label').removeClass('form-label-focus');
        $(this).closest('.form-label').addClass('form-label-done');
        if ($(this).val() == '') {
            $(this).closest('.form-label').removeClass('form-label-done');
            $(this).closest('.form-label').removeClass('form-filled');
        }
    });
    //textarea form
    $('.form-label textarea').focus(function () {
        $(this).closest('.form-label').addClass('form-label-focus');
    });
    $('.form-label textarea').blur(function () {
        $(this).closest('.form-label').removeClass('form-label-focus');
        $(this).closest('.form-label').addClass('form-label-done');
        if ($(this).val().length === 0) {
            $(this).closest('.form-label').removeClass('form-label-done');
            $(this).closest('.form-label').removeClass('form-filled');
        }
    });
    //select-form
    $('.select-custom').select2({
        dropdownCssClass: 'select2-dropdown',
        placeholder: "",
        //данный скрипт отключает поиск select формы
        // minimumResultsForSearch: Infinity,
    });
    $('.select-custom').on('select2:open', function (e) {
        $(this).closest('.form-label').addClass('form-label-focus');
        if($(window).width() < 500) {
            let left = document.querySelector('.select2-container').style.left;
            console.log(left);
        }
    });

    $('.select-custom').on('select2:close', function (e) {
        $(this).closest('.form-label').removeClass('form-label-focus');
        $(this).closest('.form-label').addClass('form-label-done');
        if ($(this).val() == '') {
            $(this).closest('.form-label').removeClass('form-label-done');
        }
    });

    //Скрыть-показать пароль
    $('.show-pwd').click(function () {
        $(this).toggleClass('visible');
        var input = $($(this).prev('input'));
        if ($('.show-pwd').hasClass('visible')) {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    //Очистить форму
    $('.form-label input').keyup(function (){
        if($(this).val() !== '') {
            $(this).closest('.form-label').addClass('form-filled');
        } else {
            $(this).closest('.form-label').removeClass('form-filled');
        }
    });
    $('.form-label textarea').keyup(function (){
        if($(this).val() !== '') {
            $(this).closest('.form-label').addClass('form-filled');
        } else {
            $(this).closest('.form-label').removeClass('form-filled');
        }
    });
    $('.form-label .clear-form').click(function (){
        $(this).prev('input').val('');
        $(this).prev('textarea').val('');
        $(this).closest('.form-label').removeClass('form-filled');
        $(this).closest('.form-label').removeClass('form-label-done');
    });

    //Подсказка
    $('.alt').each(function (){
        let altTop = $(this).closest('.alt-box').height();
        let altRight = $(this).closest('.alt-box').width() / 2;
        $(this).css('top', altTop + 4 + 'px');
        $(this).css('right', altRight + 'px');
    });
});


//Переключение между ссылками sidebar
$('.sidebar-link').click(function (){
    $('.sidebar-link').removeClass('selected');
    $(this).addClass('selected');
    $('.sidebar-link-dropdown').removeClass('active');
    $('.first-level').removeClass('show');
    $(this).closest('.first-level').prev('.sidebar-link-dropdown').addClass('active');
    $(this).closest('.first-level').addClass('show');
    $('.main-wrapper').removeClass('mini-sidebar');
});

//Второй уровень ссылки sidebar
$('.sidebar-link-dropdown').click(function (){
    $(this).toggleClass('active');
    $(this).next('.first-level').toggleClass('show');
    $('.main-wrapper').removeClass('mini-sidebar');
});

//aside справа
$('.close-configuration').click(function (){
    $(this).closest('.configuration-aside').removeClass('show');
    $('.overlay').removeClass('show');
    $('body').removeClass('scroll-locked');
});


//Временно привязал действие к h6 (должен быть привязан к дате на календаре)
$('#noticeCalendar .calendar h6').click(function (){
    $(this).closest('.configuration-aside').removeClass('show');
    $('.notice-day-aside').addClass('show');
});

//mouseup event
$(document).mouseup(function (e) {
    var container = $('.main-sidebar, .configuration-aside, .account, .fixed-dropdown-list, .search-form, .modal, .daterangepicker, .introjs-tooltip');
    if(!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('show');
        $('.overlay').removeClass('show');
        $('body').removeClass('scroll-locked');
    }
});

//показать аккаунт
$('.call-account').click(function (){
    let positionTop = $(this).offset().top - $(window).scrollTop() + $(this).outerHeight();
    let positionRight = ($(window).width() - ($(this).offset().left + $(this).outerWidth()));
    $('.overlay').addClass('show');
    $('.account').addClass('show');
    $('.account').css('top', positionTop);
    $('.account').css('right', positionRight);
    $('body').addClass('scroll-locked');
})

//закрытие bootstrap модалки
$('.close-modal').click(function (){
    $(this).closest('.modal').modal('hide');
});

//окно поиска
$('.btn-search').click(function (){
    $('body').addClass('scroll-locked');
    $('.overlay').addClass('show');
    $(this).next('.search-form').addClass('show');
});

$('.close-search').click(function (){
    $(this).prev('input').val('');
    $('body').removeClass('scroll-locked');
    $('.overlay').removeClass('show');
    $(this).closest('.search-form').removeClass('show');
});

//окно поиска в мобилке
$(document).ready(function (){
    if($(window).width() < 500){
        let windowWidth = $(window).innerWidth();
        let searchWidth = windowWidth - 32;
        $('.search-form').css('width', searchWidth);
    }
});

//clipboard
let clipboard = new ClipboardJS('.clipboard-btn');
