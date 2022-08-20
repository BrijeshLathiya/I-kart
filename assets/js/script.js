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
  $(document).ready(function(){
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
  $('.second-interested-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    autoplaySpeed: 2000,
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
  $('.right-brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    autoplaySpeed: 2000,
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
  })
 

});