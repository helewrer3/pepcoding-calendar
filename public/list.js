const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const listDOM = document.querySelector('.class-list');

const getClasses = async () => {
    const res = await fetch(`api/${params.year}/${params.month}/${params.date}`);
    const jsondata = await res.json();
    const data = jsondata.classes;
    for(let i = 0; i < data.length; i++){
        let item = document.createElement('li');
        item.classList.add('li', 'class-li');
        item.innerText = `name:${data[i].name}, st:${data[i].start}, ed:${data[i].end}, teacher:${data[i].teacher}`;
        listDOM.appendChild(item);
    }
    console.log(data);
}

getClasses();

document.querySelector('.class-a').href = `addClass.html?year=${params.year}&month=${params.month}&date=${params.date}`;
