const nxtDOM = document.querySelector('.nxt-btn');
const preDOM = document.querySelector('.pre-btn');
let baseDate = new Date();

const year = () => {
    document.querySelector('h1').innerText = `${baseDate.getFullYear()} Calendar`;
    for(let m = 0; m < 12; m++){
        let monthDOM = document.querySelector(`.month${m}`);
        monthDOM.innerHTML = `<h2>${months[m]}<h2>`;
        for(let i = 0; i < monthDays(baseDate, m); i++){
            let tempDate = new Date(baseDate.getFullYear(), m, 1); tempDate.setDate(tempDate.getDate()+i);
            makeBtn(tempDate, monthDOM);
        }
    }
}

year();

nxtDOM.addEventListener('click', () => {
    baseDate.setFullYear(baseDate.getFullYear() + 1);
    year();
})

preDOM.addEventListener('click', () => {
    baseDate.setFullYear(baseDate.getFullYear() - 1);
    year();
})