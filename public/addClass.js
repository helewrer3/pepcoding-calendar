const formDOM = document.querySelector('.class-form');
const nameDOM = document.querySelector('.text-input');
const teacherDOM = document.querySelector('.teacher-sel');
const stDOM = document.querySelector('.start-sel');
const edDOM = document.querySelector('.end-sel');
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const init = async () => {
    const res = await fetch('/api/teacher');
    const jsondata = await res.json();
    const data = jsondata.names;
    for(let i = 0; i < data.length; i++){
        let teacher = document.createElement('option');
        teacher.value = data[i].id, teacher.text = data[i].name;
        teacherDOM.add(teacher);
    }
    for(let i = 0; i < 24; i++){
        let time = document.createElement('option');
        time.value = i, time.text = i;
        stDOM.add(time);
    }
}

init();

stDOM.addEventListener('change', () => {
    edDOM.innerHTML = '';
    for(let i = stDOM.value; i < 24; i++){
        let time = document.createElement('option');
        time.value = i, time.text = i;
        edDOM.add(time);
    }
})

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newClass = {
        teacher: teacherDOM.value,
        name: nameDOM.value,
        start: stDOM.value,
        end: edDOM.value,
        date: params.date,
        month: params.month,
        year: params.year,
    };
    const res = await fetch('/api/class', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newClass)
    });
    console.log(newClass);
})