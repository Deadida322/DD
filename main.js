var browserMinWidth = parseInt($('head').css('min-width'), 10);
if (document.documentElement.clientWidth > 600){
    $(".galleryContainer > div").on('click', function(d) {
        curSlide = d.target;
        $(".krest").css({"display": "block"});
        iPicture = $(curSlide).css("backgroundImage");
        iPicture = iPicture.split("(");
        var iP = iPicture[1];
        iP = iP.replace(')', '');
        iP = iP.replace(/"/g, '');
        $(".ShowPhoto").css({"display": "block"});
        $(".pelena").css({"display": "block"});
        $(".ShowPhoto > img").attr({"src": iP});
    });

    $(".pelena").on('click', function(d) {
        $(".ShowPhoto").css({"display": "none"});
        $(".pelena").css({"display": "none"});
        $(".krest").css({"display": "none"});
    });
    $(".krest").on('click', function(d) {
        $(".ShowPhoto").css({"display": "none"});
        $(".pelena").css({"display": "none"});
        $(".krest").css({"display": "none"});
	});
function parallax(event){
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('speeds');
        let pos = pageYOffset;
        layer.style.transform = `translateY(${pos*speed/-100}px)`
    });
}
function parallax2(event){
    this.querySelectorAll('.layer1').forEach(layer1 => {
        let speed = layer1.getAttribute('speeds');
        let pos = pageYOffset;
        let tpos = speed/pos*25
        layer1.style.width = `${tpos}%`
        if (tpos < 5){
            layer1.style.width = `${0}%`
        }
        if (tpos > 30){
            layer1.style.width = `${30}%`
        }
    });
}

document.addEventListener('scroll', parallax2);
document.addEventListener('scroll', parallax);

var el = document.getElementById('Arrow');
function changejc(event){
    let pos = pageYOffset;

    if(pos > 120){
         $('.gallery1').css({"animationName":"vidcont"});
    }
    if(pos > 300){
        $('.gallery2').css({"animationName":"vidcont"});
    }
    if(pos > 1100){
        $('.gallery3').css({"animationName":"vidcont"});
    }
    if(pos > 1400){
        $('.gallery4').css({"animationName":"vidcont"});
    }
}
function changejc2(event){
    let pos = pageYOffset;
    if(pos > 120){
        $('.desc11').css({"animationName":"vidcont2"});
        $('.desc11').css({"zIndex":"200"});
   }
   if(pos > 300){
       $('.desc2').css({"animationName":"vidcont2"});
   }
   if(pos > 1100){
       $('.desc3').css({"animationName":"vidcont2"});
   }
   if(pos > 1400){
       $('.desc4').css({"animationName":"vidcont2"});
   }
}
document.addEventListener('scroll', changejc);
document.addEventListener('scroll', changejc2);
$('#BeforeAfterContainer').twentytwenty()
vid = document.getElementById('vid1'); 
vid2 = document.getElementById('vid2'); 
vid3 = document.getElementById('vid3'); 
vid.addEventListener('mousemove', function() {
  vid.play();
});

vid.addEventListener('mouseleave', function() {
  vid.pause();
});
vid2.addEventListener('mousemove', function() {
  vid2.play();
});
  
vid2.addEventListener('mouseleave', function() {
   vid2.pause();
});
vid3.addEventListener('mousemove', function() {
    vid3.play();
});
    
vid3.addEventListener('mouseleave', function() {
    vid3.pause();
});
}








if(document.documentElement.clientWidth < 600) {
    function parallax(event){
        this.querySelectorAll('.layer').forEach(layer => {
            let speed = layer.getAttribute('speeds');
            let pos = pageYOffset;
            layer.style.transform = `translateY(${pos*speed/-100}px)`
    
    
        });
    }
    $(".galleryContainer > div").on('click', function(d) {
        curSlide = d.target;
        iPicture = $(curSlide).css("backgroundImage");
        iPicture = iPicture.split("(");
        var iP = iPicture[1];
        iP = iP.replace(')', '');
        iP = iP.replace(/"/g, '');
        $(".ShowPhoto").css({"display": "block"});
        $(".pelena").css({"display": "block"});
        $(".krest").css({"display": "block"});
        $(".ShowPhoto > img").attr({"src": iP});
    });

    $(".pelena").on('click', function(d) {
        $(".ShowPhoto").css({"display": "none"});
        $(".pelena").css({"display": "none"});
        $(".krest").css({"display": "none"});
    });
    $(".krest").on('click', function(d) {
        $(".ShowPhoto").css({"display": "none"});
        $(".pelena").css({"display": "none"});
        $(".krest").css({"display": "none"});
	});
    function parallax2(event){
        this.querySelectorAll('.layer1').forEach(layer1 => {
            let speed = layer1.getAttribute('speeds');
            let pos = pageYOffset;
            let tpos = speed/pos*25
            layer1.style.width = `${tpos}%`
            if (tpos < 5){
                layer1.style.width = `${0}%`
            }
            if (tpos > 30){
                layer1.style.width = `${30}%`
            }
        });
    }
    
    document.addEventListener('scroll', parallax2);
    document.addEventListener('scroll', parallax);
    
    var el = document.getElementById('Arrow');
    function changejc(event){
        let pos = pageYOffset;
    
        if(pos > 50){
             $('.gallery1').css({"animationName":"vidcont"});
             $('.gallery1').css({"animationDuration":"1.2s"});
        }
        if(pos > 80){
            $('.gallery2').css({"animationName":"vidcont"});
            $('.gallery2').css({"animationDuration":"1.2s"});
        }
        if(pos > 400){
            $('.gallery3').css({"animationName":"vidcont"});
            $('.gallery3').css({"animationDuration":"1.2s"});
        }
        if(pos > 430){
            $('.gallery4').css({"animationName":"vidcont"});
            $('.gallery4').css({"animationDuration":"1.2s"});
        }
    }
    function changejc2(event){
        let pos = pageYOffset;
        if(pos > 50){
            $('.desc11').css({"animationName":"vidcont2"});
            $('.desc11').css({"zIndex":"200"});
       }
       if(pos > 80){
           $('.desc2').css({"animationName":"vidcont2"});
       }
       if(pos > 500){
           $('.desc3').css({"animationName":"vidcont2"});
       }
       if(pos > 530){
           $('.desc4').css({"animationName":"vidcont2"});
       }
    }
    document.addEventListener('scroll', changejc);
    document.addEventListener('scroll', changejc2);
    $('#BeforeAfterContainer').twentytwenty()
    vid = document.getElementById('vid1'); 
    vid2 = document.getElementById('vid2'); 
    vid3 = document.getElementById('vid3'); 
    vid.addEventListener('mousemove', function() {
      vid.play();
    });
    
    vid.addEventListener('mouseleave', function() {
      vid.pause();
    });
    vid2.addEventListener('mousemove', function() {
      vid2.play();
    });
      
    vid2.addEventListener('mouseleave', function() {
       vid2.pause();
    });
    vid3.addEventListener('mousemove', function() {
        vid3.play();
    });
        
    vid3.addEventListener('mouseleave', function() {
        vid3.pause();
    });
  }