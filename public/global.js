const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const makeBtn = (tempDate, DOM) => {
    let date_btn = document.createElement('button'); 
    if(tempDate == new Date()) date_btn.classList.add('btn', 'hipster', 'hipster-red');
    if(tempDate.getTime() == (new Date()).getTime()) date_btn.classList.add('btn', 'hipster', 'hipster-red');
    else date_btn.classList.add('btn', 'hipster');
    date_btn.innerHTML = `
        <a href = "/list.html?year=${tempDate.getFullYear()}&month=${tempDate.getFullYear()}&date=${tempDate.getDate()}">
            <div>
                <h5>${days[tempDate.getDay()]}</h5>
                <h4>${tempDate.getDate()} ${months[tempDate.getMonth()]}</h4>
            </div>
        </a>
    `;
    DOM.appendChild(date_btn);
}

const monthDays = (tempDate, month) => {
    return new Date(tempDate.getFullYear(), month+1, 0).getDate();
}