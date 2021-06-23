const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const makeBtn = (tempDate, DOM) => {
    tempDate.setHours(0, 0, 0, 0);
    let date_btn = document.createElement('button'), cur_date = new Date(); cur_date.setHours(0, 0, 0, 0);
    if(tempDate.getTime() == cur_date.getTime()) date_btn.classList.add('btn', 'hipster', 'hipster-red');
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