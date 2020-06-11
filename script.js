
var dataH = [5,5,4,5,2,3,4,3,9,9,6,7,8,5,3,2];
var dataC = [5,5,2,1,2,2,1,3,4,7,3,5,6,5,2,1];
var dayDoms = [];
var triggerPoints = [];

var blobH = $('#blobH');
var blobC = $('#blobC');

var currentDay;
var prevMod = 0;

$(document).ready(function(){
    $(this).scrollTop(0);
    renderDays();
    //setTriggerPoints();
});


window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY,
        wh = this.innerHeight;

    checkCurrentElement();
    translateBlobs();
});

function checkCurrentElement(){
    let bool = true;
    let counter = 0;
    while(bool){
        var inView = $(dayDoms[counter]).isInViewport();
        if(inView){
            bool = false;
            this.currentDay = counter;
        }else{
            counter++;
        }
    }
}

function renderDays(){
    for(var i=0; i<dataH.length; i++){
        let dayEvent = document.createElement('div');
        dayEvent.className = "dayEvent";
        dayEvent.id = i;
        $('body').append(dayEvent);
        this.dayDoms[i]=dayEvent;
    }
}

function translateBlobs(){

    console.log("Henrik: "+dataH[currentDay]);
    console.log("Caro: "+dataC[currentDay]);

    let offset = $('#blobH').width();
    offset = offset/2;

    let currentDataH;
    if(dataH[currentDay] < 5){
        currentDataH = dataH[currentDay] - 5;
    }else if(dataH[currentDay] == 5){
        currentDataH = 0;
    }else{
        currentDataH = dataH[currentDay];
    }

    let currentDataC;
    if(dataC[currentDay] < 5){
        currentDataC = dataC[currentDay] - 5;
    }else if(dataC[currentDay] == 5){
        currentDataC = 0;
    }else{
        currentDataC = dataC[currentDay];
    }


    blobH.css('transform','translateX(' + (currentDataH*offset - offset)+ 'px)');
    blobC.css('transform','translateX(' + (currentDataC*offset- offset)+ 'px)');

}


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

/*
function setTriggerPoints(){
    for(var i=0; i<dayDoms.length; i++){
        var scrollTop = $(window).scrollTop(),
        elementOffset = $(dayDoms[i]).offset().top,
        distance = (elementOffset - scrollTop);
        this.triggerPoints[i] = distance;
    }
}*/

/*
// element to detect scroll direction of
var el = $(window),

    // initialize last scroll position
    lastY = el.scrollTop();
    
el.on('scroll', function() {
    // get current scroll position
    var currY = el.scrollTop(),
        
        // determine current scroll direction
        y = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');

    // do something here…
    console.log(y);

    // update last scroll position to current position
    lastY = currY;
});
*/

