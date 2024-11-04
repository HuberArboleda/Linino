
const button = document.getElementById('myButton');
let state = false; // Estado inicial: false (apagado)

button.addEventListener('click', () => {
    state = !state;
    const url = state ? 'http://192.168.1.100/arduino/digital/13/1' : 'http://192.168.1.100/arduino/digital/13/0';
    const method = 'POST'; // O 'GET' si lo prefieres

    fetch(url, {
        method: method,
        // Aquí puedes agregar headers si es necesario
        // headers: {
        //     'Content-Type': 'application/json'
        // }
        // Si necesitas enviar datos en el cuerpo de la petición:
        // body: JSON.stringify({ data: 'algún dato' })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    button.classList.toggle('active');
    button.classList.toggle('inactive');
    button.textContent = state ? 'Encender' : 'Apagar';
});