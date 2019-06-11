function init() {
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
  $(document).ready(function(){
    $('.modal').modal();
  });
})(jQuery); // end of jQuery name space

}