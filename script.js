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