// const showMore = document.querySelectorAll(".img__wrapper");
// const showMoreBtn = document.querySelector(".showmore-btn");
// var elementsQuant = 2;
// showMoreBtn.addEventListener("click", function () {
//   for (var i = elementsQuant; i < elementsQuant + 2; i++) {
//     if (showMore[i]) {
//       showMore[i].style.display = "block";
//     }
//   }
//   elementsQuant += 2;
//   if (elementsQuant >= showMore.length) {
//     showMoreBtn.style.display = "none";
//   }
// });

/* ===> script for uppertext on filter buttons, calculace quantity of images in each section <=== */
window.addEventListener("load", () => {
  const design = document.querySelectorAll(".img--design");
  const branding = document.querySelectorAll(".img--branding");
  const illustration = document.querySelectorAll(".img--illustration");
  const motion = document.querySelectorAll(".img--motion");
  const allStyles = document.querySelectorAll(".img__wrapper");

  const allBtnAfter = document.querySelector(".all-count");
  const designBtnAfter = document.querySelector(".design-count");
  const brandingBtnAfter = document.querySelector(".branding-count");
  const illustrationBtnAfter = document.querySelector(".illustration-count");
  const motionBtnAfter = document.querySelector(".motion-count");

  allBtnAfter.innerHTML = allStyles.length;
  designBtnAfter.innerHTML = design.length;
  brandingBtnAfter.innerHTML = branding.length;
  illustrationBtnAfter.innerHTML = illustration.length;
  motionBtnAfter.innerHTML = motion.length;

  /* script Counter Numbers Animation */
  const end1 = allStyles.length;
  const end2 = design.length;
  const end3 = branding.length;
  const end4 = illustration.length;
  const end5 = motion.length;
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const obj1 = document.querySelector(".all-count");
  animateValue(obj1, 0, end1, 1000);
  const obj2 = document.querySelector(".design-count");
  animateValue(obj2, 0, end2, 1000);
  const obj3 = document.querySelector(".branding-count");
  animateValue(obj3, 0, end3, 1000);
  const obj4 = document.querySelector(".illustration-count");
  animateValue(obj4, 0, end4, 1000);
  const obj5 = document.querySelector(".motion-count");
  animateValue(obj5, 0, end5, 1000);
});

/* ===> script for filter buttons, show images for each section of gallery <=== */
const filterBtn = document.querySelector(".portfolio__filters");
const filterCat = document.querySelectorAll(".img__wrapper");

window.onload = () => {
  filterBtn.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("filter-btn")) {
      filterBtn.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");

      filterCat.forEach((img__wrapper) => {
        let filterImg = img__wrapper.getAttribute("data-name");

        if (filterImg == filterName || filterName == "all") {
          img__wrapper.classList.remove("hide");
          img__wrapper.classList.add("show");
        } else {
          img__wrapper.classList.add("hide");
          img__wrapper.classList.remove("show");
        }
      });
    }
  };
};
