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
        alert('colgar');
      }
  });

});