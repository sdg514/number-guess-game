// 랜덤번호 지정
// 유저 번호 입력 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면 맞췄습니다.
// 랜덤번호 < 유저번호 Down
// 랜덤번호 > 유저번호 Up
// Reset버튼 누르면 게임이 리셋
// 5번 기회를 다쓰면 게임이 끝 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("userNum");
let resultArea = document.getElementById("result-area");
let resultAreaImg = document.querySelector(".main-img");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value=""
})

function pinkRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답",computerNum);
};

function play(){
    let userValue = userInput.value;
    
    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100사이 숫자만 입력해주세요";
        return;
    };

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다.";
        return;
    };

    chances -- ;
    chanceArea.textContent =`남은기회: ${chances}`;
    // console.log("chances", chances);

    if(userValue < computerNum){
        resultAreaImg.src ="https://ppss.kr/wp-content/uploads/2018/03/0-121-540x281.jpg";
        resultArea.textContent = "Up!!!!"

    }else if(userValue > computerNum){
        resultAreaImg.src ="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fus.123rf.com%2F450wm%2Fsgame%2Fsgame1407%2Fsgame140700033%2F30151074-red-drop-down-arrow-isolated-on-white-background.jpg%3Fver%3D6&type=sc960_832";
        resultArea.textContent = "Down!!!!"
    }else{
        resultAreaImg.src ="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTNfOTQg%2FMDAxNzM0MDg1NDYyMzg0.9KwUSf0UCDtXeZm8nUtMiqzNQioC-Np7qtzDaW4AnBEg.NZ9eONEzC2tYehSKAOvceMYs1HNoMvHAm7FtrWMwX7Ig.JPEG%2FIMG_6256.JPG&type=sc960_832";
        resultArea.textContent = "정답입니다!!!!"
        gameOver = true
    }

    history.push(userValue)
    
    console.log(history);

    if(chances < 1){
        gameOver = true;
    };

    if(gameOver == true){
        playButton.disabled=true;
    };
};
function reset(){
    // user input창이 정리되고
    userInput.value = "";
    // 새로운 번호 생성
    pinkRandomNum();

    resultArea.textContent = "결과값이 여기에 나옵니다."
}

pinkRandomNum();