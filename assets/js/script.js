$(document).ready(function () {
  $('.modal-dialog-centered a').click(function () {
    $('.enter-pin-box').addClass("active");
  });
  $('.enter-pin-box .enter-pin-close-btn a').click(function () {
    $('.enter-pin-box').removeClass("active");
  });
  $('.gst-invoice-chack').click(function () {
    $('.gst-invoice-box').addClass("active");
  });
  $('.gst-invoice-box .enter-pin-close-btn a').click(function () {
    $('.gst-invoice-box').removeClass("active");
  });
  $('.order-confirmation-inner .btn').click(function () {
    $('.open-box-delivery-popup').addClass("active");
  });
  $('.delivery-popup-close-btn a').click(function () {
    $('.open-box-delivery-popup').removeClass("active");
  });

  /*********  Quntity  *********/
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});




/*********  Main PDP Slick  *********/
$(document).ready(function () {
  $('.main-pdp-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.main-thumbnail-slider',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.main-thumbnail-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.main-pdp-slider',
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.first-interested-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.second-interested-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.right-brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
$(document).ready(function () {

  $('.main-min-cart .main-title-code .btn').click(function () {
    $('.main-enter-pin').addClass("active");
  });
  $('.enter-pin-close-btn a').click(function () {
    $('.main-enter-pin').removeClass("active");
  });

  $('.featured-brands-row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // on click copy the content from #copy-id to clipboard
  document.querySelector("#click-to-copy").addEventListener("click", (e) => {
    let value = document.querySelector("#copy-id");
    value.select();
    document.execCommand("copy");
  });
});

$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.main-mobile-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    // autoplay: true,
  });

});