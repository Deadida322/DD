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
        galleryContainer.style.width = `${pos*pos/5000}%`
        galleryContainer.style.opacity = `${pos/3}%`
    });
    this.querySelectorAll('.Arrow').forEach(Arrow => {
        
       Arrow.style.display = `none`
    });
    this.querySelectorAll('.gallery2').forEach(gallery2 => {
        let pos = pageYOffset;
        gallery2.style.width = `${pos*pos/6000}%`
        gallery2.style.opacity = `${pos/6}%`
    });
}
function changejc2(event){
    this.querySelectorAll('.desc1').forEach(desc1 => {
        let pos = pageYOffset;
        desc1.style.opacity = `${pos*pos/40}%`
    });
    this.querySelectorAll('.desc2').forEach(desc2 => {
        let pos = pageYOffset;
        desc2.style.opacity = `${pos*pos/50}%`
    });
}
document.addEventListener('scroll', changejc);
document.addEventListener('scroll', changejc2);