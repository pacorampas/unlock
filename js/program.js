$(document).ready(function(){

  'use strict';

  var nStartPos     = 113,
      nCircleSize   = 64,
      dActions      = $('#actions'),
      dDraggable    = $('#circle'),
      dCircle       = $('.circle'),
      svgElement    = $('.svgElement'),
      nMargin       = 50,
      colorLeft     = '#e00000',
      colorRight    = '#27c8c2',
      colorDefault  = 'white',
      nIncrement;

  dDraggable.draggable(
    {
      axis           : "x",
      containment    : "parent",
      revert         : true,
      revertDuration : 200,

      start : function() {
        dActions.css('opacity',1);
      },
      drag  : function() {
        if( dDraggable.position().left > nStartPos ) {
          nIncrement = nCircleSize + (dDraggable.position().left - nStartPos);
          dCircle.css({
            'width' : nIncrement
          });
          svgElement.css('fill',colorRight);
        } else {
          nIncrement = (nStartPos - dDraggable.position().left) + nCircleSize;
          dCircle.css({
            'width' : nIncrement,
            'left'  : dDraggable.position().left
          });
          if( dDraggable.position().left < nStartPos - nMargin ) {
            svgElement.css('fill',colorLeft);
          } else {
            svgElement.css('fill',colorDefault);
          }
        }
      },
      stop  : function() {
        dCircle.css({
          'width' : nCircleSize,
          'left'  : dDraggable.position().left
        });
        svgElement.css('fill',colorDefault);
        dActions.css('opacity',0.5);
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