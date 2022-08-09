window.addEventListener("wheel", function(e){
    e.preventDefault();
} , {passive : false});

var mHtml = $(".container");
var page = 1;
var header = document.getElementsByClassName("container__header")


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page === 6) return;
        page++;
        header[0].className = "container__header header__active";
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1){ 
            return;
        }
        page--;
    }
    if(page === 1) header[0].className = "container__header";
    var posTop =(page-1) * $(window).height();
    console.log(posTop + " " + page);
    mHtml.animate({scrollTop : posTop}, 1000);
})

var section__1 = document.getElementById("container__section__1");
var head__text = document.getElementsByClassName("head__text");
var head__sub__text = document.getElementsByClassName("head__sub__text");
var bgpage = 1;


$(document).ready(function(){
    setInterval(() => {
        bgpage++;
        if(bgpage == 4) bgpage = 1;
        section__1.style.backgroundImage = 'url("../source/img/main_background0'+bgpage+'.jpg")';
        switch(bgpage){
            case 1:
                head__text[0].innerHTML = "The best solar energy";
                head__text[1].innerHTML = "equipments from Korea"
                head__sub__text[0].innerHTML = "We provide the world's highest quality solar energy equipments from various brands.<br>Especially from Korea."
                break;
            case 2:
                head__text[0].innerHTML = "Let the sun work for you";
                head__text[1].innerHTML = "we ship all over the world"
                head__sub__text[0].innerHTML = "We only carry the most profitable solar energy equipment.<br>　"
                break;
            case 3:
                head__text[0].innerHTML = "We provide the easiest way to buy";
                head__text[1].innerHTML = "solar power equipment";
                head__sub__text[0].innerHTML = "WOrder, Pay and Get, Go through only 3 steps.<br>You can have the best solar equipment, including Korean leading brands."
                break;

        }
    }, 5000);
});