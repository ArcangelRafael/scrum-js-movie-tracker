document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-resultados');
  
    const resultadosSimulados = [
      {
        titulo: 'Inception',
        descripcion: 'Un ladrón que roba secretos a través de los sueños.',
        imagen: 'https://via.placeholder.com/300x400?text=Inception'
      },
      {
        titulo: 'Interstellar',
        descripcion: 'Un viaje interestelar para salvar la humanidad.',
        imagen: 'https://via.placeholder.com/300x400?text=Interstellar'
      },
      {
        titulo: 'The Matrix',
        descripcion: 'Descubre la verdad sobre la realidad.',
        imagen: 'https://via.placeholder.com/300x400?text=Matrix'
      }
    ];
  
    resultadosSimulados.forEach(pelicula => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'col-md-4';
  
      tarjeta.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
          <img src="${pelicula.imagen}" class="card-img-top rounded-top" alt="${pelicula.titulo}">
          <div class="card-body bg-light">
            <h5 class="card-title text-primary">${pelicula.titulo}</h5>
            <p class="card-text text-muted">${pelicula.descripcion}</p>
          </div>
          <div class="card-footer bg-white border-0">
            <button class="btn btn-outline-primary w-100">Ver más</button>
          </div>
        </div>
      `;
  
      contenedor.appendChild(tarjeta);
    });
  })