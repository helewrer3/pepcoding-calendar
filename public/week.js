const weekDOM = document.querySelector('.calendar-container');
const nxtDOM = document.querySelector('.nxt-btn');
const preDOM = document.querySelector('.pre-btn');
let baseDate = new Date();

const week = () => {
    weekDOM.innerHTML = '<h1>Weekly Calendar<h1>';
    for(let i = 0; i < 7; i++){
        let tempDate = new Date(); tempDate.setDate(baseDate.getDate() + (i - baseDate.getDay()));
        makeBtn(tempDate, weekDOM);
    }
}

week();

nxtDOM.addEventListener('click', () => {
    baseDate.setDate(baseDate.getDate() + 7);
    week();
})

preDOM.addEventListener('click', () => {
    baseDate.setDate(baseDate.getDate() - 7);
    week();
})