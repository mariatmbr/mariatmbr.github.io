import anime from "animejs";


function animateHome(){
    var textWrapper = document.querySelector('.title');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='title-anim inline-block'>$&</span>");

    textWrapper = document.querySelector('.more');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='more-anim inline-block'>$&</span>");


    anime.timeline({ loop: false })
      .add({
        targets: '.title .title-anim',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 1500,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.body',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000
      }).add({
        targets: '.more .more-anim',
        opacity: [0, 1],
        duration: 10,
      }).add({
        targets: '.more .more-anim',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 1500,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.more-button',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000
      })
}

export {animateHome};