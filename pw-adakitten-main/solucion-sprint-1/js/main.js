'use strict';

/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');

//Objetos con cada gatito
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'Raza gatito',
};
const kittenData_2 = {
  image:
    'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Fiona',
  desc: 'Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
const kittenData_3 = {
  image:
    'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Cielo',
  desc: 'Ruiseño, juguetón, le  estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

let kittenDataList = [];

//Funciones
function renderKitten(kittenData) {
  console.log(kittenData);
  const kitten = document.createElement('li');
  kitten.classList.add('card');
  listElement.appendChild(kitten);
  const kittenArticle = document.createElement('article');
  kitten.appendChild(kittenArticle);
  const img = document.createElement('img');
  img.classList.add('card_img');
  img.src = kittenData.image;
  img.alt = 'gatito';
  kittenArticle.appendChild(img);
  const firsth3 = document.createElement('h3');
  kittenArticle.appendChild(firsth3);
  firsth3.classList.add('card_title');
  const textTitle = document.createTextNode(kittenData.name);
  firsth3.appendChild(textTitle);
  const secondh3 = document.createElement('h3');
  kittenArticle.appendChild(secondh3);
  firsth3.classList.add('card_race');
  const raceTitle = document.createTextNode(kittenData.race);
  secondh3.appendChild(raceTitle);
  const paragraph = document.createElement('p');
  kittenArticle.appendChild(paragraph);
  kittenArticle.classList.add('card_description');
  const textParagraph = document.createTextNode(kittenData.desc);
  paragraph.appendChild(textParagraph);
}
renderKitten();
// function renderKitten(kittenData) {
//   const kitten = `<li class="card">
//     <article>
//       <img
//         class="card_img"
//         src=${kittenData.image}
//         alt="gatito"
//       />
//       <h3 class="card_title">${kittenData.name}</h3>
//       <h3 class="card_race">${kittenData.race}</h3>
//       <p class="card_description">
//       ${kittenData.desc}
//       </p>
//     </article>
//     </li>`;
//   return kitten;
// }

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
//Adicionar nuevo gatito
// function addNewKitten(event) {
//   event.preventDefault();
//   const valueDesc = inputDesc.value;
//   const valuePhoto = inputPhoto.value;
//   const valueName = inputName.value;
//   if (valueDesc === '' && valuePhoto === '' && valueName === '') {
//     labelMesageError.innerHTML = 'Debe rellenar todos los valores';
//   } else {
//     if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
//       labelMesageError.innerHTML = '';
//     }
//   }
// }
//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
}

//Filtrar por descripción
function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    if (kittenItem.desc.includes(descrSearchText)) {
      listElement.innerHTML += renderKitten(kittenItem);
    }
  }
}

//Mostrar el litado de gatitos en ell HTML

//2.--------------- Agregar un nuevo gatito al listado

function cleanValues(inputDesc, inputPhoto, inputName, inputRace) {
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  inputRace.value = '';
}
function mesageError() {
  labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
}

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' && valuePhoto === '' && valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
      labelMesageError.innerHTML = '';
    }
  }
  const newKittenDataObject =
    //completa el código
    {
      image: valuePhoto,
      name: valueName,
      desc: valueDesc,
      race: valueRace,
    };

  kittenDataList.push(newKittenDataObject);
  renderKittenList(kittenDataList);
  cleanValues(inputDesc, inputPhoto, inputName, inputRace);
  mesageError();
}

function filterKitten(event) {
  event.preventDefault();
  //Completa el código:
  //Haz un filter anidado sobre el listado de gatitos
  const searchDesc = input_search_desc.value;
  const searchRace = input_search_race.value;
  const kittenListFiltered = kittenDataList

    .filter((cat) => cat.desc.toLowerCase().includes(searchDesc.toLowerCase()))
    .filter((cat) => cat.race.toLowerCase().includes(searchRace.toLowerCase()));
  //Vuelve a pintar el listado de gatitos filtrados en el HTML.
  renderKittenList(kittenListFiltered);
}

//Eventos
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);
searchButton.addEventListener('click', filterKitten);
//input_search_desc.addEventListener('keyup', filterKittenDesc);
buttonAdd.addEventListener('click', addNewKitten);
buttonCancelForm.addEventListener('click', cancelNewKitten);

//----------------Peticiones al servidor---------------
const GITHUB_USER = 'pradocarretero';
const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;
const kittenListStored = JSON.parse(localStorage.getItem('kittensList'));

if (kittenListStored !== null) {
  renderKittenList(kittenListStored);
  console.log('probando el if');
  console.log(kittenListStored);
} else {
  fetch(SERVER_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      kittenDataList = data.results.map((cat) => {
        const newCat = {
          image: cat.url,
          name: cat.name,
          desc: cat.desc,
          race: cat.race,
        };
        return newCat;
      });
      console.log(kittenDataList);
      renderKittenList(kittenDataList);
      localStorage.setItem('kittensList', JSON.stringify(kittenDataList));
    })
    .catch((error) => {
      console.error(error);
    });
  console.log('probando else');
}

//------------------guardar en local
