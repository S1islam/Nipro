// Gallery Filter jQuery Codes
var $grid = $('.grid').isotope({
});
// filter items on button click
$('.gallery-btn-area').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
$('.grid').isotope({
  itemSelector: '.item-box',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gallery-item'
  }
});

// WOW JS Animation
  new WOW().init();
  
// Testimonial Prev & Next 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimer:10000,
    nav:true,
    navText:[
      'Prev',
      'Next'
    ],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// $(document).ready(function(){

//   $('#allbtn').click(function(){
//     $('#appdesign').show(1000);
//     $('#webdesign').show(1000);
//     $('#uidesign').show(1000);
//     $('#photoshop').show(1000);
//     $('#photoshop1').show(1000);
//     $('#photoshop2').show(1000);
//   });

//   $('#appbtn').click(function(){
//     $('#appdesign').show(1000);
//     $('#webdesign').hide(1000);
//     $('#uidesign').show(1000);
//     $('#photoshop').hide(1000);
//     $('#photoshop1').hide(1000);
//     $('#photoshop2').hide(1000); 
//   })

//   $('#webbtn').click(function(){
//     $('#appdesign').hide(1000);
//     $('#webdesign').show(1000);
//     $('#uidesign').hide(1000);
//     $('#photoshop').hide(1000);
//     $('#photoshop1').hide(1000);
//     $('#photoshop2').hide(1000); 
//   })

//   $('#uibtn').click(function(){
//     $('#appdesign').show(1000);
//     $('#webdesign').hide(1000);
//     $('#uidesign').show(1000);
//     $('#photoshop').hide(1000);
//     $('#photoshop1').hide(1000);
//     $('#photoshop2').hide(1000); 
//   })

//   $('#psbtn').click(function(){
//     $('#appdesign').hide(1000);
//     $('#webdesign').hide(1000);
//     $('#uidesign').hide(1000);
//     $('#photoshop').show(1000);
//     $('#photoshop1').show(1000);
//     $('#photoshop2').show(1000); 
//   })

// });










