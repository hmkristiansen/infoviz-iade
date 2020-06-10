
/*
window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY,
        windowHeight = this.innerHeight;

    switch (true){
        case (scroll < 500):
            $("#blob_container").removeClass();
            break;
        case (scroll > 500 && scroll < 1000):
            $("#blob_container").removeClass();
            $('#blob_container').addClass("mode1");
            break; 
        case (scroll > 1000 && scroll < 1500):
            $("#blob_container").removeClass();
            $('#blob_container').addClass("mode2");
            break;
        case (scroll > 1500 && scroll < 2000):
            $("#blob_container").removeClass();
            $('#blob_container').addClass("mode3");
            break;  
    }

});
*/

var dataH = [4,5,2,3,4,3,9,9,6,7,8,5,3,2];
var dataC = [2,1,2,2,1,3,4,7,3,5,6,5,2,1];

var blobH = $('#blobH');
var blobC = $('#blobC');


window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY,
        windowHeight = this.innerHeight;

    

});

function translateBlobs(){



}








var idleAni = [".idle1",".idle2"];

window.setInterval(function(){
    //idleBlobs();
}, 800);

function idleBlobs(){
    let hor = getRandomInt(20);
    let ver = getRandomInt(20);
    var rot = getRandomInt(180);
    console.log(hor);
    console.log(ver);

    $('#blobH svg').css('left',hor);
    $('#blobH svg').css('top',ver);
    $('#blobH svg').css('transform','rotate('+rot+'deg)');

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
