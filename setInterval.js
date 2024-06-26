const bannerdata = [
    "/banner2/1.png",
    "/banner/0.png",
    "/banner2/membership.png"
];

//같은 변수 
let num = 0;
document.querySelector("#bannerimg").setAttribute("src",bannerdata[num])

document.querySelector(".bannerwrap").style.background =`
                           url(${bannerdata[num]}) center no-repeat`;

const autoBanner =  setInterval(function(){
    num++;
    num %= bannerdata.length;
    document.querySelector(".bannerwrap").style.background =`url(${bannerdata[num]}) center no-repeat`;
    document.querySelector("#bannerimg").setAttribute("src",bannerdata[num]) 
}, 3000)



document.querySelector(".bannerwrap  button").addEventListener('click', function(){
    clearInterval(autoBanner);
    this.innerHTML = "PLAY";
})

