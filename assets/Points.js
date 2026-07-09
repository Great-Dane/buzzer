window.onload = function() {
  // var demo = document.getElementById('demo');
  var activePlayer = -1;

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


  const p1name = document.getElementById("p1name");
  const p2name = document.getElementById("p2name");
  const p3name = document.getElementById("p3name");
  const p4name = document.getElementById("p4name");

  const p1input = document.getElementById("p1input");
  const p2input = document.getElementById("p2input");
  const p3input = document.getElementById("p3input");
  const p4input = document.getElementById("p4input");

  window.onkeydown = function(event) {
  // demo.innerHTML = 'Pressed ' + event.keyCode;
  event.preventDefault();
  
    if (event.ctrlKey && event.keyCode == keyCode1) {
      activePlayer = 1;
      p1name.style.textDecoration = "underline";
      p2name.style.textDecoration = "none";
      p3name.style.textDecoration = "none";
      p4name.style.textDecoration = "none";
    }
    if (event.ctrlKey && event.keyCode == keyCode2) {
      activePlayer = 2;
      p2name.style.textDecoration = "underline";
      p1name.style.textDecoration = "none";
      p3name.style.textDecoration = "none";
      p4name.style.textDecoration = "none";
    }
    if (event.ctrlKey && event.keyCode == keyCode3) {
      activePlayer = 3;
      p3name.style.textDecoration = "underline";
      p1name.style.textDecoration = "none";
      p2name.style.textDecoration = "none";
      p4name.style.textDecoration = "none";
    }
    if (event.ctrlKey && event.keyCode == keyCode4) {
      activePlayer = 4;
      p4name.style.textDecoration = "underline";
      p1name.style.textDecoration = "none";
      p2name.style.textDecoration = "none";
      p3name.style.textDecoration = "none";
    }

    if (event.ctrlKey && event.shiftKey) {
      const keyPress = event.key.toLowerCase();
      console.log(`${keyPress} detected!`);
      switch(keyPress) {
        case 'q':
          console.log('1 point!');
          updatePoints(1); // 1 point
          break;
        case 'e':
          console.log('2 points!');
          updatePoints(2); // 2 points
          break;
        case 'r':
          console.log('3 points!');
          updatePoints(3); // 3 points
          break;
        case '<':
          console.log('4 points!');
          updatePoints(4); // 4 points
          break;
        case 'y':
          console.log('5 points!');
          updatePoints(5); // 5 points
          break;
        case 'u':
          console.log('6 points!');
          updatePoints(6); // 6 points
          break;
        case 'i':
          console.log('7 points!');
          updatePoints(7); // 7 points
          break;
        case 'o':
          console.log('8 points!');
          updatePoints(8); // 8 points
          break;
        case 'p':
          console.log('10 points!');
          updatePoints(10); // 10 points
          break;
        case 'a':
          console.log('11 points!');
          updatePoints(11); // 11 points
          break;
        case 's':
          console.log('12 points!');
          updatePoints(12); // 12 points
          break;
        case 'd':
          console.log('18 points!');
          updatePoints(18); // 18 points
          break;
        case 'f':
          console.log('20 points!');
          updatePoints(20); // 20 points
          break;
        case 'g':
          console.log('-3 points!');
          updatePoints(-3); // raccoon
          break;
        case 'h':
          console.log('-1 points!');
          updatePoints(-1); // 1 bats
          break;
        case 'i':
          console.log('-2 points!');
          updatePoints(-2); // 2 bats
          break;
        case 'j':
          console.log('-3 points!');
          updatePoints(-3); // 3 bats
          break;
        case 'k':
          console.log('-3 points!');
          updatePoints(-3); // 3 bats
          break;
        case 'l':
          // bombardier beetle
          console.log('bombardier beetle!');
          break;
        case 'z':
          console.log('22 points!');
          updatePoints(22); // 22 points
          break;
        case 'x':
          console.log('25 points!');
          updatePoints(25); // 25 points
          break;
        case 'c':
          console.log('parrot! lose half your points!');
          if (activePlayer === 1) {
            p1input.value = p1points = Math.ceil(p1points / 2);
          }
          if (activePlayer === 2) {
            p2input.value = p2points = Math.ceil(p2points / 2);
          }
          if (activePlayer === 3) {
            p3input.value = p3points = Math.ceil(p3points / 2);
          }
          if (activePlayer === 4) {
            p4input.value = p4points = Math.ceil(p4points / 2);
          }
          break;
        case 'v':
          // oriole
          console.log('oriole!');
          break;
        case 'b':
          // snake
          console.log('snake!');
          break;
        case 'm':
          // coyote
          console.log('coyote! lose all your points!');
          if (activePlayer === 1) {
            p1input.value = p1points = 0;
          }
          if (activePlayer === 2) {
            p2input.value = p2points = 0;
          }
          if (activePlayer === 3) {
            p3input.value = p3points = 0;
          }
          if (activePlayer === 4) {
            p4input.value = p4points = 0;
          }
          break;
        
        
        default:
          console.log('No action for this key combination.');
          break;
      }
    }
    
  }
  p1input.addEventListener("input", updateValue);

  function updateValue(e) {
    demo.innerHTML = e.target.value;
  }

  function updatePoints(amount) {
    if (activePlayer === 1) {
      p1points += amount;
      p1input.value = p1points;
    }
    if (activePlayer === 2) {
      p2points += amount;
      p2input.value = p2points;
    }
    if (activePlayer === 3) {
      p3points += amount;
      p3input.value = p3points;
    }
    if (activePlayer === 4) {
      p4points += amount;
      p4input.value = p4points;
    }
  }
};