const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const listDOM = document.querySelector('.class-list');

const getClasses = async () => {
    const res = await fetch(`api/${params.year}/${params.month}/${params.date}`);
    const jsondata = await res.json();
    const data = jsondata.classes;
    for(let i = 0; i < data.length; i++){
        let item = document.createElement('li');
        item.classList.add('single-class');
        item.innerHTML = `
            <div>
                <h5>Class Name</h5>
                <h4>${data[i].name}</h4>
            </div>
            <div>
                <h5>Teacher Name</h5>
                <h4>${data[i].teacher}</h4>
            </div>
            <div>
                <h5>Start Time</h5>
                <h4>${data[i].start}:00</h4>
            </div>
            <div>
                <h5>End Time</h5>
                <h4>${data[i].end}:00</h4>
            </div>
        `;
        // item.innerText = `name:${data[i].name}, st:${data[i].start}, ed:${data[i].end}, teacher:${data[i].teacher}`;
        listDOM.appendChild(item);
    }
    console.log(data);
}

getClasses();

document.querySelector('.class-a').href = `addClass.html?year=${params.year}&month=${params.month}&date=${params.date}`;
