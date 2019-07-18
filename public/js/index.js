// Get references to page elements
$(function(){

  $('.carousel-control').click(function(e){
      e.preventDefault();
      $("#aaron-modal").carousel( $(this).data() );
  });

});