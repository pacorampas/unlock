$(document).ready(function(){

  'use strict';

  var nStartPos     = 113,
      nCircleSize   = 64,
      dActions      = $('#actions'),
      dHangUp       = $('#hang_up'),
      dPickUp       = $('#pick_up'),
      dSms          = $('#sms'),
      dDraggable    = $('#circle'),
      dCircle       = $('.circle'),
      svgElement    = $('.svgElement'),
      nMargin       = 20,
      colorLeft     = '#e00000',
      colorRight    = '#27c8c2',
      colorDefault  = '#b5b5b5',
      colorWhite    = 'white',
      nIncrement;

  dDraggable.draggable(
    {
      axis           : "x",
      containment    : "parent",
      revert         : true,
      revertDuration : 200,

      start : function() {
        dActions.css('opacity',1);
        dCircle.css('opacity',1);
      },
      drag  : function() {
        if( dDraggable.position().left > nStartPos ) {
          // Drag Right ---------------------
          nIncrement = nCircleSize + (dDraggable.position().left - nStartPos);
          dCircle.css({
            'width' : nIncrement
          });
          svgElement.css('fill',colorDefault);
          if( dDraggable.position().left > nStartPos +65 ) {
            dCircle.css({
              'width' : 177
            });
            svgElement.css('fill',colorRight);
            dPickUp.addClass('pick_up_active');
          } else {
            dPickUp.removeClass('pick_up_active');
          }

        } else {
          // Drag Left ---------------------
          nIncrement = (nStartPos - dDraggable.position().left) + nCircleSize;
          dCircle.css({
            'width' : nIncrement,
            'left'  : dDraggable.position().left
          });

          if( dDraggable.position().left < nStartPos - nMargin ) {
            
            svgElement.css('fill',colorDefault);
            if( dDraggable.position().left < 50 ) {
              dCircle.css({
                'width' : 177,
                'left'  : 0
              });
              svgElement.css('fill',colorLeft);

              dSms.removeClass('sms_active');
              dHangUp.addClass('hang_up_active');

            } else {
              dCircle.css({
                'transition': 'none'
              });
              dHangUp.removeClass('hang_up_active');
            }

          } else {

            svgElement.css('fill',colorDefault);
            dHangUp.removeClass('hang_up_active');
          }
        }
      },
      stop  : function() {
        dCircle.css({
          'width' : nCircleSize,
          'left'  : dDraggable.position().left
        });
        svgElement.css('fill',colorWhite);
        dActions.css('opacity',0.5);
        dCircle.css('opacity',0);
        dHangUp.removeClass('hang_up_active');
      }
    }
  );

  $( "#hang_up" ).droppable({
    accept : "#circle",
    drop   : function( event, ui ) {
      $('.call-declined').removeClass('disabled');
      $('.main').addClass('disabled');
    }
  });
  $( "#pick_up" ).droppable({
    accept : "#circle",
    drop   : function( event, ui ) {
      $('.call-accepted').removeClass('disabled');
      $('.main').addClass('disabled');
    }
  });
  $( "#sms" ).droppable({
    accept : "#circle",
    drop   : function( event, ui ) {
      $('.sms-accepted').removeClass('disabled');
      $('.main').addClass('disabled');
    }
  });

  $('.js-reload').click(function(){
    location.reload();
  });

  $('.js-main').click(function(){
    window.location = 'index.html';
  });

  $('#sms').click(function(){
    $('.sms-accepted').removeClass('disabled');
    $('.main').addClass('disabled');
  });

});
