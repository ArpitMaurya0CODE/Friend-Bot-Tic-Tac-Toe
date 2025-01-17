
// let comp = document.querySelector(".computer");
// let man = document.querySelector(".manual");

let intro = document.querySelector(".intro-page");
let code = document.querySelector(".main-code");
let comp = document.querySelector(".computer");
let man = document.querySelector(".manual");
let mod = document.querySelector(".mode")



const manualplay = ()=>{

    code.classList.remove("hide");
    intro.classList.add("hide");
mod.innerText="PLAY WITH FREIND";
    
    
    let btns = document.querySelectorAll(".btn");
    let reset = document.querySelector(".reset");
    let msg = document.querySelector(".msg");
    let msgbox = document.querySelector(".msg-box");
    let msbig = document.querySelector(".ms-big");
    let newgame = document.querySelector(".new-game");
    let big = document.querySelector(".big");
    let turn0 = true;
    let count = 0;
    
    
    
    const win = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
    [3,4,5],
    [6,7,8],
    ];
    
    const resetgame = () => {
        turn0 = true;
        count = 0;
        enablebtns ();
       
        msbig.classList.remove("grid")
        msbig.classList.add("hide");
        msgbox.classList.add("hide");
        big.classList.remove("hide");
        reset.classList.remove("hide");
        msg.classList.add("hide");
        newgame.classList.add("hide");
    }
    
    
    btns.forEach((btn)=> {
        btn.addEventListener("click", ()=>
        {
            console.log("box was clicked");
            if(turn0){
                btn.innerText = "X";
                turn0 = false;
                
            }
            else{
                btn.innerText = "O";
                turn0 = true;
            
            }
             
            btn.disabled = true;
            count++;
    
    
          let iswinner = checkwinner();
    
          if (count === 9 && !iswinner){
            gamedraw();
          }
        });
    });
    
    const gamedraw= ()=>{
        msg.innerText = "GAME IS DRAW";
        msbig.classList.add("grid")
        msgbox.classList.remove("hide");
        msbig.classList.remove("visbility");
        big.classList.add("hide");
        reset.classList.add("hide");
        msg.classList.remove("hide");
        newgame.classList.remove("hide");
    
    
        disablebtns();
    }
    
    const disablebtns = () =>  {
        for(let btn of btns) {
            btn.disabled = true;
        }
    }
    const enablebtns = () =>  {
        for(let btn of btns) {
            btn.disabled = false;
            btn.innerText = "";
        }
    }
    
    
    const showWinner = (winner) => {
        msg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`;
        msbig.classList.add("grid")
        msgbox.classList.remove("hide");
        msbig.classList.remove("hide");
        big.classList.add("hide");
        msg.classList.remove("hide");
        newgame.classList.remove("hide");
        reset.classList.add("hide");
    
    
        disablebtns ();
    }
    
    
    const checkwinner = ()  => {
        for ( let pattern of win) {
            // console.log(btns[pattern[0].innerText],btns[pattern[1].innerText],btns[pattern[2].innerText]);
            // console.log(pattern[0],pattern[1],pattern[2]);
    
            let pos1val = btns[pattern[0]].innerText;
            let pos2val = btns[pattern[1]].innerText;
            let pos3val = btns[pattern[2]].innerText;
    
            if(pos1val!=""&& pos2val!=""&& pos3val!="")
                { if(pos1val === pos2val && pos2val === pos3val) {
                    console.log("winner" ,pos1val);
                    showWinner (pos1val);
                }
    
            }
            
        }
    };
    
    reset.addEventListener("click",resetgame);
    newgame.addEventListener("click",resetgame);
    
    
    

}




const computerplay = ()=> {
    code.classList.remove("hide");
    intro.classList.add("hide");

    

let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgbox = document.querySelector(".msg-box");
let msbig = document.querySelector(".ms-big");
let newgame = document.querySelector(".new-game");
let big = document.querySelector(".big");

let man = document.querySelector(".manual");
let turn0 = true; // Player starts first
let count = 0;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];




const resetgame = () => {
    turn0 = true;
    count = 0;
    enablebtns();
     msbig.classList.remove("grid")
    msbig.classList.add("hide");
    msgbox.classList.add("hide");
    big.classList.remove("hide");
    reset.classList.remove("hide");
    msg.classList.add("hide");
    newgame.classList.add("hide");
}

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (turn0) {
            playerMove(btn);
            if (count < 9 && !checkwinner()) {
                setTimeout(computerMove, 500);
            }
        }
    });
});

const playerMove = (btn) => {
    btn.innerText = "X";
    btn.disabled = true;
    turn0 = false;
    count++;
    checkwinner();
    if (count === 9 && !checkwinner()) {
        gamedraw();
    }
}

const computerMove = () => {
    let availableButtons = [];
    btns.forEach((btn, index) => {
        if (!btn.disabled) {
            availableButtons.push(index);
        }
    });

    if (availableButtons.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableButtons.length);
        let btn = btns[availableButtons[randomIndex]];
        btn.innerText = "O";
        btn.disabled = true;
        turn0 = true;
        count++;
        checkwinner();
        if (count === 9 && !checkwinner()) {
            gamedraw();
        }
    }
}

const gamedraw = () => {
    msg.innerText = "GAME IS DRAW";
    msbig.classList.add("grid")
    msgbox.classList.remove("hide");
    msbig.classList.remove("visbility");
    big.classList.add("hide");
    reset.classList.add("hide");
    msg.classList.remove("hide");
    newgame.classList.remove("hide");
    disablebtns();
}

const disablebtns = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
}

const enablebtns = () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS, WINNER IS ${winner}`;
    msbig.classList.add("grid")
    msgbox.classList.remove("hide");
    msbig.classList.remove("hide");
    big.classList.add("hide");
    msg.classList.remove("hide");
    newgame.classList.remove("hide");
    reset.classList.add("hide");
    disablebtns();
}

const checkwinner = () => {
    for (let pattern of win) {
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
    return false;
};




reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);


}

comp.addEventListener("click",computerplay);
man.addEventListener("click",manualplay);