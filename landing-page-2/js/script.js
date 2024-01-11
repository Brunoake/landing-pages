function moveToFront(clickedPlan) {
    const clickedIndex = Array.from(clickedPlan.parentNode.children).indexOf(clickedPlan);
  
    const middlePlan = clickedPlan.parentNode.children[Math.floor(clickedPlan.parentNode.children.length / 2)];
  
    
    clickedPlan.parentNode.insertBefore(clickedPlan, middlePlan);
  
    
    clickedPlan.parentNode.querySelectorAll('.card').forEach(function(card) {
      plan.classList.remove('centered');
    });
  
    
    clickedPlan.classList.add('centered');
  }

//   scroll
function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance) {

        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('#download-container');
})

link2.addEventListener('click', () => {
    scrollToElement('#features-container');
})

link3.addEventListener('click', () => {
    scrollToElement('#company');
})