global.$ = $;
var gui = require('nw.gui');
var win = gui.Window.get();
var marked = require("marked");

$(document).ready(function(){
    setData();
    $('#text').live("keyup",function(){
        var text = $('#text').val();
	      $('p#md').html(marked(text));
    });
});

function setData(){
    $('#text').val(localStorage.text);
    $('p#md').html(marked(localStorage.text));
}
win.on('close', function() {
  this.hide();
  console.log("Save the data!");
  localStorage.text = $('#text').val();
  this.close(true);
});
