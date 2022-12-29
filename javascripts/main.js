window.onload = function() {

  var file = document.getElementById("file");

  file.addEventListener(onchange, e => {
    console.log("quasiworld");
    console.log(e);
  });
};
