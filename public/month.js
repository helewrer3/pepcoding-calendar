const monthDOM = document.querySelector('.calendar-container');
const nxtDOM = document.querySelector('.nxt-btn');
const preDOM = document.querySelector('.pre-btn');
let baseDate = new Date();

const month = () => {
    monthDOM.innerHTML = `<h1>${months[baseDate.getMonth()]}, ${baseDate.getFullYear()} Calendar<h1>`;
    for(let i = 0; i < monthDays(baseDate, baseDate.getMonth()); i++){
        let tempDate = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1); tempDate.setDate(tempDate.getDate()+i);
        makeBtn(tempDate, monthDOM);
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