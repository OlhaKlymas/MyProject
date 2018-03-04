<script>

//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

//Create a Pixi Application
let app = new Application({ 
    width: 512, 
    height: 512,                       
    antialias: true, 
    transparent: false, 
    resolution: 1
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);


function keyboard(keyCode) {
  let key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

// let keyObject = keyboard(asciiKeyCodeNumber);

  loader
	  .add("static/img/treasureHunter.json")
	  .load(setup);
let dungeon, explorer, treasure, door, id, state;

// Устанавливаем Pixi и загружаем файлы атласа текстуры - вызываем функцию `setup`, когда они загружаются
function setup() {
 // Инициализировать игровые спрайты, установить игру `state`, чтобы` play` 
 // и запустить 'gameLoop'

	id = resources["static/img/treasureHunter.json"].textures;
  // Создание `группы gameScene` 
  	gameScene = new Container();
	app.stage.addChild(gameScene);

  // Создание `дверь` спрайт 
	door = new Sprite(id["door.png"]); 
 	door.position.set(32, 0);
  	app.stage.addChild(door);

  // Создание `игрок` спрайт 
	explorer = new Sprite(id["explorer.png"]);
	explorer.x = 68;
	explorer.y = gameScene.height / 2 - explorer.height / 2;
	explorer.vx = 0;
	explorer.vy = 0;
	gameScene.addChild(explorer);

  // Создание `подземелье` спрайт 
  	dungeon = new Sprite(id["dungeon.png"]);
	gameScene.addChild(dungeon);

  // Создание `сокровище` спрайт 
	treasure = new Sprite(id["treasure.png"]);
	treasure.x = gameScene.width - treasure.width - 48;
	treasure.y = gameScene.height / 2 - treasure.height / 2;
	gameScene.addChild(treasure);

  // Сделать враги 
	let numberOfBlobs = 6,
	    spacing = 48,
	    xOffset = 150,
	    speed = 2,
	    direction = 1;
		// Массив для хранения всех blob-монстров 
	blobs = [];
		// Создаем столько блоков, сколько есть `numberOfBlobs`
	for (let i = 0; i < numberOfBlobs; i++) {
		let blob = new Sprite(id["blob.png"]);
		let x = spacing * i + xOffset;

		function randomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};
		let y = randomInt(0,512 - blob.height);
		blob.x = x;
		blob.y = y;
		blob.vy = speed * direction;
		direction *= -1;
		blobs.push(blob);
		gameScene.addChild(blob);
	};

  // Создать строку здоровья 

		// Создаем панель здоровья 
	healthBar = new PIXI.DisplayObjectContainer();
	healthBar.position.set(512 - 170, 4)
	gameScene.addChild(healthBar);
		// Создаем прямоугольник черного фона 
	let innerBar = new PIXI.Graphics();
	innerBar.beginFill(0x000000);
	innerBar.drawRect(0, 0, 128, 8);
	innerBar.endFill();
	healthBar.addChild(innerBar);
		// Создаем передний красный прямоугольник 
	let outerBar = new PIXI.Graphics();
	outerBar.beginFill(0xFF3300);
	outerBar.drawRect(0, 0, 128, 8);
	outerBar.endFill();
	healthBar.addChild(outerBar);

	healthBar.outer = outerBar;
	healthBar.outer.width = 30;


  // Добавить текст для сообщения над сообщением 
	let style = new TextStyle({
	    fontFamily: "Futura",
	    fontSize: 64,
	    fill: "white"
	});
	message = new Text("The End!", style);
	message.x = 120;
	message.y = app.stage.height / 2 - 32;
	
  // Создайте группу `gameOverScene` 
 	gameOverScene = new Container();
	app.stage.addChild(gameOverScene);
	gameOverScene.visible = false;

  // Назначьте клавиатурные контроллеры плеера

  let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);
      keyObject.press = () => {
		  left.press = () => {
		    explorer.vx = -5;
		    explorer.vy = 0;
		  };
		  up.press = () => {
		    explorer.vy = -5;
		    explorer.vx = 0;
		  };
		  right.press = () => {
		    explorer.vx = 5;
		    cat.vy = 0;
		  };
		  down.press = () => {
		    explorer.vy = 5;
		    explorer.vx = 0;
		  };
	  };
	keyObject.release = () => {
	  left.release = () => {
	    if (!right.isDown && explorer.vy === 0) {
	      explorer.vx = 0;
	    }
	  };
	  
	  up.release = () => {
	    if (!down.isDown && explorer.vx === 0) {
	      explorer.vy = 0;
	    }
	  };
	  
	  right.release = () => {
	    if (!left.isDown && explorer.vy === 0) {
	      explorer.vx = 0;
	    }
	  };
	  
	  down.release = () => {
	    if (!up.isDown && explorer.vx === 0) {
	      explorer.vy = 0;
	    }
	  };
	};
  // установить состояние игры в `play` 
  state = play;

  // Запустите 
  app.ticker.add(delta => gameLoop(delta));
};

function gameLoop(delta) {
 // Запускает текущую игру `state` в цикле и отображает спрайты
 // Обновление текущего состояния игры:
  state(delta);
};

function play(delta) {
 // Вся игры логика здесь идет

 // Переместить проводник и содержать его в подземелье 
	explorer.x += explorer.vx;
	explorer.y += explorer.vy;
	contain(explorer, {x: 28, y: 10, width: 488, height: 480});
	function contain(sprite, container) {

	  let collision = undefined;

	  //Left
	  if (sprite.x < container.x) {
	    sprite.x = container.x;
	    collision = "left";
	  }

	  //Top
	  if (sprite.y < container.y) {
	    sprite.y = container.y;
	    collision = "top";
	  }

	  //Right
	  if (sprite.x + sprite.width > container.width) {
	    sprite.x = container.width - sprite.width;
	    collision = "right";
	  }

	  //Bottom
	  if (sprite.y + sprite.height > container.height) {
	    sprite.y = container.height - sprite.height;
	    collision = "bottom";
	  }

	  //Return the `collision` value
	  return collision;
	}

 // Переместить блоб монстров 
	blobs.forEach(function(blob) {
	blob.y += blob.vy;
	let blobHitsWall = contain(blob, {x: 28, y: 10, width: 488, height: 480});
	if (blobHitsWall === "top" || blobHitsWall === "bottom") {
		blob.vy *= -1;
	}
	if(hitTestRectangle(explorer, blob)) {
		explorerHit = true;
	}
	 // Проверка на столкновение между монтрами и игроком 
	if ( hitTestRectangle (explorer, blob)) {
	  explorerHit =  true ;
	}
	});
	if(explorerHit) {
	  explorer.alpha = 0.5;
	  healthBar.outer.width -= 1;
	} else {
	  explorer.alpha = 1;
	}
 // Проверка на столкновение между игроком и Сокровище 
	if (hitTestRectangle(explorer, treasure)) {
	  treasure.x = explorer.x + 8;
	  treasure.y = explorer.y + 8;
	}

 // Проверка для столкновения между сокровищем и дверью. 
	if (hitTestRectangle(treasure, door)) {
	  state = end;
	  message.text = "Ты выиграл!";
	}

 // Решите, выиграна ли игра или проиграна. 
	if (healthBar.outer.width < 0) {
	  state = end;
	  message.text = "Ты проиграл!";
	}

 // Измените игру `state` на` end`, когда игра финиширована
 state = end;
};

function end() {
  // Весь код, который должен запускаться в конце игры
  gameScene.visible = false;
  gameOverScene.visible = true;
};

</script>