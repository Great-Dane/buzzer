window.onload = function() {
  // var demo = document.getElementById('demo');

  const keyCode1 = 49;
  const keyCode2 = 50;
  const keyCode3 = 51;
  const keyCode4 = 52;
  const keyCode5 = 53;
  const keyCode6 = 54;
  const keyCode7 = 55;
  const keyCode8 = 56;
  const keyCode9 = 57;
  const keyCode0 = 58;

  var value = 0;
  var space_bar = 32;
  var right_arrow = 39;

  let p1points = 0;
  let p2points = 0;
  let p3points = 0;
  let p4points = 0;

  
  const p1input = document.getElementById("p1input");
  const p2input = document.getElementById("p2input");
  const p3input = document.getElementById("p3input");
  const p4input = document.getElementById("p4input");

  window.onkeydown = function(event) {
  // demo.innerHTML = 'Pressed ' + event.keyCode;
  
  if (event.keyCode == keyCode1) {
    p1points++;
  }
  if (event.keyCode == keyCode2) {
    p2points++;
  }
  if (event.keyCode == keyCode3) {
    p3points++;
  }
  if (event.keyCode == keyCode4) {
    p4points++;
  }
  if (event.keyCode == keyCode5) {
    p1points--;
  }
  if (event.keyCode == keyCode6) {
    p2points--;
  }
  if (event.keyCode == keyCode7) {
    p3points--;
  }
  if (event.keyCode == keyCode8) {
    p4points--;
  }
  
  p1input.value = p1points;
  p2input.value = p2points;
  p3input.value = p3points;
  p4input.value = p4points;
  }
  p1input.addEventListener("input", updateValue);

  function updateValue(e) {
  demo.innerHTML = e.target.value;
  }
};