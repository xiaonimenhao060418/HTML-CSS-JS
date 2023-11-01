function btn_open() {
  const elements = document.querySelectorAll(".list_wrap");

  elements.forEach(function (element) {
    const currentDisplay = window.getComputedStyle(element).getPropertyValue("display");

    if (currentDisplay === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function btn_lang_cho() {
  const elements = document.querySelectorAll(".lang_w");

  elements.forEach(function (element) {
    const currentDisplay = window.getComputedStyle(element).getPropertyValue("display");

    if (currentDisplay === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

function btn_srch() {
  const popArea = document.querySelector(".header_srch_pop_area");
  const dimd = document.querySelector(".inner_dimd");
  const scroll = document.querySelector("body");
  const changeimg = document.querySelector(".btn_srch_btn_top_srch");

  const popareatop = window.getComputedStyle(popArea).getPropertyValue("top");

  if (popareatop === "-350px") {
    popArea.style.top = "60px";
    dimd.style.display = "block";
    scroll.style.overflow = "hidden";
    changeimg.style.backgroundImage = 'url("/img/btn-close-gnb-search-menu.svg")';
  } else {
    popArea.style.top = "-350px";
    dimd.style.display = "none";
    scroll.style.overflow = "visible";
    changeimg.style.backgroundImage = 'url("/img/btn-gnb-search-menu.svg")';
  }
}

// function btn_srch() {
//   const elements = document.querySelectorAll(".header_srch_pop_area");

//   elements.forEach(function (element) {
//     const currentDisplay = window.getComputedStyle(element).getPropertyValue("display");

//     if (currentDisplay === "none") {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//   });
// }

document.querySelector(".btn_menu").addEventListener("click", function () {
  const element = document.querySelector(".subsidiary_list_popup");
  const body = document.querySelector("body");

  if (element.style.left === "100%") {
    element.style.left = "0";
    body.style.overflow = "hidden";
  } else {
    element.style.left = "100%";
    body.style.overflow = "visible";
  }
});

// function btn_close() {
//   const elements = document.querySelectorAll(".subsidiary_list_popup");
//   const body = document.querySelector("body");

//   elements.forEach(function (element) {
//     const currentDisplay = window.getComputedStyle(element).getPropertyValue("display");

//     if (currentDisplay === "block") {
//       element.style.display = "none";
//       body.style.overflow = "visible";
//     }
//   });
// }

const deleteButton = document.querySelector(".btn_delete");
const inputElement = document.getElementById("frmtopsrcgq");

function resetInput() {
  inputElement.value = "";
  toggleButton();
}

inputElement.addEventListener("input", toggleButton);

deleteButton.addEventListener("click", resetInput);

function toggleButton() {
  if (inputElement.value.trim() === "") {
    deleteButton.style.display = "none";
  } else {
    deleteButton.style.display = "inline-block";
  }
}

toggleButton();
