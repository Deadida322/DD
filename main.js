var browserMinWidth = parseInt($('head').css('min-width'), 10);
if (document.documentElement.clientWidth > 600){
    $(".galleryContainer > div").on('click', function(d) {
        curSlide = d.target;
        
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
    this.querySelectorAll('.galleryContainer').forEach(galleryContainer => {
        let pos = pageYOffset;
        galleryContainer.style.width = `${pos*pos/3500}%`
        galleryContainer.style.opacity = `${pos/3}%`
    });
    this.querySelectorAll('.Arrow').forEach(Arrow => {
        
       Arrow.style.display = `none`
    });
    this.querySelectorAll('.gallery2').forEach(gallery2 => {
        let pos = pageYOffset;
        gallery2.style.width = `${pos*pos/5000}%`
        gallery2.style.opacity = `${pos/6}%`
    });
    this.querySelectorAll('.vidgallery').forEach(gallery => {
        let pos = pageYOffset;
        gallery.style.opacity = `${pos/6}%`
    });
    this.querySelectorAll('.gallery3').forEach(gallery3 => {
        let pos = pageYOffset;
        gallery3.style.width = `${pos*0.25*pos/8200}%`
        gallery3.style.opacity = `${pos/9}%`
    });
    this.querySelectorAll('.gallery4').forEach(gallery4 => {
        let pos = pageYOffset;
        gallery4.style.width = `${pos*0.22*pos/10200}%`
        gallery4.style.opacity = `${pos/12}%`
    });
}
function changejc2(event){
    this.querySelectorAll('.desc1').forEach(desc1 => {
        let pos = pageYOffset;
        desc1.style.opacity = `${pos*pos/1500}%`
    });
    this.querySelectorAll('.desc2').forEach(desc2 => {
        let pos = pageYOffset;
        desc2.style.opacity = `${pos*pos/5000}%`
    });
    this.querySelectorAll('.desc3').forEach(desc3 => {
        let pos = pageYOffset;
        desc3.style.opacity = `${pos*0.4*pos/7000}%`
    });
    this.querySelectorAll('.desc4').forEach(desc4 => {
        let pos = pageYOffset;
        desc4.style.opacity = `${pos*0.3*pos/9000}%`
    });
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
        $(".ShowPhoto > img").attr({"src": iP});
    });

    $(".pelena").on('click', function(d) {
        $(".ShowPhoto").css({"display": "none"});
        $(".pelena").css({"display": "none"});
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
        this.querySelectorAll('.galleryContainer').forEach(galleryContainer => {
            let pos = pageYOffset;
            galleryContainer.style.width = `${pos*pos/100}%`
            galleryContainer.style.opacity = `${pos}%`
        });
        this.querySelectorAll('.Arrow').forEach(Arrow => {
            
           Arrow.style.display = `none`
        });
        this.querySelectorAll('.gallery2').forEach(gallery2 => {
            let pos = pageYOffset;
            gallery2.style.width = `${pos*pos/200}%`
            gallery2.style.opacity = `${pos/2}%`
        });
        this.querySelectorAll('.vidgallery').forEach(gallery => {
            let pos = pageYOffset;
            gallery.style.opacity = `${pos/6}%`
        });
        this.querySelectorAll('.gallery3').forEach(gallery3 => {
            let pos = pageYOffset;
            gallery3.style.width = `${pos*0.25*pos/800}%`
            gallery3.style.opacity = `${pos/6}%`
        });
        this.querySelectorAll('.gallery4').forEach(gallery4 => {
            let pos = pageYOffset;
            gallery4.style.width = `${pos*0.22*pos/1220}%`
            gallery4.style.opacity = `${pos/8}%`
        });
    }
    function changejc2(event){
        this.querySelectorAll('.desc1').forEach(desc1 => {
            let pos = pageYOffset;
            desc1.style.opacity = `${pos*pos/400}%`
        });
        this.querySelectorAll('.desc2').forEach(desc2 => {
            let pos = pageYOffset;
            desc2.style.opacity = `${pos*pos/600}%`
        });
        this.querySelectorAll('.desc3').forEach(desc3 => {
            let pos = pageYOffset;
            desc3.style.opacity = `${pos*0.4*pos/1000}%`
        });
        this.querySelectorAll('.desc4').forEach(desc4 => {
            let pos = pageYOffset;
            desc4.style.opacity = `${pos*0.3*pos/1100}%`
        });
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
