document.addEventListener("scroll", (ev) => {
  let nav = document.querySelector("header")
  let scrollTop = window.pageYOffset
  if (scrollTop == 0 && nav.classList.contains("scrolled")) {
    nav.classList.remove("scrolled")
  } else if (scrollTop > 0 && !nav.classList.contains("scrolled")) {
    nav.classList.add("scrolled")
  }
})
// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-fixed-top");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });
