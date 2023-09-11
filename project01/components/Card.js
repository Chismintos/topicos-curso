

export default function Card({ image, title, description }) {
    
  const card = document.createElement('div');
    card.classList = 'card';
  
    // Agregamos una imagen si se proporciona
    if (image.uri) {
      const cardImage = document.createElement('img');
      cardImage.src = image.uri;
      cardImage.alt = image.description;
      cardImage.classList = 'card-image';
      card.appendChild(cardImage);
    }
  
    //div donde se agregara el contenido aparte de la imagen 
    const cardContent = document.createElement('div');
    //Se asigna una clase   
    cardContent.classList = 'card-content';
  
    //Se crea y  se remplaza el contenido de texto con la descripcion
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    
    //Se crea y se remplaza el contenido de texto con la descripcion
    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
  

    // Se agrega todo lo anterior al  
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    card.appendChild(cardContent);
  
    // Agregamos un botón en la esquina inferior derecha
    const closeButton = document.createElement('button');
    closeButton.classList = 'close-button';
    closeButton.textContent = 'Mas..';
    card.appendChild(closeButton);
  
    return card;
  }
  