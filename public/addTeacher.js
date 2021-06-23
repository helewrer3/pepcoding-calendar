const formDOM = document.querySelector('.teacher-form');
const nameDOM = document.querySelector('.text-input');

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
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
      if(res.status == 400) throw('Not unique name');
      else window.confirm('Operation successful.');
      console.log(res);
    } catch (error) {
      window.confirm('An error occured. Try again.');
      console.log(error);
    }
})