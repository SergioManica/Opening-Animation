// Get a reference to the circle elements
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const initialbackground = document.querySelector(".initialBackground");

// Set initial properties
gsap.set([circle1, circle2, circle3], {
  transformOrigin: "center center",
  scale: 0,
  width: 0,
  height: 0,
});


// Create the animation timelines
const timeline1 = gsap.timeline();

const timeline2 = gsap.timeline();

const timeline3 = gsap.timeline();

const mainTimeline = gsap.timeline();

mainTimeline.add(timeline1).add(timeline2).add(timeline3);

timeline3.to(initialbackground, {
  delay: 1,
  display: "none",
});

timeline2.to([circle1, circle2, circle3], {
  delay: 1.5,
  duration: 1,
  height: 200,
  width: 200,
  ease: "power1.out",
});

timeline1
  .to(circle1, {
    duration: 3,
    scale: 20,
    ease: "none",
  })
  .to(
    circle2,
    {
      duration: 3,
      scale: 20,
      ease: "none",
    },
    ">-2.75"
  )
  .to(
    circle3,
    {
      duration: 3,
      scale: 20,
      ease: "none",
    },
    ">-2.75"
  );

// Play the animation

mainTimeline.play(-1);

document.addEventListener("click", function () {
  if (mainTimeline.paused()) {
    if (mainTimeline.reversed()) {
      mainTimeline.reverse();
    } else {
      mainTimeline.play();
    }
  } else {
    mainTimeline.pause();
  }
});

document.addEventListener("keydown", function (event) {
  const keyName = event.key;
  if (keyName === " ") {
    if (mainTimeline.reversed()) {
      mainTimeline.play();
    } else {
      mainTimeline.reverse();
    }
  }
});
