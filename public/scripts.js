const actualPage = location.pathname
const menuOptions = document.querySelectorAll("header .links a")

for (item of menuOptions) {
  if (actualPage.includes(item.getAttribute("href"))) {
    item.classList.add("active")
  }
}