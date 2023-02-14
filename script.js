const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


// Navbar responsive open and close.
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// single product image change
// Click vào ảnh nhỏ có index nào thì ảnh to sẽ thay đổi src tương ứng với src của ảnh nhỏ
let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};
