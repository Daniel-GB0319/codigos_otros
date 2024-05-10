const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se agrego el punto antes de 'name' y 'blog' para seleccionar la clase 'name' y 'blog'
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');

//  Se Agrego la palabra clave 'async' para hacer la función asíncrona
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // Se agrego esta línea para convertir la respuesta en JSON
  const data = await response.json();
  console.log(data);
  // Se reemplazo las comillas simples por comillas invertidas para permitir la interpolación de cadenas
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Se cambio 'n' por '$n' para referirse al elemento correcto
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
