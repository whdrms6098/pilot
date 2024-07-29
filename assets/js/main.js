gsap.registerPlugin(TextPlugin);

gsap.set(`[data-effect="fade"]`, { opacity: 0 });
gsap.set(`[data-effect="x-move"]`, { x: 300 });
gsap.set(`[data-effect="y-move"]`, { yPercent: 100 });

const visualText1 = new SplitType(".sc-weare .title-area", {
  types: "words, chars",
});

const visualText2 = new SplitType(".sc-weare .group-info .word-wrap", {
  types: "words, chars",
});

const visualText3 = new SplitType(".sc-provide .group-header .word-wrap", {
  types: "words, chars",
});

const visualText4 = new SplitType(".sc-provide .group-service .font-wrap", {
  types: "words, chars",
});

const visualText5 = new SplitType(".sc-about .group-about .word-wrap", {
  types: "words, chars",
});

const visualText6 = new SplitType(".sc-about .group-story .font-wrap", {
  types: "words, chars",
});

const visualText7 = new SplitType(".sc-about .group-works .font-wrap", {
  types: "words, chars",
});

const visualText8 = new SplitType("#footer .font-wrap", {
  types: "words, chars",
});

function generateRandomText(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

$("#header .gnb-item a").each(function () {
  const originalText = $(this).text().trim();
  const originalLength = originalText.length;
  const el = $(this);

  el.mouseenter(function () {
    const randomText = generateRandomText(originalLength);
    gsap.to(el, {
      duration: 0.2,
      text: randomText,
      onComplete: function () {
        gsap.to(el, {
          duration: 0.2,
          text: originalText,
        });
      },
    });
  });
});

$(".link-get .link-text").each(function () {
  const originalText = $(this).text().trim();
  const originalLength = originalText.length;
  const el = $(this);

  el.parent(".link-get").mouseenter(function () {
    const randomText = generateRandomText(originalLength);
    gsap.to(el, {
      duration: 0.2,
      text: randomText,
      onComplete: function () {
        gsap.to(el, {
          duration: 0.2,
          text: originalText,
        });
      },
    });
  });
});

const weareText = gsap.timeline({});

weareText.from(".sc-weare .title-area .char", {
  yPercent: 100,
  duration: 0.2,
  stagger: 0.05,
});

ScrollTrigger.create({
  trigger: ".sc-weare",
  start: "0% 0%",
  end: "100% 100%",
  endTrigger: "#footer",
  // markers: true,
  onUpdate: function (self) {
    direction = self.direction;
    if (direction == 1) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  },
  onLeaveBack: function () {
    $("#header").removeClass("active");
  },
});

const weareBg = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-weare .group-header",
      start: "0% 0%",
      end: "100% 100%",
      endTrigger: ".sc-weare .group-info",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-weare .weare-bg img", { scale: 1.1 });

const infoText = gsap.to(".sc-weare .group-info .word-wrap .char", 0, {
  scrollTrigger: {
    trigger: ".sc-weare .group-info",
    start: "0% 80%",
    end: "140% 100%",
    scrub: 0,
    // markers: true,
  },
  opacity: 1,
  stagger: 0.01,
});

const pointImg = ScrollTrigger.create({
  trigger: ".sc-weare .group-point .point-item-img",
  start: "0% 55%",
  end: "100% 100%",
  //   markers: true,
  onEnter: function () {
    $(".sc-weare .group-point .point-item-img").addClass("active");
  },
});

$(".sc-weare .group-point .point-item").each(function () {
  const pointItem = gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "0% 60%",
        end: "100% 100%",
        // markers: true,
      },
    })
    .to($(this).find(".border.top"), { width: "100%", duration: 1 })
    .to($(this).find(".border.right"), { height: "100%", duration: 1 })
    .to($(this).find(".border.bottom"), { width: "100%", duration: 1 })
    .to($(this).find(".border.left"), { height: "100%", duration: 1 });
});

$(`.sc-provide .group-header [data-effect="y-move"]`).each(function (index) {
  const provideText = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-provide",
        start: "0% 80%",
        end: "100% 100%",
        // markers: true,
      },
    })
    .to($(this), { yPercent: 0, duration: 0.5, delay: index * 0.2 });
});

const provideText2 = gsap.to(".sc-provide .group-header .word-wrap .char", 0, {
  scrollTrigger: {
    trigger: ".sc-provide .group-header .desc-area",
    start: "0% 80%",
    end: "140% 40%",
    scrub: 0,
    // markers: true,
  },
  opacity: 1,
  stagger: 0.01,
});

const serviceText = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-provide .group-service",
      start: "0% 80%",
      end: "100% 100%",
      // scrub: 0,
      // markers: true,
    },
  })
  .from(".sc-provide .group-service .font-wrap .char", {
    yPercent: 100,
    rotate: 45,
    stagger: 0.05,
  });

$(".sc-provide .group-service .list-item").each(function () {
  const pointItem = gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "0% 60%",
        end: "100% 100%",
        // markers: true,
      },
    })
    .to($(this).find(`[class*="long"]`), { width: "100%", duration: 0.3 })
    .to(
      $(this).find(`[class*="left"]`),
      { height: "11px", duration: 0.3 },
      "side"
    )
    .to(
      $(this).find(`[class*="right"]`),
      { height: "11px", duration: 0.3 },
      "side"
    )
    .to($(this).find(`[data-effect="fade"]`), {
      opacity: 1,
    });
});

const aboutText1 = gsap.to(".sc-about .group-about .word-wrap .char", 0, {
  scrollTrigger: {
    trigger: ".sc-about .group-about .title-area",
    start: "0% 50%",
    end: "140% 50%",
    scrub: 0,
    // markers: true,
  },
  opacity: 1,
  stagger: 0.01,
});

const aboutText2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-about .group-about .text-item",
      start: "0% 80%",
      end: "100% 100%",
      // scrub: 0,
      // markers: true,
    },
  })
  .to(
    ".sc-about .group-about .text1 span",
    { opacity: 1, stagger: 0.1 },
    "text"
  )
  .to(
    ".sc-about .group-about .text2 span",
    { opacity: 1, stagger: 0.1 },
    "text"
  );

const aboutImg = ScrollTrigger.create({
  trigger: ".sc-about .group-about .about-bg",
  start: "0% 55%",
  end: "100% 100%",
  //   markers: true,
  onEnter: function () {
    $(".sc-about .group-about .about-bg").addClass("active");
  },
});

const storyeText1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-about .group-story .title-area",
      start: "0% 80%",
      end: "100% 100%",
      // scrub: 0,
      // markers: true,
    },
  })
  .from(".sc-about .group-story .title-area .font-wrap .char", {
    yPercent: 100,
    rotate: 45,
    stagger: 0.05,
  });

$(`.sc-about .group-story .title-area [data-effect="fade"]`).each(function (
  index
) {
  const storyeText2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-about .group-story .title-area",
        start: "0% 80%",
        end: "100% 100%",
        // scrub: 0,
        // markers: true,
      },
    })
    .to($(this), { opacity: 1, duration: 1, delay: index * 0.06 });
});

const storySlide = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-about .group-story .slide-area",
      start: "0% 80%",
      end: "100% 100%",
      // scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-about .group-story .slide-area", { x: 0 }, "move")
  .to(".sc-about .group-story .slide-area", { opacity: 1 }, "move");

const worksText = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-about .group-works .title-area",
      start: "0% 80%",
      end: "100% 100%",
      // scrub: 0,
      // markers: true,
    },
  })
  .from(".sc-about .group-works .title-area .font-wrap .char", {
    yPercent: 100,
    rotate: 45,
    stagger: 0.05,
  });

$(`.sc-about .group-works .slide-area [data-effect="fade"]`).each(function (
  index
) {
  const storyeText2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-about .group-works .title-area",
        start: "50% 90%",
        end: "100% 100%",
        // scrub: 0,
        // markers: true,
      },
    })
    .to($(this), { opacity: 1, duration: 1, delay: index * 0.3 });
});

const resumeText = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-resume .text-wrap",
      start: "0% 80%",
      end: "100% 100%",
      // markers: true,
    },
  })
  .to(".sc-resume .text1 span", { opacity: 1, stagger: 0.1 }, "text")
  .to(".sc-resume .text2 span", { opacity: 1, stagger: 0.1 }, "text");

$(".sc-resume .form-item.input").each(function () {
  const inputLine = gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "0% 80%",
        end: "100% 100%",
        // markers: true,
      },
    })
    .to(
      $(this).find(".btn-line.long"),
      { width: "100%", duration: 0.5 },
      "long"
    )
    .to(
      $(this).find(".btn-line.bottom-left"),
      { height: "11px", duration: 0.5 },
      "side"
    )
    .to(
      $(this).find(".btn-line.bottom-right"),
      { height: "11px", duration: 0.5 },
      "side"
    );
});

const btnLine = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-resume .link-btn",
      start: "0% 80%",
      end: "100% 100%",
      // markers: true,
    },
  })
  .to(".sc-resume .link-btn .btn-line.long", { width: "100%" })
  .to(
    `.sc-resume .link-btn .btn-line[class*="left"]`,
    { height: "11px" },
    "side"
  )
  .to(
    `.sc-resume .link-btn .btn-line[class*="right"]`,
    { height: "11px" },
    "side"
  )
  .from(".sc-resume .link-btn .link-arrow img", { opacity: 0 });

const footerText = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#footer",
      start: "0% 30%",
      end: "100% 100%",
      // scrub: 0,
      // markers: true,
    },
  })
  .from(
    "#footer .font-wrap .char",
    {
      yPercent: 100,
      rotate: 45,
      stagger: 0.05,
    },
    "text"
  )
  .from(
    "#footer .f-title svg",
    {
      yPercent: 100,
      rotate: 45,
      stagger: 0.05,
      opacity: 0,
    },
    "text+=0.9"
  );

const mm = gsap.matchMedia();
mm.add("(min-width:1001px)", () => {
  gsap.to(".sc-about .group-works .slide-area", {
    scrollTrigger: {
      trigger: ".sc-about .group-works",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 1,
      // markers: true,
      invalidateOnRefresh: true,
    },
    xPercent: -100,
    x: function () {
      return window.innerWidth;
    },
  });
})

$(".sc-weare .group-header").mousemove(function (e) {
  const x = (e.clientX - window.innerWidth / 2) / 10;
  const y = (e.clientY - window.innerHeight / 2) / 10;

  gsap.to(".sc-weare .screen-line .ico-cross", { x: x, y: y });
  gsap.to(".sc-weare .screen-line .line-vr", { x: x });
  gsap.to(".sc-weare .screen-line .line-hr", { y: y });
});

$(".sc-provide .group-header").mousemove(function (e) {
  const x = (e.clientX - window.innerWidth / 2) / 10;
  const y = (e.clientY - window.innerHeight / 2) / 10;

  gsap.to(".sc-provide .screen-line .ico-cross", { x: x, y: y });
  gsap.to(".sc-provide .screen-line .line-vr", { x: x });
  gsap.to(".sc-provide .screen-line .line-hr", { y: y });
});

const aboutSlide = new Swiper(".sc-about .swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
});
