function sqad(x, y) {
    let div = document.createElement('div');
    div.className = "sqad";
    div.innerHTML = x + "/" + y; // надписи на квадратах
    div.id = x + "/" + y;  // ид квадратов
    div.style.marginLeft = (x * 35) + 'px';
    div.style.top = (y * 35) + 'px';
    document.body.append(div);
}


var mapSize = 12; // размер карты
function field() { // здес мы зададим размер поля
  for (i = 0; i < mapSize; i++) {
    for (a = 0; a < mapSize; a++) {
      whidth = i; // линии
      height = a; // столбы
      sqad(whidth, height); // размеры поля 
    }
  }
}

function player() {
  var x = 5; // стартовые кординаты
  var y = 5;
  document.addEventListener('keydown', function(event) {    //  // удаление предыдущего положения
    if (event.code == 'KeyW' && (y > 0)) {
      window[x + "/" + y].style.background = 'red';
      var concat = x + "/" + (y = y - 1);
    }
    if (event.code == 'KeyS' && (y < (mapSize - 1))) { // не красиво      
      window[x+"/"+ y].style.background = 'red';
      var concat = x + "/" + (y = y + 1);
    }
    if (event.code == 'KeyA' && (x > 0)) {
      window[x + "/" + y].style.background = 'red';
      var concat = (x = x - 1) + "/" + y;
      }
    if (event.code == 'KeyD' && (x < (mapSize - 1))) { // не красиво
      window[x + "/" + y].style.background = 'red';
      var concat = (x = x + 1) + "/" + y;
    }
    window[concat].style.background = 'green'; // новое положение
  });
        player();
    }
        
  field();
  player();