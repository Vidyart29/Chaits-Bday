onload = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.body.style.display = "block";
    gsap.fromTo("#img",{
        y:-200,
        opacity:0,
        duration:1.5
    },{
        y:0,
        opacity:1,
        duration:2
    }
    )
    gsap.to("#txt", {duration: 1, y:4,scale:0.9,yoyo:true,repeat:-1})
}