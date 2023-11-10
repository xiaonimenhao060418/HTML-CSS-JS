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
    changeimg.style.backgroundImage = 'url("https://www.kolon.com/common/kr/images/btn-close-gnb-search-menu.svg")';
  } else {
    popArea.style.top = "-350px";
    dimd.style.display = "none";
    scroll.style.overflow = "visible";
    changeimg.style.backgroundImage = 'url("https://www.kolon.com/common/kr/images/btn-gnb-search-menu.svg")';
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

function btn_menu() {
  const element = document.querySelector(".subsidiary_list_popup");
  const body = document.querySelector("body");
  const dimd = document.querySelector(".inner_dimd");

  if (element.style.left === "100%") {
    element.style.left = "0";
    body.style.overflow = "hidden";
    dimd.style.display = "block";
  } else {
    element.style.left = "100%";
    body.style.overflow = "visible";
    dimd.style.display = "none";
  }
}

function btn_close() {
  const element = document.querySelector(".subsidiary_list_popup");
  const body = document.querySelector("body");
  const dimd = document.querySelector(".inner_dimd");

  if (element.style.left === "0") {
    element.style.left = "100%";
    body.style.overflow = "hidden";
    dimd.style.display = "block";
  } else {
    element.style.left = "100%";
    body.style.overflow = "visible";
    dimd.style.display = "none";
  }
}

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

function more_btn() {
  const elements = document.querySelectorAll(".new_feed_card_list_w_e");
  const btn_more = document.querySelector(".btn_wrap");
  const footer = document.querySelector("footer");

  elements.forEach(function (element) {
    const currentDisplay = window.getComputedStyle(element).getPropertyValue("display");

    if (currentDisplay === "none") {
      element.style.display = "block";
      btn_more.style.display = "none";

      if (window.matchMedia("(max-width: 500px)").matches) {
        footer.style.top = "4180px";
      }
    } else {
      element.style.display = "none";
    }
  });
}
