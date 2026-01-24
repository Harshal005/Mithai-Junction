gsap.registerPlugin(ScrollTrigger);

const main = document.querySelector("main");

const locoScroll = new LocomotiveScroll({
  el: main,
  smooth: true,
  lerp : 0.06
});

// locomotive → GSAP sync
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(main, {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: main.style.transform ? "transform" : "fixed"
});

// Refresh on load
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

window.addEventListener("load", function(){
  page1Animation();
  page2Animation();
  page3Animation();
  floatingSweets();
  footerBaluShahi();
})

function page1Animation(){
  const tl = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power3.out"
    }
  });

  tl.from(".logo", {
    y:-50,
    opacity:0
  })
  tl.from(".nav-links a",{
    y:-50,
    opacity:0,
    stagger:0.1
  }, "-=0.2")

  tl.from(".other-links", {
    y: -50,
    opacity: 0
  }, "-=0.2");

  tl.from(".hero-left",{
    x:-100,
    opacity:0,
    duration:2
  });

  tl.from(".hero-right",{
    x:100,
    opacity:0,
    duration:2
  },"<");
}

function page2Animation(){

  var tl2 = gsap.timeline({
    scrollTrigger : {
      trigger : "#page2 h1",
      scroller : "main",
      start : "top 80%",
      end : "top 10%",
      scrub : 1
    }
  })

  tl2.from("#page2 h1",{
    x:-200,
    opacity : 0,
    duration : 1.5,
    
  },"text")
  tl2.from("#page2 p",{
    x:200,
    opacity : 0,
    duration : 1.5,
  
  },"text")

  tl2.from("#page2 .sweet-categories",{
    y:50,
    opacity :0,
    duration : 1
  })

  // tl2.from("#page2 .card-right",{
  //   x:-200,
  //   opacity :0,
  //   duration : 0.8
  // })

}

function page3Animation(){
  
    var tl3 = gsap.timeline({
      scrollTrigger : {
        trigger : "#page3 h2",
        scroller : "main",
        start : "top 80%",
        end : "top 10%",
        scrub : 1,
        stagger : 0.5
      }
    })
    tl3.from(".why-choose-us h2",{
      x : -100,
      duration :1,
      opacity :0
    },"text")
    tl3.from(".why-choose-us .subtitle",{
      x : 100,
      duration : 1,
      opacity: 0
    },"text")
    tl3.from(".features",{
      y : 200,
      duration : 1,
      opacity : 0,
      stagger : 0.7
    })
   
    

}

function floatingSweets(){

  gsap.from(".j1",{
    opacity:0,
    delay:2.5,
    y:50
  });
  gsap.from(".j2",{
    opacity:0,
    delay:2.5,
    y:50
  })
  gsap.from(".j3",{
    opacity:0,
    delay:2.5,
    y:50
  })
  gsap.from(".j4",{
    opacity:0,
    delay:2.5,
    y:50
  })


}

function footerBaluShahi(){
  var tl3 = gsap.timeline({
      scrollTrigger : {
        trigger : "#page4 .footer-brand",
        scroller : "main",
        // markers : true,
        start : "top 80%",
        end : "top 15%",
        scrub : 1,
        stagger : 1
      }
    })
    tl3.from(".footer-reveal",{
      opacity:0,
      y:50,
      duration:0.7,
      stagger : {
        each : 0.15
      }
    })
    tl3.from(".footer-left img",{
      opacity : 0,
      x:-50,
      duration : 2
    },"balushahi")
    tl3.from(".footer-right img",{
      opacity : 0,
      x:50,
      duration : 2
    },"balushahi")
    
    
}
// locoScroll.on("scroll", (obj)=>{
  //   const footerTop = footer.getBoundingClientRect().top;
  
  //   if (footerTop <= 0) {
    //     // footer page fully visible -> hide navbar
    //     navbar.style.top = "-100px"; // slide up
    //   } else {
      //     // footer not visible -> show navbar
      //     navbar.style.top = "0";
      //   }
      // })
      
      
// THis is the code to hide the navbar when scroll at the footer of the page
const navbar = document.querySelector(".navbar");
const footer = document.querySelector("#page4");
ScrollTrigger.create({
  trigger: "#page4",
  scroller: main, // LocomotiveScroll container
  start: "top bottom", // when top of footer hits bottom of viewport
  end: "top top",
  onEnter: () => { navbar.style.top = "-100px"; },
  onLeaveBack: () => { navbar.style.top = "0"; },
});


// Redirecting to cart page
let cartlink = document.querySelector(".cart-link");
cartlink.addEventListener("click",function (){
  window.location.href = "cart.html";
})

// redirecting to products page
let explore = document.querySelector(".explore");
explore.addEventListener("click",function (){
  window.location.href = "products.html";
})

let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateCount(){
    let count = cart.reduce((sum, item) => sum + item.quantity,0);
    document.querySelector(".cart-count").innerText = count;
  }

  updateCount();


let logout = document.querySelector(".logout");
logout.addEventListener("click", function(){
  let confirmLogout = confirm("Are you sure want to logout?");

  if(confirmLogout){
    localStorage.setItem("isLoggedIn",false);
  }
  window.location.href = "index.html";
})


if(localStorage.getItem("isLoggedIn") !== "true"){
  window.location.href = "index.html";
}
