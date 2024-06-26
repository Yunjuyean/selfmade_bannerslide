// let count = 0; // count 변수를 0으로 초기화

// const navidata = ["오늘도", "조퇴를", "해볼까", "가자", "집으로"]; // 문자열 배열 navidata를 선언 및 초기화

// setInterval(function() { // 500밀리초마다 아래 함수를 실행
//     console.log(navidata[count]); // 현재 count 인덱스에 해당하는 navidata 배열의 요소를 콘솔에 출력
//     count++; // count 변수를 1 증가시킴
//     count %= navidata.length; // count 변수를 navidata 배열의 길이로 나눈 나머지 값으로 업데이트 (배열의 길이를 벗어나지 않게 함)
// }, 500); // 이 함수는 500밀리초마다 실행됨
// 자바스크립트 경로는 css랑 다르다. 연결된 html 기준으로 처리해야한다.

let count = 3;
setInterval(function(){
    count++;
    count %= 6;
    document.querySelector("#bannerimg").setAttribute("src", `/banner/${count}.png`)
}, 1000);


// $("#bannerimg").attr("src", "/banner/메인이미4.png")