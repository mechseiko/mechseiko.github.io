const body = document.querySelector("body")
const ham = document.getElementById("ham")
const mobileNav = document.getElementById("mobile")
const header = document.querySelector("header")

body.style.backgroundImage = "none"
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

document.getElementById("coy").innerHTML = `Copyright &copy; Shana ${new Date().getFullYear()}`