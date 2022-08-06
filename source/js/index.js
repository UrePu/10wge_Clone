window.addEventListener("wheel", function(e){
    e.preventDefault();
} , {passive : false});

var mHtml = $(".container");
var page = 1;
var header = document.getElementsByClassName("container__header")

console.log(header[0]);

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
    mHtml.animate({scrollTop : posTop});
})