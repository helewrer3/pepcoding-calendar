const nxtDOM = document.querySelector('.nxt-btn');
const preDOM = document.querySelector('.pre-btn');
let baseDate = new Date();
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

const monthDays = (m) => {
    return new Date(baseDate.getFullYear(), m+1, 0).getDate();
}

const month = () => {
    for(let m = 0; m < 12; m++){
        let monthDOM = document.querySelector(`.month${m}`);
        monthDOM.innerHTML = `<h2>${months[m]}, ${baseDate.getFullYear()} Calendar`;
        for(let i = 0; i < monthDays(m); i++){
            let tempDate = new Date(baseDate.getFullYear(), m, 1); tempDate.setDate(tempDate.getDate()+i);
            let date = tempDate.getDate(), month = tempDate.getMonth(), year = tempDate.getFullYear();
            let date_btn = document.createElement('button'); date_btn.classList.add('btn', 'date-btn', 'hipster');
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
}

month();

nxtDOM.addEventListener('click', () => {
    baseDate.setFullYear(baseDate.getFullYear() + 1);
    month();
})

preDOM.addEventListener('click', () => {
    baseDate.setFullYear(baseDate.getFullYear() - 1);
    month();
})