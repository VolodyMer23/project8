var showMore = document.querySelectorAll(".img__wrapper");
var showMoreBtn = document.querySelector(".showmore-btn");
var elementsQuant = 2;
showMoreBtn.addEventListener("click", function () {
  for (var i = elementsQuant; i < elementsQuant + 2; i++) {
    if (showMore[i]) {
      showMore[i].style.display = "block";
    }
  }
  elementsQuant += 2;
  if (elementsQuant >= showMore.length) {
    showMoreBtn.style.display = "none";
  }
});

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

  console.log(design.length);
  console.log(allStyles.length);
  console.log(allBtnAfter);
});

const filterBtn = document.querySelector(".portfolio__filters");
const filterCat = document.querySelectorAll(".img__wrapper");

window.onload = () => {
  filterBtn.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("filter-btn")) {
      filterBtn.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name")

      filterCat.forEach((img__wrapper) => {
        let filterImg = img__wrapper.getAttribute("data-name");

        if ((filterImg == filterName) || filterName == "all"){
            img__wrapper.classList.remove("hide");
            img__wrapper.classList.add("show");
        } else {
            img__wrapper.classList.add("hide");
            img__wrapper.classList.remove("show");
        }
        console.log(filterImg);
      })
      
    }
  };
};
