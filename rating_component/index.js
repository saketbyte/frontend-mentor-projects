const list = document.querySelectorAll(".rating-button");
const submitBtn = document.querySelector("#submit-button");
const mainSection = document.querySelector(".card");
const thankYouSection = document.querySelector(".thank-you");
let feedbackResult = document.querySelector(".result");
let feedbackValue = 0;

list.forEach((evelist) => {
  evelist.addEventListener("click", (e) => {
    feedbackValue = e.target.textContent;
    // console.log(feedbackValue);
  });
});

submitBtn.addEventListener("click", () => {
  if (feedbackValue != 0) {
    thankYouSection.classList.remove("hide");
    mainSection.classList.add("hide");
    feedbackResult.textContent = `You selected ${feedbackValue} out of 5`;
  } else {
    alert("Feedback cant be null give 1 atleast");
  }
});
