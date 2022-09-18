const unread = document.querySelectorAll(".unread")
const button = document.querySelector(".header-button")
const count = document.querySelector(".header-count")

button.addEventListener("click", e => {
    unread.forEach((element) => {
        const icon = element.querySelector(".unread-icon")
        count.textContent = ''
        count.classList.add("hidden")
        icon.classList.add("hidden")
        element.classList.remove("unread")
    })

})