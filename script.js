const menuBut = document.getElementById("menuBut")
const menu = document.getElementById("menu")
const exitBut = document.getElementById("exitBut")

menuBut.onclick = () => {
    gsap.to(menuBut, {display: "none", duration:0})
    gsap.fromTo("#menu", {display: "none",opacity: 0},{display: "block", opacity: 1})
    gsap.fromTo(".menuLink", {opacity:0, x: "+=100", stagger: 0.1},{opacity:1, x: 0,stagger: 0.1})
}

exitBut.onclick = () => {
    gsap.to(menuBut, {display: "block",delay: 0.5})
    gsap.fromTo("#menu", {display: "block",opacity: 1},{display: "none", opacity: 0})
    gsap.fromTo(".menuLink", {opacity:1, x: 0, stagger: 0.1},{opacity:0, x: "+=100",stagger: 0.1})
}

// on even of window resizing apply condition
window.onresize = () => {
    let windowWidth = window.innerWidth
    if(windowWidth > 768){
        gsap.to(menuBut, {display: "none", duration:0, delay: 0})
        gsap.fromTo("#menu", {display: "none",opacity: 0, duration:0, delay: 0},{display: "block", opacity: 1, duration:0, delay: 0})
        gsap.fromTo(".menuLink", {opacity:0, x: 0},{opacity:1, x: 0})
    }
    else{
        gsap.to(menuBut, {display: "block", duration: 0, delay: 0})
        gsap.fromTo("#menu", {display: "block",opacity: 1, duration:0, delay: 0},{display: "none", opacity: 0, duration:0, delay: 0})
    }
}

// alert(window.innerWidth)

