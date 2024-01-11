function moveToFront(clickedPlan) {
    const clickedIndex = Array.from(clickedPlan.parentNode.children).indexOf(clickedPlan);
  
    const middlePlan = clickedPlan.parentNode.children[Math.floor(clickedPlan.parentNode.children.length / 2)];
  
    
    clickedPlan.parentNode.insertBefore(clickedPlan, middlePlan);
  
    
    clickedPlan.parentNode.querySelectorAll('.card').forEach(function(card) {
      plan.classList.remove('centered');
    });
  
    
    clickedPlan.classList.add('centered');
  }