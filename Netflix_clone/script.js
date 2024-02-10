// accordion//
console.log("veikiu")

const acc = document.querySelectorAll(".accordion");

for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active")

        const desc = this.nextElementSibling

        if(desc.style.maxHeight) {
            desc.style.maxHeight = null
        }
        else {
            desc.style.maxHeight = desc.scrollHeight + "px"
        }
})
};

const signInButton = document.getElementById("signInButton");
const signInModal = document.getElementById("modalSignIn");
const closeButton = document.getElementById("closeButton");

function showSignInModal() {
    signInModal.showModal();
    document.body.classList.add("dialog-opened");
}
signInButton.addEventListener("click", showSignInModal);

function closeSignInModal() {
    signInModal.close();
    document.body.classList.remove('dialog-opened');
}
closeButton.addEventListener("click", closeSignInModal);

// Close modal when "Escape" key is pressed
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeSignInModal();
    }
});
