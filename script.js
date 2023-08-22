// Get a reference to the circle elements
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const initialbackground = document.querySelector(".initialBackground");
const leftColumn = document.querySelector(".leftColumn");
const rightColumn = document.querySelector(".rightColumn");

// Create th animantion timeline of rectangle

const rectangleTimeline1 = gsap.timeline();

    rectangleTimeline1
      .to(leftColumn, {
        duration: 3,
        y: '250vh',
        ease: 'power2.out',
      })
      .to(
        rightColumn,
        {
          duration: 3,
          y: '-250vh',
          ease: 'power2.out',
        },
        '>-3'
      );


// Set initial properties
gsap.set([circle1, circle2, circle3], {
  transformOrigin: "center center",
  scale: 0,
  width: 0,
  height: 0,
});


// Create the animation timelines of circle
const timeline1 = gsap.timeline();

const timeline2 = gsap.timeline();

const timeline3 = gsap.timeline();

const circlesMainTimeline = gsap.timeline();

circlesMainTimeline.add(timeline1).add(timeline2).add(timeline3);

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

rectangleTimeline1.pause();
circlesMainTimeline.pause();

document.addEventListener('click', function () {
  if (circlesMainTimeline.paused() ) {
    if (circlesMainTimeline.reversed()) {
      circlesMainTimeline.reverse();
    } else {
      circlesMainTimeline.play();
    }
  } else {
    circlesMainTimeline.pause();
  }
});

document.addEventListener('keydown', function (event) {
  const keyName = event.key;
  if (keyName === '1') {
    rectangleTimeline1.play();
  }
  if (keyName === '2') {
    circlesMainTimeline.play();
  }
  if (keyName === 'w') {
    if (circlesMainTimeline.reversed()) {
      circlesMainTimeline.play();
    } else {
      circlesMainTimeline.reverse();
    }
  }
  if (keyName === 'q') {
    if (rectangleTimeline1.reversed()) {
      rectangleTimeline1.play();
    } else {
      rectangleTimeline1.reverse();
    }
  }
})