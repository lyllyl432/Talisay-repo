var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  const faqAnswer = document.querySelectorAll(".answer");
  const faqQues = document.querySelectorAll(".faq-ques");
  for(let i = 0; i < faqQues.length; i++){
    const question = faqQues[i];
    const button = question.querySelector(".faq-down");
    button.addEventListener("click", ()=>{
      for(let i = 0; i < faqQues.length; i++){
        const compareQuestion = faqQues[i];
        if(compareQuestion !== question){
          compareQuestion.classList.remove("show");
        }
      }
      question.classList.toggle("show");
    })
  }

//counterAchievement
const numbers = document.getElementsByClassName("numbers");
let interval = 5000;
for(let i = 0; i < numbers.length; i++){
  let startValue = 0;
  let number = numbers[i];
  let endValue = parseInt(number.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(interval / endValue);
  console.log(duration);
  let counter = setInterval(()=>{
    startValue += 1;
    number.innerText = startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration)
}































  // faqQues.forEach((question) =>{
  //   const faqDown = question.querySelector(".faq-down");
  //   faqDown.addEventListener("click",()=>{
  //     faqQues.forEach((item)=>{
  //       if(item !== question){
  //         item.classList.remove("show");
  //       }
        
  //     })
  //     question.classList.toggle("show");
  //   })
  // })
  