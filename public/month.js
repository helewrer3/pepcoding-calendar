const monthDOM = document.querySelector('.calendar-container');
const nxtDOM = document.querySelector('.nxt-btn');
const preDOM = document.querySelector('.pre-btn');
let baseDate = new Date();
const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const monthDays = () => {
    return new Date(baseDate.getFullYear(), baseDate.getMonth()+1, 0).getDate();
}

const month = () => {
    monthDOM.innerHTML = `<h1>${months[baseDate.getMonth()]}, ${baseDate.getFullYear()} Calendar<h1>`;
    for(let i = 0; i < monthDays(); i++){
        let tempDate = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1); tempDate.setDate(tempDate.getDate()+i);
        let date = tempDate.getDate(), month = tempDate.getMonth(), year = tempDate.getFullYear();
        let date_btn = document.createElement('button'); date_btn.classList.add('btn', 'hipster');
        let date_a = document.createElement('a');
        date_a.innerHTML = `
            <div>
                <h5>${days[tempDate.getDay()]}</h5>
                <h4>${date}</h4>
            </div>
        `;
        date_a.href = `/list.html?year=${year}&month=${month}&date=${date}`;
        date_btn.appendChild(date_a);
        monthDOM.appendChild(date_btn);
    }
}

month();

nxtDOM.addEventListener('click', () => {
    baseDate.setMonth(baseDate.getMonth() + 1);
    month();
})

preDOM.addEventListener('click', () => {
    baseDate.setMonth(baseDate.getMonth() - 1);
    month();
})