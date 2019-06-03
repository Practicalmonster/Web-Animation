let current = "Front"
const layout = document.querySelector('.layout')
document.querySelectorAll("li").forEach((e)=>{
  e.addEventListener('click',(eve=>{
    const target = eve.target.innerText;
    if(eve.target.classList.contains(current)){

    }else{
      layout.classList.remove(current);
      current = "To"+target;
      layout.classList.add("To"+target);
    }
  })
)})