/*  file: kauppa.js
    desc: Verkkokauppa Trendit blogisivun skriptit
    date: 29.3.2018
    auth: Maarit Parkkonen*/

/*modaali*/

var $modal = $('#modal');

$.ajax('/url')
  .done(function(resp){
    $modal.html(resp).foundation('open');
});

// closes the panel on click outside
$(document).mouseup(function (e) {
  var container = $('#contact-panel');
  if (!container.is(e.target) // if the target of the click isn't the container...
  && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.removeClass('is-active');
    }
});

