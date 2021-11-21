/*************************************************************************************
 SLIDERS  SLIDERS  SLIDERS  SLIDERS  SLIDERS  SLIDERS  SLIDERS  SLIDERS  SLIDERS 
*************************************************************************************/

(function(){
    const sliders = [...document.querySelectorAll(".testimony__body")]

    const buttonNext = document.getElementById("next")
    const buttonBefore = document.getElementById("before")

    let value;

    buttonBefore.addEventListener("click", () => {
        changePosition(-1)
    })

    buttonNext.addEventListener("click", () => {
        changePosition(1)
    })

    const changePosition = (add) => {
        const currentTestimony = document.querySelector(".testimony__body-show").dataset.id;

        value = parseInt(currentTestimony);

        value += add;

        sliders[parseInt(currentTestimony)-1].classList.remove("testimony__body-show")

        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add("testimony__body-show")
    }
})();

/*************************************************************************************
FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ FAQ 
*************************************************************************************/

(function(){

    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question => {
        question.addEventListener("click", () => {
            let height = 0;
            let answer = question.nextElementSibling;

            let icono = question.children[0]

            question.parentElement.parentElement.classList.toggle("questions__padding-add")

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
                icono.textContent = "expand_less"
            } else {
                icono.textContent = "expand_more"
            }

            answer.style.height = `${height}px`;
        })
    })
})();

/*************************************************************************************
MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU 
*************************************************************************************/

(function() {
    const openButton = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__link")
    const closeMenu = document.getElementById("nav__close")

    openButton.addEventListener("click", () => {
        menu.classList.add("nav__link-show");
    });

    closeMenu.addEventListener("click", () => {
        menu.classList.remove("nav__link-show")
    })

    
})();