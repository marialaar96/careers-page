const nav = document.getElementById("Nav");

window.onscroll = function(){
    const bodyScroll = document.body.scrollTop;
    const documentScroll = document.documentElement.scrollTop;

    if (bodyScroll >= 50 || documentScroll >= 50) {
        nav.classList.add("nav-scroll");

    } else {
        nav.classList.remove("nav-scroll");
    }
  

};

