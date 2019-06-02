document.querySelectorAll(".selectors").forEach(e=>{
    e.addEventListener('mouseenter',(E)=>{
        const condition = E.target.classList.contains('active')
        if(!condition){
            const elem = document.querySelector('.active');
            elem.classList.remove('active')
            elem.classList.add('inactive')
            E.target.classList.remove('inactive')
            E.target.classList.add('active')
            imageFunc(elem.id.split(",")[1],E.target.id.split(",")[1])
        }
    })
})

function imageFunc(Old , New){
    Deactivated  = document.querySelector("#"+Old);
    console.log(Deactivated)
    Activate = document.querySelector("#"+New);
    Activate.classList.remove('DeactiveImage')
    Activate.classList.add('imgActive')
    Deactivated.classList.remove('imgActive')
    Deactivated.classList.add('upward')
    setTimeout(()=>{
        Deactivated.classList.remove('upward')
        Deactivated.classList.add('DeactiveImage')
    },300)
}