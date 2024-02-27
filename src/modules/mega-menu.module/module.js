$(function() {
        $(".hs-header-search").appendTo(".hs-megaMenu-section .menu-search");
        $('.hs-megaMenu-section .menu-search > a').click(function(){
          $('.hs-megaMenu-section .menu-search .hs-header-search').slideToggle(250);
          $("body").removeClass("show-mobile-nav ");
          $('.custom-menu-primary.mobile_view').hide(250);
          $('.hs-megaMenu-section .custom-menu-primary .hs-menu-wrapper.firstLavel > ul > li').removeClass('slide-parent');
        });
        // Prepend a close icon to the menu
        $('.custom-menu-primary.mobile_view .hs-item-has-children > a').after('<div class="child-trigger"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.41781 4.01416L15.0045 10.6008C15.3758 10.9775 15.584 11.4852 15.584 12.0142C15.584 12.5432 15.3758 13.0509 15.0045 13.4276L8.41781 20.0142" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg></div>');
        $('.custom-menu-primary.mobile_view .hs-menu-wrapper ul li').each(function(){
            if ( $(this).children('ul').length ) {
                var myText = $(this).children('a').text();
                var myUrl = $(this).children('a').attr('href');
                $(this).children('ul').prepend( '<li class="hs-menu-item parent-clone"><a href="' + myUrl + '">' + myText + '</a></li>' );
                $(this).children('ul').prepend( '<li class="slide-back"><a><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 2.38525L1.5 7.38525L6.5 12.3853" stroke="#027FF1" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>Menu</a></li>' );
            }
        });
         
        // Add body class on mobile icon click
        $(".mobile-trigger").click(function(){
            $("body").toggleClass("show-mobile-nav ");
            $('.hs-megaMenu-section .menu-search .hs-header-search').hide();
            $('.custom-menu-primary.mobile_view').slideToggle(250);
            $('.custom-menu-primary.mobile_view').children().find('ul').removeClass('slide-parent');
            $('.custom-menu-primary.mobile_view').children().find('ul').removeClass('slide-this');
            $('.custom-menu-primary.mobile_view').children().find('div').removeClass('child-open');
        });
        
        $('.child-trigger').click(function() {
            $(this).parent().siblings().children('.child-trigger').removeClass('child-open');
            $(this).parent().siblings().children('.hs-menu-children-wrapper.firstLavel').removeClass('slide-this');
            $(this).addClass('child-open');
            $(this).parent().children('.hs-menu-children-wrapper.firstLavel').addClass('slide-this');
            $(this).parent().addClass('slide-parent');
        });
        
        $('.slide-back').click(function() {
            $(this).parent().removeClass('slide-this');
            $(this).parent().siblings('div').removeClass('child-open');
            $(this).parent().parent().removeClass('slide-parent');
        });
         
        // Set the menu height to 100% of the document
        function setMenuHeight(){
                if ( $(window).width() <= 767) {     
                var height = $(document).outerHeight(true);
                        $(".custom-menu-primary.mobile_view").height(height);
                }   
        }
        setMenuHeight();
        $(window).on("resize", setMenuHeight);
            
});

//inner menu child items on click
// $('.hs-megaMenu-section .mid-column-inner-menu .mid-column-inner-item .hs-item-has-children > a').after('<div class="child-trigger-inner"><i></i></div>');
$('.child-trigger-inner').click(function() {
  $(this).parent().siblings('.hs-item-has-children').find('.child-trigger-inner').removeClass('child-open');
  $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
  $(this).next('.hs-menu-children-wrapper').slideToggle(250);
  $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
  $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger-inner').removeClass('child-open-inner');
  $(this).toggleClass('child-open-inner');
  return false;
});
