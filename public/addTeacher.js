const formDOM = document.querySelector('.teacher-form');
const nameDOM = document.querySelector('.text-input');

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameDOM.value;
    const res = await fetch('/api/teacher', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name
      })
    });
    console.log(res);
})