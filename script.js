function init() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init()


gsap.to("#page1 #img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 10%",
        end:"top -40%",
        scrub:true,
        pin:true
    }
})
gsap.from("#page2 p",{
    rotate:8,
    y:100,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:"#page2 p",
        scroller:"#main",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from("#page2 h2",{
 
  
  opacity:0,
  stagger:1,
  scrollTrigger:{
      trigger:"#page2 h2",
      scroller:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:3
  }
})
gsap.from(".box1 img",{
    height:"200%",
    opacity:1.4,
    
    
    
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      // markers:true,
      start:"top 160%",
      end:"top 157%",
      scrub:2
      
    }
  })
  gsap.from("#page5 #para p,#page5 #bot h5,#page5 #foter h4,#page5 #foter2 h3 ",{
    opacity:0,
    stagger:1,
    y:100,
    scrollTrigger:{
      trigger:"#page5 #para p",
      scroller:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:1
    }
  })

  gsap.from("#page3 #box1",{
    opacity:0,
    stagger:0.4,
    
    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:3,
      y:100
    }
  })
  gsap.from("#page4 h5,#page4 h1",{
    opacity:0,
    stagger:0.4,
    
    scrollTrigger:{
      trigger:"#page4 h5",
      scroller:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:3,
      y:100
    }
  })
  gsap.from("#first-page h1,#first-page h2",{
    delay:1,
    opacity:0,
    duration:2,
    
    x:-80,

    y:-80
    
   
  })

 
