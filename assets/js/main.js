// sc-slider 슬라이드
const swiper1 = new Swiper(`.sc-slider .slider-con1 .swiper`, {
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: `.slider-con1 .fraction`,
        type: 'fraction',
    },

    navigation: {
        nextEl: `.slider-con1 .btn-next`,
        prevEl: `.slider-con1 .btn-prev`,
    },
});

$(`.slider-con1 .btn-play`).click(function () {
    $(this).toggleClass('on');

    if ($(this).hasClass('on')) {
        swiper1.autoplay.stop();
    } else {
        swiper1.autoplay.start();
    }
});
const swiper2 = new Swiper(`.slider-con2 .swiper`, {
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: `.slider-con2 .fraction`,
        type: 'fraction',
    },

    navigation: {
        nextEl: `.slider-con2 .btn-next`,
        prevEl: `.slider-con2 .btn-prev`,
    },
});
swiper2.autoplay.stop();

$(`.slider-con2 .btn-play`).click(function () {
    $(this).toggleClass('on');

    if ($(this).hasClass('on')) {
        swiper2.autoplay.stop();
    } else {
        swiper2.autoplay.start();
    }
});

$('.sc-slider > div > h3').click(function (e) {
    e.preventDefault();
    index = $(this).parent('div').index();
    // console.log(index);

    $('.sc-slider > div h3 a').removeClass('on');
    $(this).find('a').addClass('on');

    $('.sc-slider > div .swiper').removeClass('on');
    $('.sc-slider > div')
        .eq(index - 1)
        .find('.swiper')
        .addClass('on');

    // 슬라이드1이 활성화 중이면 슬라이드2는 중지
    if ($('.slider-con1 .swiper').hasClass('on')) {
        swiper2.autoplay.stop();
    } else {
        swiper2.autoplay.start();
    }
    // 슬라이드2가 활성화 중이면 슬라이드1은 중지
    if ($('.slider-con2 .swiper').hasClass('on')) {
        swiper1.autoplay.stop();
    } else {
        swiper1.autoplay.start();
    }
});

// sc-slidebanner
const swiper3 = new Swiper('.sc-slidebanner .swiper', {
    slidesPerView: 3,
    spaceBetween: 43,
    allowTouchMove: false, // (false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
    // centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.sc-slidebanner .banner-control .fraction',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.sc-slidebanner .banner-control .btn-next',
        prevEl: '.sc-slidebanner .banner-control .btn-prev',
    },
});
$('.sc-slidebanner .btn-play').click(function () {
    $(this).toggleClass('stop');

    if ($(this).hasClass('stop')) {
        swiper3.autoplay.stop();
    } else {
        swiper3.autoplay.start();
    }
});

// 스크롤시 퀵탑
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.footer .quickTop').addClass('on');
    } else {
        $('.footer .quickTop').removeClass('on');
    }
});
$('.footer .quickTop').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 'slow');
});

//sc-relate 서브 메뉴 여닫기
$('.sc-relate .site-item').click(function (e) {
    e.preventDefault();
    console.log(e);

    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).siblings().find('.sub-area').stop().slideUp();
    $(this).find('.sub-area').stop().slideToggle();
});
$('.sc-relate .sub-area li:first-child').keydown(function (e) {
    //tab + shift
    if (e.keyCode === 9 && e.shiftKey) {
        $('.sc-relate .sub-area').stop().slideUp(200);
        $('.sc-relate .site-item').removeClass('on');
    }
});

$('.sc-relate .sub-area li:last-child').keydown(function (e) {
    //tab
    if (e.keyCode === 9 && !e.shiftKey) {
        $('.sc-relate .sub-area').stop().slideUp(200);
        $('.sc-relate .site-item').removeClass('on');
    }
});
