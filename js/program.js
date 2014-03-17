$(document).ready(function(){

  'use strict';

  var nStartPos   = 113,
      nCircleSize = 64,
      dDraggable  = $('#circle'),
      dCircle     = $('.circle'),
      nIncrement;

  dDraggable.draggable(
    {
      axis           : "x",
      containment    : "parent",
      revert         : true,
      revertDuration : 200,

      start : function() {},
      drag  : function() {
        if( dDraggable.position().left > nStartPos ) {
          nIncrement = nCircleSize + (dDraggable.position().left - nStartPos);
          dCircle.css({
            'width' : nIncrement
          });
        } else {
          nIncrement = (nStartPos - dDraggable.position().left) + nCircleSize;
          dCircle.css({
            'width'      : nIncrement,
            'left'       : dDraggable.position().left
          });
        }
      },
      stop  : function() {
        dCircle.css({
          'width'      : nCircleSize,
          'left'       : dDraggable.position().left
        });
      }
    }
  );

  $( "#ring_off" ).droppable({
    accept : "#circle",
    drop   : function( event, ui ) {
      alert('colgar');
    }
  });
})