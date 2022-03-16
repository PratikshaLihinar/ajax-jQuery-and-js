$(document).ready(function(){
    // accordion title is clicked
$(".accordion__title").click(function() {
    const $accordion_wrapper = $(this).parent();
    const $accordion_content = $(this).parent().find(".accordion__content").first();
    const $accordion_open = "accordion--open";
    //current accordion title 
    var heading =$(this).text();


    //  accordion is already open
    if ($accordion_wrapper.hasClass($accordion_open)) {
      $accordion_content.slideUp();                     
      $accordion_wrapper.removeClass($accordion_open);  // Remove Class accordionm--open class.
    }
    // accordion is not already open
    else {
      $accordion_content.slideDown();  
      $(".breadcrumb").append('<li class="breadcrumb-item"><a href="javascript:;">'+ heading +'</a></li>');
      $(".accordion__icon").addClass("accordion__icon_active");      
      $accordion_wrapper.addClass($accordion_open);   // Add class accordion--open class.
    }
  });


  $(".btn-resource").click(function(){
    $(".btn-list").removeClass("btn-active");
    $(this).addClass("btn-active");
    $(".resource").removeClass("resource-change");
    $(".resource").addClass("resource");

  });

  $(".btn-list").click(function(){
    $(".btn-resource").removeClass("btn-active");
    $(this).addClass("btn-active");
    $(".resource").addClass("resource-change");
  });

});
// $(document).ready(function(){
//     // accordion title is clicked
// $(".accordion__title").click(function() {
//     const $accordion_wrapper = $(this).parent();
//     const $accordion_content = $(this).parent().find(".accordion__content").first();
//     const $accordion_open = "accordion--open";
//     //current accordion title 
//     var heading =$(this).text();


//     //  accordion is already open
//     if ($accordion_wrapper.hasClass($accordion_open)) {
//       $accordion_content.slideUp();                     
//       $accordion_wrapper.removeClass($accordion_open);  // Remove Class accordionm--open class.
//     }
//     // accordion is not already open
//     else {
//       $accordion_content.slideDown();  
//       $(".breadcrumb").append('<li class="breadcrumb-item"><a href="javascript:;">'+ heading +'</a></li>');
//       $(".accordion__icon").addClass("accordion__icon_active");      
//       $accordion_wrapper.addClass($accordion_open);   // Add class accordion--open class.
//     }
//   });


//   $(".btn-resource").click(function(){
//     $(".btn-list").removeClass("btn-active");
//     $(this).addClass("btn-active");
//     $(".resource").removeClass("resource-change");
//     $(".resource").addClass("resource");

//   });

//   $(".btn-list").click(function(){
//     $(".btn-resource").removeClass("btn-active");
//     $(this).addClass("btn-active");
//     $(".resource").addClass("resource-change");
//   })

// })





//$(document).ready(function () {
    // alert($accordion_wrapper);
    // alert($accordion_open);
    // $(".breadcrumb").append('<li class="breadcrumb-item"><a href="javascript:;">'+ heading +'</a></li>');
  
  
  
    // var $this = $(this),
    // $bc = $('<li class="breadcrumb-item active"></li>');
  
    // $this.parents('.accordion_wrapper').each(function(n, li) {
    //   $(".breadcrumb").append('<li class="breadcrumb-item"><a href="javascript:;">'+ heading +'</a></li>');
    // });
    //   $('.breadcrumb').html( $bc.prepend(' <a href="javascript:;">Resource Library</a>') );
    //   return false;
    // $('.accordion__title').on('click', function() {
    //   var $this = $(this),
    //       $bc = $('<li class="breadcrumb-item active"></li>');
  
    //   $this.parents('div').each(function(n, div) {
    //       var $a = $(div).children('a').clone();
    //       $bc.prepend(' / ', $a);
    //   });
    //     $('.breadcrumb').html( $bc.prepend('<a href="javascript:;">Resource Library</a>') );
    //     return false;
    // }) 
  
  
    // var UpdateBreadcrumbs = function() {
    //   // var i =   $("li.breadcrumb-item a").text("");
  
    //   if(heading==)
    //   $("a").click(function(event) {
    //     event.preventDefault();
    //   });
    // };
  
    // UpdateBreadcrumbs();
  
    // $('.accordion__title').click(function() {
  
    //   var heading =$(this).text();
  
    //   const $accordion_wrapper = $(this).parent();
    //       const $accordion_content = $(this).parent().find(".accordion__content").first();
    //       const $accordion_open = "accordion--open";
    //       //current accordion title 
    //       var heading =$(this).text();
  
  
    //       //  accordion is already open
    //       if ($accordion_wrapper.hasClass($accordion_open)) {
    //         $accordion_content.slideUp();                     
    //         $accordion_wrapper.removeClass($accordion_open);  // Remove Class accordionm--open class.
    //       }
    //       // accordion is not already open
    //       else {
    //         $accordion_content.slideDown();  
  
  
    //         $(".accordion__icon").addClass("accordion__icon_active");      
    //         $accordion_wrapper.addClass($accordion_open);   // Add class accordion--open class.
    //       }
    // });