$(document).ready(function(){
  var startPos = 113;
  $( "#circle" ).draggable(
    {
     axis: "x",
     containment: "parent",
     revert: true,
      start: function() {
        
        //console.log( "Start: "+counts[ 0 ] );
        //updateCounterStatus( $start_counter, counts[ 0 ] );
      },
      drag: function() {
        //console.log( "Drag: "+counts[ 1 ]);
        var left = $("#circle").position().left;
 
        var increment = startPos - left;
        $("#circle").css('width', increment + 64 );
        console.log( "Increment: "+increment );
        
        console.log( $("#circle").position().left );
        //updateCounterStatus( $drag_counter, counts[ 1 ] );
      },
      stop: function() {
        $("#circle").css('width', 64);
        //console.log("Stop: "+counts[ 2 ] );
        //updateCounterStatus( $stop_counter, counts[ 2 ] );
      }
    }
  );

  $( "#ring_off" ).droppable({
  	accept: "#circle",
	drop: function( event, ui ) {
		alert('colgar');
	}
 });
})