$(document).ready(function(){

  $( "#circle" ).draggable(
  	{ 
  		containment: "parent",
      revert: true,
  	}
  );
  
  $( "#ring_off" ).droppable({
  	accept: "#circle",
      drop: function( event, ui ) {
        $('#bg.call_declined').removeClass('disabled');
      },
      over: function( event, ui ) {
        $('#circle').css({
          opacity: 0
        });
        $( "#ring_off" ).addClass('active');
      },
      out: function( event, ui ) {
        $( "#ring_off" ).removeClass('active');
        $('#circle').css({
          opacity: 1
        });
      }
  });

  $( "#get_call" ).droppable({
    accept: "#circle",
      drop: function( event, ui ) {
        $('#bg.call_accepted').removeClass('disabled');
      },
      over: function( event, ui ) {
        $('#circle').css({
          opacity: 0
        });
        $( "#get_call" ).addClass('active');
      },
      out: function( event, ui ) {
        $( "#get_call" ).removeClass('active');
        $('#circle').css({
          opacity: 1
        });
      }
  });

  $( "#sms" ).droppable({
    accept: "#circle",
      drop: function( event, ui ) {
        $('#bg.sms_accepted').removeClass('disabled');
      },
      over: function( event, ui ) {
        $('#circle').css({
          opacity: 0
        });
        $( "#sms" ).addClass('active');
      },
      out: function( event, ui ) {
        $( "#sms" ).removeClass('active');
        $('#circle').css({
          opacity: 1
        });
      }
  });

  $('.reload').click(function(){
    location.reload(); 
  });

});