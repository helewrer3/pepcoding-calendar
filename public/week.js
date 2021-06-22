const weekDOM = document.querySelector('.calendar-container');
const nxtDOM = document.querySelector('.nxt-btn');
const preDOM = document.querySelector('.pre-btn');
let baseDate = new Date();
const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

const week = () => {
    weekDOM.innerHTML = '';
    for(let i = 0; i < 7; i++){
        let tempDate = new Date(); tempDate.setDate(baseDate.getDate() + (i - baseDate.getDay()));
        let date = tempDate.getDate(), month = tempDate.getMonth(), year = tempDate.getFullYear();
        let date_btn = document.createElement('button'); date_btn.classList.add('btn', 'date-btn');
        let date_a = document.createElement('a'), text = document.createTextNode(`${date}, ${days[i]}`);
        date_a.classList.add('date');
        date_a.appendChild(text);
        date_a.href = `/list.html?year=${year}&month=${month}&date=${date}`;
        date_btn.appendChild(date_a);
        weekDOM.appendChild(date_btn);
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