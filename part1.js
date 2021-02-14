document.addEventListener("DOMContentLoaded", () => {

  var grid = document.querySelector(".grid");
  var width = 28;
  const part1 = [
    3,3,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,4,4,4,4,4,4,4,1,1,3,3,
    3,1,1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,4,4,4,4,4,1,1,1,3,3,
    1,1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,1,1,4,4,4,1,1,1,1,1,3,
    1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,3,3,3,3,3,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    3,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'h',
    3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,'h','h','h',
    3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,1,1,1,1,'h','h','h',
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,1,1,1,1,1,'h','h',
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,1,1,1,1,1,1,
    1,1,1,1,'e',1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,
    1,1,1,'e','e','e',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'i',1,
    1,1,'e','e','e','e','e',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,'e','e','e','d','e','e','e',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'i',1,1,
    'e','e','e','e','d','e','e','e','e',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'i',1,
    'g',1,1,1,'d',1,1,1,'g',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'i',
    'g',1,1,1,'d',1,1,1,'g',1,1,1,1,1,'|',1,1,1,1,1,1,1,1,1,1,'i',1,1,
    'g',1,1,1,'d',1,1,1,'g',1,1,1,1,1,'|',1,1,1,1,1,1,'|',1,1,1,1,1,1,
    1,1,1,1,'d',1,1,1,'g',1,1,1,1,1,'|',1,1,1,1,1,1,'|',1,1,1,1,'i',1,
    1,1,1,1,'d',1,1,1,1,1,1,1,1,1,'|',1,1,1,1,1,1,'|',1,1,1,'i',1,'i',
    1,1,'f',1,'d',1,'o','f',1,1,1,'f',1,1,'|',1,1,1,1,1,1,'|',1,1,9,'f',1,'o',
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,'_','_','_','_','_','_',2,2,2,2,2,2,2,
    0,0,0,0,0,0,8,0,0,0,0,0,0,8,2,2,'_','_','_',2,2,2,0,0,0,8,0,0,
    0,0,0,8,0,0,0,0,8,0,0,0,8,0,0,2,2,2,2,2,0,0,8,0,0,0,8,0
  ]
  // 0 = ground
  // 1 = air
  // 2 = grassBlock
  // 3 = cloud
  // 4 = sun-star
  // 5 = x-wing(broken)
  // 6 = night
  // 7 = moon
  // 8 = rock
  // 9 = chest
  // 10 = bricks
  // 11 = lava
  // | = sugar-cane
  // _ = water
  // o = flower
  // a = stone
  // b = coal-ore
  // c = iron-ore
  // d = tree-wood
  // e = tree-leaves
  // f = grass
  // g = vines
  // h = rain-cloud
  // i = rain-drop


  const squares = []
  function board() {
    for (let i = 0; i < part1.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      if(part1[i] === 0) {
        squares[i].classList.add("ground");
      } else if(part1[i] === 1) {
        squares[i].classList.add("air");
      } else if(part1[i] === 2) {
        squares[i].classList.add("grassBlock");
      } else if(part1[i] === 3) {
        squares[i].classList.add("cloud");
      } else if(part1[i] === 4) {
        squares[i].classList.add("sun-star");
      } else if(part1[i] === 5) {
        squares[i].classList.add("x-wing");
      } else if(part1[i] === 6) {
        squares[i].classList.add("night");
      } else if(part1[i] === 7) {
        squares[i].classList.add("moon");
      } else if(part1[i] === 8) {
        squares[i].classList.add("rock");
      } else if(part1[i] === 9) {
        squares[i].classList.add("chest");
        squares[i].setAttribute("id", "chest");
      } else if(part1[i] === 10) {
        squares[i].classList.add("brick");
      } else if(part1[i] === 11) {
        squares[i].classList.add("lava");
      } else if(part1[i] === 'a') {
        squares[i].classList.add("stone");
      } else if(part1[i] === 'b') {
        squares[i].classList.add("coal");
      } else if(part1[i] === 'c') {
        squares[i].classList.add("iron");
      } else if(part1[i] === 'd') {
        squares[i].classList.add("wood");
      } else if(part1[i] === 'e') {
        squares[i].classList.add("leaves");
      } else if(part1[i] === 'f') {
        squares[i].classList.add("grass");
      } else if(part1[i] === '|') {
        squares[i].classList.add("sugarCane");
      } else if(part1[i] === '_') {
        squares[i].classList.add("water");
      } else if(part1[i] === 'o') {
        squares[i].classList.add("flower");
      } else if(part1[i] === 'g') {
        squares[i].classList.add("vines");
      } else if(part1[i] === 'h') {
        squares[i].classList.add("rCloud");
      } else if(part1[i] === 'i') {
        squares[i].classList.add("rDrop");
      }
    }
  }
  board();
  
  // let playerIndex = 692;
  // squares[playerIndex].classList.add("steve");
  // function appleFall() {
  //   if (!apple.classList.contains("fall")) {
  //         apple.classList.add("fall");
  //       }
  //        setTimeout(function() {
  //         apple.classList.remove("fall");
  //       }, 500);
  // }
  var log = document.createElement("img");
  log.setAttribute("src", "log.png");
  log.classList.add("log");
  log.setAttribute("id", "log");
  grid.appendChild(log);

  var logIn = document.createElement("img");
  logIn.setAttribute("src", "log.png");
  logIn.classList.add("logIn");
  logIn.setAttribute("id", "logIn");
  grid.appendChild(logIn);

  var oChest = document.createElement("img");
  oChest.setAttribute("src", "chest-open.png");
  oChest.classList.add("oChest");
  oChest.setAttribute("id", "oChest");
  grid.appendChild(oChest);

  var apple = document.createElement("img");
  apple.setAttribute("src", "apple.png");
  apple.classList.add("apple");
  apple.setAttribute("id", "apple");
  grid.appendChild(apple);
  
  var appleIn = document.createElement("img");
  appleIn.setAttribute("src", "apple.png");
  appleIn.classList.add("appleIn");
  appleIn.setAttribute("id", "appleIn");
  grid.appendChild(appleIn);

  var wSeeds = document.createElement("img");
  wSeeds.setAttribute("src", "MinecraftWheatSeeds.png");
  wSeeds.classList.add("wSeeds");
  wSeeds.setAttribute("id", "wSeeds");
  grid.appendChild(wSeeds);

  var wSeedsIn = document.createElement("img");
  wSeedsIn.setAttribute("src", "MinecraftWheatSeeds.png");
  wSeedsIn.classList.add("wSeedsIn");
  wSeedsIn.setAttribute("id", "wSeedsIn");
  grid.appendChild(wSeedsIn);

  var heart = document.createElement("img");
  heart.setAttribute("src", "heart.png");
  heart.classList.add("heart");
  heart.setAttribute("id", "heart");
  grid.appendChild(heart);

  var heart2 = document.createElement("img");
  heart2.setAttribute("src", "heart.png");
  heart2.classList.add("heart2");
  heart2.setAttribute("id", "heart2");
  grid.appendChild(heart2);
  
  var heart3 = document.createElement("img");
  heart3.setAttribute("src", "heart.png");
  heart3.classList.add("heart3");
  heart.setAttribute("id", "heart3");
  grid.appendChild(heart3);

  var heart4 = document.createElement("img");
  heart4.setAttribute("src", "heart.png");
  heart4.classList.add("heart4");
  heart4.setAttribute("id", "heart4");
  grid.appendChild(heart4);

  var heart5 = document.createElement("img");
  heart5.setAttribute("src", "heart.png");
  heart5.classList.add("heart5");
  heart5.setAttribute("id", "heart5");
  grid.appendChild(heart5);

  var heart6 = document.createElement("img");
  heart6.setAttribute("src", "heart.png");
  heart6.classList.add("heart6");
  heart6.setAttribute("id", "heart6");
  grid.appendChild(heart6);

  var heart7 = document.createElement("img");
  heart7.setAttribute("src", "heart.png");
  heart7.classList.add("heart7");
  heart7.setAttribute("id", "heart7");
  grid.appendChild(heart7);

  var heart8 = document.createElement("img");
  heart8.setAttribute("src", "heart.png");
  heart8.classList.add("heart8");
  heart8.setAttribute("id", "heart8");
  grid.appendChild(heart8);

  var hunger = document.createElement("img");
  hunger.setAttribute("src", "hunger.png");
  hunger.classList.add("hunger");
  hunger.setAttribute("id", "hunger");
  grid.appendChild(hunger);

  var hunger2 = document.createElement("img");
  hunger2.setAttribute("src", "hunger.png");
  hunger2.classList.add("hunger2");
  hunger2.setAttribute("id", "hunger2");
  grid.appendChild(hunger2);

  var hunger3 = document.createElement("img");
  hunger3.setAttribute("src", "hunger.png");
  hunger3.classList.add("hunger3");
  hunger3.setAttribute("id", "hunger3");
  grid.appendChild(hunger3);

  var hunger4 = document.createElement("img");
  hunger4.setAttribute("src", "hunger.png");
  hunger4.classList.add("hunger4");
  hunger4.setAttribute("id", "hunger4");
  grid.appendChild(hunger4);

  var hunger5 = document.createElement("img");
  hunger5.setAttribute("src", "hunger.png");
  hunger5.classList.add("hunger5");
  hunger5.setAttribute("id", "hunger5");
  grid.appendChild(hunger5);

  var hunger6 = document.createElement("img");
  hunger6.setAttribute("src", "hunger.png");
  hunger6.classList.add("hunger6");
  hunger6.setAttribute("id", "hunger6");
  grid.appendChild(hunger6);

  var hunger7 = document.createElement("img");
  hunger7.setAttribute("src", "hunger.png");
  hunger7.classList.add("hunger7");
  hunger7.setAttribute("id", "hunger7");
  grid.appendChild(hunger7);

  var hunger8 = document.createElement("img");
  hunger8.setAttribute("src", "hunger.png");
  hunger8.classList.add("hunger8");
  hunger8.setAttribute("id", "hunger8");
  grid.appendChild(hunger8);

  var box = document.createElement("img");
  box.setAttribute("src", "inventory.png");
  box.classList.add("box");
  box.setAttribute("id", "box");
  grid.appendChild(box);

  var hotBar = document.createElement("img");
  hotBar.setAttribute("src", "hotBar.png");
  hotBar.classList.add("hotBar");
  hotBar.setAttribute("id", "hotBar");
  grid.appendChild(hotBar);

  // var stem = document.createElement("div");
  // stem.classList.add("stem");
  // grid.appendChild(stem);

  var player = document.createElement("img");
  player.setAttribute("src", "steveleft.png");
  player.classList.add ("steve");
  grid.appendChild(player);
  var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  var top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
  function move(e) {
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    var top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    switch(e.keyCode) {
      case 37:
      if(left > 20) {
        player.style.left = left - 7 + "px";
        player.classList.remove("flip");
        if (top >= 361 && top <= 440 && left <= 169) {
          player.style.top = 438 + "px";
        }
        
      } break
      case 39:
      if(left < 551) {
        player.style.left = left + 7 + "px";
        player.classList.add("flip");
        if (top >= 361 && top <= 440 && left >= 183) {
          player.style.top = 438 + "px";
        }
      } break
      case 40:
        // if (top === 361 && top <= 400) {
        //   // console.log("climb");
        // //   player.style.top = top + 5 + "px";
        // // } else if (top < 490) {
        // //   player.classList.add("crouch");
        // //   player.style.top = top + 52 + "px";
        // // }
        // }
        player.classList.add("crouch");
          player.style.top = 490 + "px";
        // player.setAttribute("src", "stevecrouch.png");
      break
      case 38:
      player.classList.remove("crouch");
      player.style.top = 438 + "px";
      if(top !== 0) {
        if (left >= 169 && left <= 183 && top >= 361 && top <= 490) {
          // console.log("climb");
          player.style.top = top - 7 + "px";
          if (top === 361) {
            player.style.top = 361 + "px";
          }
          if (top === 490 && !player.classList.contains("crouch")) {
            player.style.top = 438 + "px";
          }


        } else if (!player.classList.contains("jump")) {
          player.classList.add("jump");
          player.style.top = 438 + "px";
        }
        setTimeout(function() {
          player.classList.remove("jump");
        }, 500);

      } break
    }

    var appleLeft = parseInt(window.getComputedStyle(apple).getPropertyValue("left"));
    var appleTop = parseInt(window.getComputedStyle(apple).getPropertyValue("top"));
    var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    // console.log(appleLeft);
    // console.log(playerLeft);
    if(playerLeft == appleLeft - 7 && appleTop === 500 || playerLeft == appleLeft + 7 && appleTop === 500) {
      // console.log("collectedApple");
      // apple.style.display = "none";
      apple.classList.add("collected");
      apple.style.marginTop = 45 + "px";
      apple.style.left = 225 + "px";
      apple.style.display = "block";
      // console.log(apple.style.left);
      // console.log(apple.style.top);
      
      
    } else if (apple.classList.contains("collected")) {}
    console.clear();
  }
  document.addEventListener("keydown", move);
  

  apple.onclick = function() {
     apple.classList.add("fall");
  }

  function openedChest(e) {
    switch(e.keyCode) {
      case 79:
      console.log("open chest");
      var chest = document.getElementById("chest");
      console.log(chest);
      chest.classList.remove("chest"); //= "rgb(54, 54, 255)";
      // chest.style.backgroundImage = "url(chest-open.png)";
      // chest.classList.add("chest-open");
      oChest.style.display = "block";
    }
  }
  document.addEventListener("keydown", openedChest);

    var grass = document.getElementsByClassName("grass");
    var wood = document.getElementsByClassName("wood");
    var sugarcane = document.getElementsByClassName("sugarCane");
    var flower = document.getElementsByClassName("flower");
    var gBlock = document.getElementsByClassName("grassBlock");
    var dirt = document.getElementsByClassName("ground");
    var leaves = document.getElementsByClassName("leaves");

  function mousePos(event) {
    console.log(event.currentTarget);
    // console.log("x = " + event.clientX + ", " + "y = " + event.clientY);
    // if (event.clientX > 95 && event.clientX < 115 && event.clientY > 357 && event.clientY < 516) {
    if (event.target.classList.contains("wood")) {
      for(i = 0; i < wood.length; i++) {
        var rect = wood[i].getBoundingClientRect();
        if(rect.top <= event.clientY && rect.bottom >= event.clientY && rect.left <= event.clientX && rect.right >= event.clientX) {
          wood[i].style.backgroundColor = "rgb(54, 54, 255)";
          log.style.display = "block";
        }
      }
    }
    
    // }
    if (event.target.classList.contains("grass")) {
      for(i = 0; i < grass.length; i++) {
        var gRect = grass[i].getBoundingClientRect();
        if(gRect.top <= event.clientY && gRect.bottom >= event.clientY && gRect.left <= event.clientX && gRect.right >= event.clientX) {
          grass[i].style.backgroundImage = "none";
          grass[i].classList.add("harvested");
          wSeeds.style.display = "block";
        }
      }
    }
    if (event.target.classList.contains("sugarCane")) {
      for(i = 0; i < sugarcane.length; i++) {
        var sgRect = sugarcane[i].getBoundingClientRect();
        if(sgRect.top <= event.clientY && sgRect.bottom >= event.clientY && sgRect.left <= event.clientX && sgRect.right >= event.clientX) {
          sugarcane[i].style.backgroundColor = "rgb(54, 54, 255)";
          sugarcane[i].classList.add("harvested");
          // wSeeds.style.display = "block";
        }
      }
    }
    
    if (event.target.classList.contains("flower")) {
      for(i = 0; i < flower.length; i++) {
        var fRect = flower[i].getBoundingClientRect();
        if(fRect.top <= event.clientY && fRect.bottom >= event.clientY && fRect.left <= event.clientX && fRect.right >= event.clientX) {
          flower[i].style.backgroundColor = "rgb(54, 54, 255)";
          flower[i].classList.add("harvested");
          // wSeeds.style.display = "block";
        }
      }
    }
    
    if (event.target.classList.contains("grassBlock")) {
      for(i = 0; i < gBlock.length; i++) {
        var gbRect = gBlock[i].getBoundingClientRect();
        if(gbRect.top <= event.clientY && gbRect.bottom >= event.clientY && gbRect.left <= event.clientX && gbRect.right >= event.clientX) {
          gBlock[i].style.backgroundColor = "rgb(54, 54, 255)";
          gBlock[i].classList.add("harvested");
          // wSeeds.style.display = "block";
        }
      }
    }
    
    if (event.target.classList.contains('ground')) {
      for(i = 0; i < dirt.length; i++) {
        var dRect = dirt[i].getBoundingClientRect();
        if(dRect.top <= event.clientY && dRect.bottom >= event.clientY && dRect.left <= event.clientX && dRect.right >= event.clientX) {
          dirt[i].style.backgroundColor = "rgb(54, 54, 255)";
          dirt[i].classList.add("harvested");
          // wSeeds.style.display = "block";
        }
      }
    }
    
    if (event.target.classList.contains('leaves')) {
      for(i = 0; i < leaves.length; i++) {
        var leRect = leaves[i].getBoundingClientRect();
        if(leRect.top <= event.clientY && leRect.bottom >= event.clientY && leRect.left <= event.clientX && leRect.right >= event.clientX) {
          leaves[i].style.backgroundColor = "rgb(54, 54, 255)";
          leaves[i].classList.add("harvested");
          // wSeeds.style.display = "block";
        }
      }
    }
    
  }

  document.addEventListener("click", mousePos);

  function show(e) {
     
    switch(e.keyCode) {
      case 69:
      if (box.style.display == "block") {
        box.style.display = "none";
// Dirt, grass, leaves, and wood can be mined fast
// Other materials you need tools
// Some materials break when mined
// 2x2 crafting in your inventory
// 3x3 crafting in a crafting table
// 5x5 crafting in a workbench

        if (apple.classList.contains("collected")) {
          appleIn.style.display = "none";
        }
        
        if (wSeedsIn.style.display == "block") {
          wSeedsIn.style.display = "none";
        }

        if (logIn.style.display == "block") {
          logIn.style.display = "none";
        }
        
      } else {
        box.style.display = "block";
        if (apple.classList.contains("collected")) {
          appleIn.style.display = "block";
        } 

        if(wSeeds.style.display == "block") {
          // console.log('seeds')
          wSeedsIn.style.display = "block"
        }

        if(log.style.display == "block") {
          logIn.style.display = "block"
        }
        
      }
      break
      case 27:
      if (box.style.display == "block") {
        box.style.display = "none";
        
        if (apple.classList.contains("collected")) {
          appleIn.style.display = "none";
        }
        
      }
      break
    }
  }
  document.addEventListener("keydown", show);

});
