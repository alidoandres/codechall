document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value
        const lastN = document.getElementById("apellido").value
        const born = document.getElementById("nacimiento").value
        
        const datos = {
            name: name,
            lastN: lastN,
            born: born
        }
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
})