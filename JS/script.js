/* ----- spa init module --- */
const myDinoAPP = (function () {

            /* ------- begin view -------- */
            function ModuleView() {
                let myModuleContainer = null;
                let menu = null;
                let contentContainer = null;
                let audio = new Audio();

                const HomeComponent = {
                    id: "main",
                    title: "DINO-BALL",
                    render: (className = "container") => {
                        return `
<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
          <section class="${className}">
<div class= "buttonsblock">
    <div class="logo">
    <span id="firstLetter">D</span><span id="secondLetter">I</span><span id="thirdLetter">N</span><span id="fourthLetter">O</span><span id="ballLetter">BALL</span></div>
    <a class="buttons button1" id="start" href="#insert">START</a>
    <div class="dragonsHelp">
      <div class="dragon1"></div>
        <a class="buttons button2" id="help" href="#help">HELP</a>
        <div class="dragon2"></div>
    </div>
    <a class="buttons button3" id="state" href="#state">STATISTICS</a>
    </div>
          </section>`;
                    }
                };

                const GameComponent = {
                    id: "game",
                    title: "DINO-BALLL-GAME ",
                    render: (className = "container") => {
                        return `

<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
  <section class="${className}"> 
      <div class= "fieldgame">          
      <div class="dragon1"></div>
      <div class="itemsNetBall">
      <div class="ball"></div>
      <div class="net"></div>
      </div>
      <div class="dragon2"></div>
  </div>
  <div class="terra">
    <div class="cntLeft">
<div class="countLeft">0</div>
<div class="countname countnameleft">Lexa</div></div>
<div class="counter">
<div id="sekundomers">
<div class="time">
  <span id="minute">00</span>
  <span id="second">00</span>
  <span id="ms">00</span>
   <div id="pressenter">PRESS ENTER TO START GAME</div>
  <div class="modale modalehide">
   <div class="wait">LOADING...</div>
<a class="buttons button1" id="restart" >RESTART</a>
<a class="buttons button2 " id="menu" href="#main">MENU</a>
<a class="buttons button3 " id="state" href="#state">STATISTICS</a></div> 
  </div>
</div></div>
<div class="cntRight">
<div class="countRight">0</div>
<div class="countname countnameright">Egor</div></div>
</div>
   </section>`;
                    }
                };

                const HelpComponent = {
                    id: "help",
                    title: "INFORMATION ",
                    render: (className = "container") => {
                        return `
         <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
  <section class="${className}"> 

  <div class="modalehelp">
<a class="buttons button1 buttonhelp" id="menu" href="#main">MENU</a>
  <div class="rules">
  <p>
Правила игры:
Управление происходит с помощью клавиш «слева» (A, D, W) и «справа» (вправо, влево, вверх) на клавиатуре. Есть возможность передвигать персонажа в стороны и делать «прыжок». Мяч будет появляться в центре поля. После чего его нужно «отбить» прыжком или коснувшись персонажем до него, перебив при этом перегородку по центру. При попадании в перегородку мяч отскакивает. Если игрок не успевает отразить мяч и он падает на землю, игрок теряет игровой балл, а мяч появляется снова на нейтральной зоне.
Игра заканчивается, в случае если один из игроков набрал 5 игровых баллов. Результат записывается в статистику по нику игрока, который будет запрошен до начала игры.
 <p/>
  </div>
  </div>
  
   </section>
        `;
                    }
                };

                const StateComponent = {
                    id: "state",
                    title: "STATISTICS",
                    render: (className = "container") => {
                        return `
        
           <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
  <section class="${className}"> 

  <div class="modalestate">
  <div><a class="buttons button1 buttonstate" id="start" href="#main">MENU</a>
<a class="buttons button2 buttonstate" id="menu" href="#help">HELP</a></div> 
  <div class="listregards listnames">
<div class="list0"></div>
<div class="list1"></div>
<div class="list2"></div>
<div class="list3"></div>
<div class="list4"></div>
  </div>
  </div>
   
       </section>`;
                    }
                };

                const InsertComponent = {
                    id: "insert",
                    title: "DINO-BALL-PLAYERS",
                    render: (className = "container") => {
                        return `
        
           <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
  <section class="${className}"> 

  <div class="modalestate">
  <div>
  <a class="buttons button2 buttonstate" id="disabled" href="#game">CONFIRM AND START</a>
  <a class="buttons button1 buttonstate" id="back" href="#main">BACK</a>
</div> 
  <div class="listregards">
   <div class="rightcontact">
                    <div class="ramkablack">
                        <h1>INSERT YOUR NAMES</h1>
                        <div>AND PRESS SAVE</div>
                        <div>
                            <input type="text" id="nameoffirst" name="fname" placeholder="NAME OF FIRST PLAYER" autocomplete="off"><br>
                            <input type="text" id="nameofsecond" name="number" placeholder="NAME OF SECOND PLAYER" autocomplete="off"><br>
                            <button class="save" id="save" disabled type="hidden">SAVE</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
       </section>`;
                    }
                };

                const ErrorComponent = {
                    id: "error",
                    title: "Oops!!Error!",
                    render: (className = "container") => {
                        return `
          <section class="${className}">
            <h1>Ошибка 404</h1>
            <p>Страница не найдена, попробуйте перезагруззить страницу <a href="#main">RELOAD</a>.</p>
          </section>
        `;
                    }
                };

                const router = {
                    main: HomeComponent,
                    help: HelpComponent,
                    game: GameComponent,
                    state: StateComponent,
                    back: HomeComponent,
                    default: HomeComponent,
                    error: ErrorComponent,
                    insert: InsertComponent
                };

                this.init = function (container) {
                    myModuleContainer = container;
                    this.mainLayout();
                    menu = myModuleContainer.querySelector("#mainmenu");
                    contentContainer = myModuleContainer.querySelector("#content");
                    this.motion();
                }

                this.mainLayout = function () {
                    myModuleContainer.innerHTML = `<main class="mainmenu" id="mainmenu"></main>
                <div class="content" id="content"></div>`
                }
                this.keyDownHandlerMove = function (leftPressed, rightPressed, dPressed, aPressed) {
                    this.leftPressed = leftPressed
                    this.rightPressed = rightPressed
                    this.dPressed = dPressed
                    this.aPressed = aPressed
                }

                this.motion = () => {
                    let RAF =
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame;
                    const that = this

                    function makeMotion() {

                        const fieldGame = document.querySelector('.fieldgame')
                        const dragon1 = document.querySelector(".dragon1")
                        const dragon2 = document.querySelector(".dragon2")

                        if (fieldGame) {
                            if (that.rightPressed) {
                                const currentLeft = Number.isFinite(parseFloat(dragon2.style.left)) ?
                                    parseFloat(dragon2.style.left) : 0
                                if (currentLeft <= 0) dragon2.style.left = currentLeft + 10 + 'px';
                                dragon2.classList.add("dragon2run");

                            } else if (that.leftPressed) {
                                const currentLeft = Number.isFinite(parseFloat(dragon2.style.left)) ?
                                    parseFloat(dragon2.style.left) : 0
                                if (-(fieldGame.clientWidth / 2 - 130) < currentLeft) {
                                    dragon2.style.left = currentLeft - 10 + 'px'
                                    dragon2.classList.add("dragon2run");
                                }
                            } else if (!that.rightPressed && !that.leftPressed) {
                                dragon2?.classList.remove("dragon2run");
                            }

                            if (that.dPressed) {
                                const currentLeft = Number.isFinite(parseFloat(dragon1.style.left)) ?
                                    parseFloat(dragon1.style.left) : 0
                                if ((fieldGame.clientWidth / 2 - 130) > currentLeft) {
                                    dragon1.style.left = currentLeft + 10 + 'px';
                                    dragon1.classList.add("dragon1run");
                                }
                            } else if (that.aPressed) {
                                const currentLeft = Number.isFinite(parseFloat(dragon1.style.left)) ?
                                    parseFloat(dragon1.style.left) : 0
                                if (currentLeft >= 0) dragon1.style.left = currentLeft - 10 + 'px';
                                dragon1.classList.add("dragon1run");
                            } else if (!that.rightPressed && !that.leftPressed) {
                                dragon1?.classList.remove("dragon1run");
                            }
                        }

                        RAF(makeMotion)
                    }

                    makeMotion()
                }

                this.getJump = function (numberDragon) {
                    var RAF =
                        // находим, какой requestAnimationFrame доступен
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame;

                    const dragon = document.querySelector(".dragon" + numberDragon)
                    dragon.classList.add("dragon1jump");
                    let wasMaxTop = false

                    let makeJump = function () {
                        const currentTop = isFinite(parseFloat(dragon.style.top)) ? parseFloat(dragon.style.top) : 0
                        if (!wasMaxTop && currentTop > -150) {
                            dragon.style.top = currentTop - 10 + 'px'
                            RAF(makeJump)
                        } else if (!wasMaxTop && currentTop === -150) {
                            wasMaxTop = true
                            document.querySelector(".dragon" + numberDragon).classList.remove("dragon1jump");
                            dragon.style.top = currentTop + 10 + 'px'
                            RAF(makeJump)
                        } else if (wasMaxTop && currentTop === -10) {
                            dragon.style.top = currentTop + 10 + 'px'
                        } else if (wasMaxTop && currentTop < 0) {
                            dragon.style.top = currentTop + 10 + 'px'
                            RAF(makeJump)
                        }
                    }

                    makeJump()
                }

                this.drawBall = function (ballObj, posX, posY) {
                    ballObj.style.left = Math.round(posX) + "px";
                    ballObj.style.top = Math.round(posY) + "px";
                }

                this.renderContent = function (hashPageName) {
                    let routeName = "default";

                    if (hashPageName.length > 0) {
                        routeName = hashPageName in router ? hashPageName : "error";
                    }

                    this.buttonEnable = function () {
                        document.querySelector("#disabled").style.cssText = ` pointer-events: all;
                        background-color: #7443e7e5;`
                        document.querySelector("#save").style.cssText = `  background-color:rgba(202, 255, 0, 0.91)`;
                    }

                    this.restartRequestView = function () {
                        document.querySelector(".wait").style.cssText = `display: block;`
                        document.querySelector(".modale").classList.toggle("modalehide");
                    }
                    this.modaleShow = function (){
                        document.querySelector(".modale").classList.toggle("modalehide");
                        document.querySelector(".wait").style.cssText = `display: none;`
                    }

                    this.buttonSoundOn = function () {
                        audio.preload = 'auto';
                        audio.src = '../sounds/menu-select.mp3';
                        audio.play();
                    }
                    this.delEnterStringView = function (enterString) {
                        enterString.style.cssText=`display:none;`
                    }

                    //add names near counter
                    this.addNamesGame = function (nameOfFirst,nameOfSecond,countNameLeft,countNameRight) {
                        countNameLeft.innerText=nameOfFirst;
                        countNameRight.innerText=nameOfSecond;
                    }


                    window.document.title = router[routeName].title;
                    contentContainer.innerHTML = router[routeName].render(`${routeName}-page`);
                }
            };
            /* -------- end view --------- */

            /* ------- begin model ------- */
            function ModuleModel() {
                let myModuleContainer = null;
                let myModuleView = null;
                let leftPressed = false;
                let rightPressed = false;
                let dPressed = false;
                let aPressed = false;
                let upPressed = true;
                let downPressed = true;
                let wPressed = true;
                let sPressed = true;
                let enterPressed = true;
                let check = false;
                let audio = new Audio();
                let audioJump = new Audio();
                let audioGame = new Audio();
                let audioDefault = new Audio();
                let isGameOver = false
                let nameOfFirst = null;
                let nameOfSecond = null;
                let userData = {};
                let users = [];
                // let modaleAfterGame = document.querySelector(".modale");


                this.init = function (view, container) {
                    myModuleContainer = container;
                    myModuleView = view;
                    this.getUsers();

                }

                this.getUsers = function (callback = () => null) {
                    myDataBase.ref('users').on('value', (res) => {
                        const data = res.val();
                        users = [...data]
                        console.log(users)
                        callback()
                    })
                }

                this.keyDownHandler = function (e) {
                    if (document.querySelector(".fieldgame")) {
                        if (e.repeat) return;
                        if (e.keyCode == 37) {
                            audio.preload = 'auto';
                            audio.src = '../sounds/stepwood.mp3';
                            audio.play();
                            leftPressed = true;
                            myModuleView.keyDownHandlerMove(leftPressed, rightPressed, dPressed, aPressed);
                        } else if (e.keyCode == 39) {
                            audio.preload = 'auto';
                            audio.src = '../sounds/stepwood.mp3';
                            audio.play();
                            rightPressed = true;
                            myModuleView.keyDownHandlerMove(leftPressed, rightPressed, dPressed, aPressed);
                        } else if (e.keyCode == 38) {
                            audioJump.preload = 'auto';
                            audioJump.src = '../sounds/jump.mp3';
                            audioJump.play();
                            const dragon = myModuleContainer.querySelector(".dragon2")
                            const dragonTop = isFinite(parseFloat(dragon.style.top)) ? parseFloat(dragon.style.top) : 0
                            if (dragonTop === 0) myModuleView.getJump('2');
                            upPressed = false
                        }

                        if (e.keyCode == 68) {
                            audio.preload = 'auto';
                            audio.src = '../sounds/stepwood.mp3';
                            audio.play();
                            dPressed = true;
                            myModuleView.keyDownHandlerMove(leftPressed, rightPressed, dPressed, aPressed);
                        } else if (e.keyCode == 65) {
                            audio.preload = 'auto';
                            audio.src = '../sounds/stepwood.mp3';
                            audio.play();
                            aPressed = true;
                            myModuleView.keyDownHandlerMove(leftPressed, rightPressed, dPressed, aPressed);
                        } else if (e.keyCode == 87) {
                            audioJump.preload = 'auto';
                            audioJump.src = '../sounds/jump.mp3';
                            audioJump.play();

                            const dragon = document.querySelector(".dragon1")
                            const dragonTop = isFinite(parseFloat(dragon.style.top)) ? parseFloat(dragon.style.top) : 0
                            if (dragonTop === 0) myModuleView.getJump('1');
                            wPressed = false
                        }

                    }
                }


                this.keyUpHandler = function (e) {
                    if (e.keyCode == 37) {
                        leftPressed = false;
                        myModuleView.keyDownHandlerMove(leftPressed, rightPressed, dPressed, aPressed);
                    } else if (e.keyCode == 39) {
                        rightPressed = false;
                        myModuleView.keyDownHandlerMove(leftPressed, rightPressed, dPressed, aPressed);
                    } else if (e.keyCode == 38) {
                        upPressed = true
                    } else if (e.keyCode == 40) {
                        downPressed = true
                    }

                    if (e.keyCode == 68) {
                        dPressed = false;
                        myModuleView.keyDownHandlerMove(leftPressed, rightPressed, dPressed, aPressed);
                    } else if (e.keyCode == 65) {
                        aPressed = false;
                        myModuleView.keyDownHandlerMove(leftPressed, rightPressed, dPressed, aPressed);
                    } else if (e.keyCode == 87) {
                        wPressed = true
                    } else if (e.keyCode == 83) {
                        sPressed = true
                    }
                }
//restart clicked
                this.restartRequest = function () {
                    // document.querySelector(".modale").classList.toggle("modalehide");
                    myModuleView.restartRequestView();
                    setTimeout(function (){
                        enterPressed = true;
                        isGameOver = false;
                        check = false;
                        that.ballMoves();
                        that.countState();
                        that.delEnterString();
                    },2000)

                }

//enter pressed
                this.pressedEnter = function (e) {
                    if (e.keyCode == 13) {
                        enterPressed = true;
                        isGameOver = false;
                        check = false;
                        this.ballMoves();
                        this.countState();
                        this.delEnterString();

                    }
                }
                //display none for "enter string"
                this.delEnterString = function () {
                    let enterString = myModuleContainer.querySelector("#pressenter");
                    myModuleView.delEnterStringView(enterString);
                }


                // ball parametrs
                this.ballMoves = function () {

                    if (check === true) {
                        return;
                    } else {
                        let RAF =
                            // находим, какой requestAnimationFrame доступен
                            window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

                        let ballObj = document.querySelector('.ball');
                        let ballH = {
                            posX: 0,
                            posY: -270,
                            speedX: 0,
                            speedY: 1,
                            accelX: 0,
                            accelY: 0.28,
                            width: document.querySelector(".fieldgame").clientWidth / 2,
                            height: document.querySelector(".fieldgame").clientHeight / 2,

                            update: function () {
                                if (check === true) {
                                    return;
                                }
                                myModuleView.drawBall(ballObj, this.posX, this.posY);
                            }
                        }

                        let areaH = {
                            width: document.querySelector(".fieldgame").clientWidth,
                            height: document.querySelector(".fieldgame").clientHeight,
                        }

                        let dragon1 = document.querySelector(".dragon1")
                        let dragon2 = document.querySelector(".dragon2")

                        let isBallLeft = true
                        let isBallRecapture = false

                        let randomStart = Math.floor(Math.random() * 2);
                        if (randomStart === 0) {
                            let random = Math.floor(Math.random() * 5) + 4;
                            ballH.speedX = -random;
                        } else {
                            let random2 = Math.floor(Math.random() * 5) + 4;
                            ballH.speedX = random2;
                        }
// значения Для счёта
                        let counterLeft = myModuleContainer.querySelector(".countLeft");
                        let counterRight = myModuleContainer.querySelector(".countRight");

                        let lCount = counterLeft.textContent;
                        let rCount = counterRight.textContent;
                        that = this;
                        //левая сторона
                        let countBallL = function () {
                            if (lCount > 4) {
                                isGameOver = true
                                lCount = +0;
                                counterLeft.innerHTML = lCount;
                                counterRight.innerHTML = lCount;
                                audio.preload = 'auto';
                                audio.src = '../sounds/fall.mp3';
                                audio.play();
                                check = true;
                                console.log(check);
                                myModuleView.modaleShow();
                                ballObj.style.left = 0 + "px";
                                ballObj.style.top = (-270) + "px";
                                ballH.update();
                                userData.name = nameOfSecond;
                                that.addUser(nameOfSecond, myModuleContainer.querySelector("#minute").innerText + myModuleContainer.querySelector("#second").innerText + myModuleContainer.querySelector("#ms").innerText);

                            } else {
                                ballH.posY = -270;
                                ballH.posX = 0;
                                ballH.speedY = 1;
                                lCount++;
                                counterLeft.innerHTML = lCount;
                                audio.preload = 'auto';
                                audio.src = '../sounds/point1.mp3';
                                audio.play();
                            }
                        }

                        //правая сторона
                        let countBallR = function () {
                            if (rCount > 4) {
                                isGameOver = true
                                rCount = +0;
                                counterRight.innerHTML = rCount;
                                counterLeft.innerHTML = rCount;
                                audio.preload = 'auto';
                                audio.src = '../sounds/fall.mp3';
                                audio.play();
                                check = true;
                                console.log(check);
                                myModuleView.modaleShow();
                                ballObj.style.left = 0 + "px";
                                ballObj.style.top = (-270) + "px";
                                ballH.update();
                                userData.name = nameOfFirst;
                                that.addUser(nameOfFirst, myModuleContainer.querySelector("#minute").innerText + myModuleContainer.querySelector("#second").innerText + myModuleContainer.querySelector("#ms").innerText);
                                // that.updateStatisticsOnStatePage();
                            } else {
                                ballH.posY = -270;
                                ballH.posX = 0;
                                ballH.speedY = 1;
                                rCount++;
                                counterRight.innerHTML = rCount;
                                audio.preload = 'auto';
                                audio.src = '../sounds/point2.mp3';
                                audio.play();
                            }
                        }
                        if (check === true) {
                            return;
                        } else {
//ФУНКЦИЯ ОТРАЖЕНИЯ МЯЧА ОТ ПЕРСОНАЖЕЙ И ОБЬЕКТА ПО ЦЕНТРУ И ОБЩАЯ ЛОГИКА ДВИЖЕНИЯ МЯЧА ПРИ ОТСКОКАХ
                            function tick() {
                                // console.log(ballH.posX, ballH.posY)
                                ballH.speedX += ballH.accelX;
                                ballH.posX += ballH.speedX;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         const leftDragon1 = -(areaH.width / 2) + (Number.isFinite(parseFloat(dragon1.style.left)) ?
                                    parseFloat(dragon1.style.left) : 0)
                                const topDragon1 = -(Number.isFinite(parseFloat(dragon1.style.top)) ?
                                    parseFloat(dragon1.style.top) : 0)
                                const leftDragon2 = areaH.width / 2 + (Number.isFinite(parseFloat(dragon2.style.left)) ?
                                    parseFloat(dragon2.style.left) : 0)
                                const topDragon2 = -(Number.isFinite(parseFloat(dragon2.style.top)) ?
                                    parseFloat(dragon2.style.top) : 0)

                                // вылетел ли мяч правее стены?
                                if (ballH.posX + ballH.width > areaH.width) {
                                    audio.preload = 'auto';
                                    audio.src = '../sounds/ball_bounce.mp3';
                                    audio.play();
                                    ballH.speedX = -ballH.speedX;
                                    ballH.posX = areaH.width - ballH.width;
                                    ballH.speedX = -8;
                                    isBallLeft = false
                                } else if (ballH.posX + ballH.width < 25) {
                                    audio.preload = 'auto';
                                    audio.src = '../sounds/ball_bounce.mp3';
                                    audio.play();
                                    ballH.speedX = -ballH.speedX;
                                    ballH.speedX = 8;
                                    isBallLeft = true
                        //отскок от перегородки по центру
                                } else if (isBallLeft && (ballH.posX < 0 && ballH.posX > -50) && (ballH.posY > 0)) {
                                    audio.preload = 'auto';
                                    audio.src = '../sounds/ball_bounce.mp3';
                                    audio.play();
                                    ballH.speedY += 3;
                                    ballH.speedX = -ballH.speedX;
                                    isBallLeft = false


                                // } else if (ballH.posY + ballH.height > areaH.height- 300 && ballH.posX + ballH.width > areaH.width/2.1 ) {
                                //     //    if (ballH.posX + ballH.height  < areaH.width+300){
                                //     //     ballH.speedX = 1;
                                //     //     console.log(areaH.width/7)
                                //     // }
                                //
                                //     console.log(areaH.width/7)


                          }else if (!isBallLeft && (ballH.posX > 0 && ballH.posX < 50) && (ballH.posY > 0)) {
                                    audio.preload = 'auto';
                                    audio.src = '../sounds/ball_bounce.mp3';
                                    audio.play();
                                    ballH.speedY += 3;
                                    ballH.speedX = -ballH.speedX;
                                    isBallLeft = true
                            //отскок от персонажей
                                } else if (!isBallRecapture && (((leftDragon2 - 100) < ballH.posX) && (leftDragon2 > ballH.posX)) &&
                                    ((topDragon2 + 100) > 300 - ballH.posY) && (topDragon2 < 300 - ballH.posY)) {
                                    ballH.speedY = -Math.abs(ballH.speedY + Math.random() * 1.6)
                                    ballH.speedX = -Math.abs(ballH.speedX + Math.floor(Math.random() * 3)+2)
                                    // ballH.speedX = -Math.abs(ballH.speedX + Math.random() * 1.3)
                                    myModuleContainer.querySelector(".ball").classList.toggle("ballinverted");
                                    audio.preload = 'auto';
                                    audio.src = '../sounds/ball_bounce.mp3';
                                    audio.play();
                                    isBallLeft = false
                                    isBallRecapture = true
                                    setInterval(() => isBallRecapture = false, 1000)
                                } else if (!isBallRecapture && (((leftDragon1) < ballH.posX) && ((leftDragon1 + 100) > ballH.posX)) &&
                                    ((topDragon1 + 100) > 300 - ballH.posY) && (topDragon1 < 300 - ballH.posY)) {
                                    ballH.speedY = -Math.abs(ballH.speedY + Math.random() * 1.6)
                                    // ballH.speedY = 2;
                                    // ballH.speedX = Math.abs(ballH.speedX + Math.random() * 1.3)
                                    ballH.speedX = Math.abs(ballH.speedX + Math.floor(Math.random() * 3)+2)
                                    myModuleContainer.querySelector(".ball").classList.toggle("ballinverted");
                                    audio.preload = 'auto';
                                    audio.src = '../sounds/ball_bounce.mp3';
                                    audio.play();
                                    isBallLeft = true
                                    isBallRecapture = true
                                    setInterval(() => isBallRecapture = false, 1000)
                                }

                                ballH.speedY += ballH.accelY;
                                ballH.posY += ballH.speedY;
                                // вылетел ли мяч ниже пола?
                                if (ballH.posY + ballH.height > areaH.height) {
                                    if (ballH.posY + ballH.height > areaH.height && ballH.posX + ballH.width > areaH.width / 2) {
                                        ballH.speedX = -6;
                                        countBallR()
                                    } else {
                                        ballH.speedX = 6;
                                        countBallL()
                                    }
                                    // вылетел ли мяч выше?
                                } else if (ballH.posY < -areaH.height / 2.2) {
                                    ballH.speedY = 0.7;
                                    // ballH.speedY = Math.floor(Math.random() * 5) + 3;
                                    // ballH.speedY = 2;
                                    ballH.speedY = ballH.speedY;
                                    audio.preload = 'auto';
                                    audio.src = '../sounds/ball_bounce.mp3';
                                    audio.play();
                                }
                                ballH.update();
                                !isGameOver && RAF(tick);
                            }
                        }

                        if (check === false) {
                            ballH.update();
                            RAF(tick);
                        }
                    }
                }
//ТАЙМЕР В ИГРЕ
                this.countState = function () {
                    if (check === true) {
                        clearInterval();
                    } else {
                        let timer = 0;
                        let timerInterval;
                        let ms = document.getElementById('ms');
                        let second = document.getElementById('second');
                        let minute = document.getElementById('minute');

                        function startTimer() {
                            timerInterval = setInterval(function () {
                                if (isGameOver) {
                                    stopTimer();
                                }
                                timer += 1 / 60;
                                let msVal = Math.floor((timer - Math.floor(timer)) * 100);
                                let secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
                                let minuteVal = Math.floor(timer / 60);
                                ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
                                second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
                                minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
                            }, 1000 / 60);
                        }

                        function stopTimer() {
                            clearInterval(timerInterval);
                        }

                        startTimer()
                    }
                }

                //сохранение имён после нажатия на кнопку save
                this.saveNames = function () {
                    let name1 = myModuleContainer.querySelector("#nameoffirst").value;
                    let name2 = myModuleContainer.querySelector("#nameofsecond").value;
                    nameOfFirst = name1;
                    nameOfSecond = name2;
                }
                this.saveNamesInGame = function () {
                  myModuleView.addNamesGame(nameOfFirst,nameOfSecond,myModuleContainer.querySelector(".countnameleft"),myModuleContainer.querySelector(".countnameright"));
                }

                //РАБОТА СО СТАТИСТИКОЙ FIREBASE-----------
                this.addUser = function (username, userResult) {
                    const newUsersData = [...users, {
                        user: username,
                        result: userResult
                    }]
                    newUsersData.sort((a, b) => a.result - b.result)
                    if (newUsersData.length > 5) {
                        newUsersData.length = 5
                    }
                    myDataBase.ref('users/').set(newUsersData);
                }

                this.updateStatisticsOnStatePage = function () {
                    this.getUsers(statePlayers)

                    function statePlayers() {
                        if (users.length > 0)
                            for (let i = 0; i < users.length; i++) {
                                let first = users[i];
                                let elem = first.result;
                                let x = elem.replace(/(.{2})/g, "$1:").slice(0, -1);
                                myModuleContainer.querySelector(".list" + [i]).innerHTML = [i + 1] + ". " + first.user + `<span class='timeis'> YOUR TIME IS - </span>` + x;
                            }
                    }
                }

                this.updateState = function (hashPageName) {
                    myModuleView.renderContent(hashPageName);
                    console.log(hashPageName);
                    if (hashPageName === 'state') {
                        this.updateStatisticsOnStatePage()

                    }
                    if (hashPageName === 'game') {
                        this.saveNamesInGame()
                        audioGame.preload = 'auto';
                        audioGame.src = '../sounds/intro.mp3';
                        audioGame.loop = true;
                        audioGame.play();
                    }
                    if (hashPageName === 'default') {
                        this.saveNamesInGame()
                    }
                    if (hashPageName === 'main' || hashPageName === 'state' || hashPageName === 'help') {
                        audioGame.preload = 'auto';
                        audioGame.loop = false;
                        audioGame.src = '../sounds/menu-back.mp3';
                        audioGame.play();
                    }

                }

                //disable button
                this.buttonChange = function () {
                    let savebtnTrue = document.querySelector("#save").disabled = ((document.querySelector("#nameoffirst").value) && (document.querySelector("#nameofsecond").value)) ? false : true;
                   if (savebtnTrue){
                       document.querySelector("#save").classList.remove("savenames");
                   }else{
                       document.querySelector("#save").classList.add("savenames");
                   }

                }
            }

            /* -------- end model -------- */

            /* ----- begin controller ---- */
            function ModuleController() {
                let myModuleContainer = null;
                let myModuleModel = null;
                let myModuleView = null;


                this.init = function (container, model, view) {
                    myModuleContainer = container;
                    myModuleModel = model;
                    myModuleView = view;
                    // вешаем слушателя на событие hashchange
                    window.addEventListener("hashchange", this.updateState);
                    this.updateState(); //первая отрисовка
                    //нажатие на кнопку для передвижения персонажей
                    document.addEventListener("keydown", this.keyPressed, false);
                    document.addEventListener("keyup", this.keyUp, false);
                    document.addEventListener("keydown", this.pressEnter, false);

                    let that = this;
                    myModuleContainer.addEventListener("click", function (event) {
                        switch (event.target && event.target.id) {
                            case 'restart':
                                that.restartClicked();
                                break;
                            case 'save':
                                that.saveData()
                                that.buttonSound()
                                break;
                            case 'state':
                                that.statePressed()
                                that.buttonSound()
                                break;
                            case 'start':
                            case 'help':
                            case 'menu':
                            case 'disabled':
                            case 'back':
                                that.buttonSound()
                                break;
                        }
                    });

                    myModuleContainer.addEventListener("input", function (event) {
                        switch (event.target && event.target.id) {
                            case 'nameoffirst':
                            case 'nameofsecond':
                                that.buttonDisable()
                                break;
                        }
                    });


                }

                this.restartClicked = function () {
                    myModuleModel.restartRequest();
                }
                this.buttonDisable = function () {
                    myModuleModel.buttonChange();
                }

                this.statePressed = function () {
                    myModuleModel.updateStatisticsOnStatePage();
                }

                this.keyPressed = function (e) {
                    myModuleModel.keyDownHandler(e);
                }
                this.keyUp = function (e) {
                    myModuleModel.keyUpHandler(e);

                }
                this.pressEnter = function (e) {
                    myModuleModel.pressedEnter(e);
                }

                this.saveData = function () {
                    myModuleModel.saveNames();
                    myModuleView.buttonEnable();
                }
                this.buttonSound = function () {
                    myModuleView.buttonSoundOn();
                }

                this.updateState = function () {
                    const hashPageName = location.hash.slice(1).toLowerCase();
                    myModuleModel.updateState(hashPageName);
                }
            };
            /* ------ end controller ----- */

            return {
                init: function (container) {
                    this.main(container);

                    const view = new ModuleView();
                    const model = new ModuleModel();
                    const controller = new ModuleController();

                    view.init(document.getElementById(container));
                    model.init(view, document.getElementById(container));
                    controller.init(document.getElementById(container), model, view);
                },

                main: function (container) {
                    console.log(`Иницилизация SPA "${container}" произведена"!`);
                },
            };

        }

        ()
    )
;
/* ------ end app module ----- */

/*** --- init module --- ***/
document.addEventListener("DOMContentLoaded", myDinoAPP.init("appDino"));
