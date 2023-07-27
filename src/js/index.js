import { BreedsAPI } from './cat-api';
import { OtherFunctions } from './functions';

const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const containerEl = document.querySelector('.cat-info');

const breedsInstance = new BreedsAPI();
const otherFunctions = new OtherFunctions();

breedsInstance
  .fetchObjects()
  .then(r => {
    otherFunctions.onHidden(loaderEl);
    otherFunctions.murkupOptions(r, selectEl);
    otherFunctions.offHidden(selectEl);
  })
  .catch(console.warn);

selectEl.addEventListener('change', handlCreateCard);

function handlCreateCard(evt) {
  let idCat = evt.target.value;
  otherFunctions.onHidden(containerEl);
  otherFunctions.offHidden(loaderEl);

  breedsInstance
    .fetchCatById(idCat)
    .then(resp => {
      const arr = [...resp];
      otherFunctions.murkupCard(arr, containerEl);
      otherFunctions.onHidden(loaderEl);
      otherFunctions.offHidden(containerEl);
    })
    .catch(console.log);
}
