document.querySelector('.open-menu').addEventListener("click", () => {
  document.querySelector('.nav').classList.add("actived");
})

document.querySelector('.close-menu').addEventListener("click", () => {
  document.querySelector('.nav').classList.remove("actived");
});
