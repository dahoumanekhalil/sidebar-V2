let sidebar = document.querySelector('.sidebar');
let toggle = document.querySelector('#toggleMode')
// let sun = document.querySelector('')
let sun = document.querySelector('.pageMode .fa-sun')
let moon = document.querySelector('.pageMode .fa-moon')
let mode ;

mode = localStorage.getItem('mode');
document.body.className = mode
sidebar.addEventListener('mouseover', () => {
    document.querySelector('.sidebar').style.cssText = `width: 250px;`
    // document.querySelector('.sidebarTop').style.cssText = `justify-content: center;`;
    document.querySelector('.sidebarTop div').style = `    
    width: 120px;
    transition: 0.2s ease 0.1s;
    `;
    let spans = document.querySelectorAll(".sidebarMiddle div span")
    spans.forEach((ele) => {
        ele.style.cssText =`display:flex;opacity: 1;`
    });
    document.querySelector('.sidebarBottom div').style.cssText = `
    display: flex;
    width: 170px;
    opacity: 1;
    `;

});


sidebar.addEventListener('mouseout', () => {
    document.querySelector('.sidebar').style.cssText = `width: 85px;`
    document.querySelector('.sidebarTop').style.cssText = `justify-content: flex-start;`;
    document.querySelector('.sidebarTop div').style = `    
    justify-content: start;
    align-items: flex-start;
    width: 42px;
    transition: 0.2s ease 0.3s;
    `;
    let spans = document.querySelectorAll(".sidebarMiddle div span")
    spans.forEach((ele) => {
        ele.style.cssText =`display:none;opacity: 0;`
    });
    document.querySelector('.sidebarBottom div').style.cssText = `
    display: none;
    width: 0;
    opacity: 0;
    `;
})

toggle.addEventListener('change', () => {
    mode = document.body.className = document.body.className == `dark` ? `light` : `dark`
    localStorage.setItem('mode', mode)
    console.log(localStorage.getItem('mode'))
    sun.className = sun.className == `fa-solid fa-sun` ? `fa-regular fa-sun` : `fa-solid fa-sun`;
    moon.className = moon.className == `fa-solid fa-moon` ? `fa-regular fa-moon` : `fa-solid fa-moon`;
})