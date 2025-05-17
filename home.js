const body = document.querySelector("body")
const copy = document.getElementById("copy")
const home = document.getElementById("home") 
const intro = document.getElementById("intro")
const ham = document.getElementById("ham")
const mobileNav = document.getElementById("mobile")
const header = document.querySelector("header")

home.style.display = "none"
mobileNav.style.display = "none"

ham.addEventListener("click", () => {
    if(mobileNav.style.display == "none"){
        header.style.borderBottomLeftRadius = "0px"
        header.style.borderBottomRightRadius = "0px"
        ham.src = "cross.png"
        mobileNav.style.display = "block"
    }
    else if(mobileNav.style.display == "block"){
        header.style.borderBottomLeftRadius = "50%"
        header.style.borderBottomRightRadius = "50%"
        ham.src = "ham.svg"
        mobileNav.style.display = "none"
    }
})

const aceCards = document.getElementById("aceCards")
const cards = aceCards.children
document.getElementById("copy").innerHTML = `Copyright &copy; Shana ${new Date().getFullYear()}`
document.getElementById("coy").innerHTML = `Copyright &copy; Shana ${new Date().getFullYear()}`

// INTRO-HOME TRANSITION
const load = setTimeout(() => {
    body.style.backgroundImage = "none"
    intro.style.display = "none";
    home.style.display = "inline";
}, 5000)

// ACE CARDS
for (const card of cards) {
    card.onmouseover = () => {
        card.style.animation = "cards 2s ease-out 0s infinite"
    }
}