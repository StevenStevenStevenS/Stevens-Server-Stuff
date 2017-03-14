var loadimageElement = document.getElementById('loadimage');

loadimageElement.onchange = function() {
  var file = document.getElementById("loadimage").files[0];
  var reader = new FileReader();
  
  reader.onloadend = function() {
    var img = document.getElementById('animg');
    img.src = reader.result;
  }
  reader.readAsDataURL(file);
};