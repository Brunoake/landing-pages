


function scrollToElement (elementSelector, instance = 0) {
    const elements = document.querySelectorAll
    (elementSelector);

    if(elements.length > instance) {
        elements[instance].scrollIntoView({behavior: 'smooth'})
    }

}

const plan = document.getElementById("link1");
const topics = document.getElementById("link2");
const contact = document.getElementById("link3");




plan.addEventListener("click", () => {
 scrollToElement('#plan');

 });


topics.addEventListener("click", () => {
    scrollToElement('#top');

     });

 contact.addEventListener("click", () => {
    scrollToElement('#footer-container');

    
 });
