export class OtherFunctions {
  murkupOptions(values, element) {
    element.innerHTML = values
      .map(value => `<option value="${value.id}">${value.name}</option>`)
      .join('');
  }

  onHidden(value) {
    value.classList.add('hidden');
  }

  offHidden(value) {
    value.classList.remove('hidden');
  }

  murkupCard(value, element) {
    element.innerHTML = value.map(
      item => `<div class="cat-info">
      <img width=300 class='img' src="${item.url}" alt="${item.name}" />
     <div class="desc-container">
      <h2>${item.breeds[0].name}</h2>
      <p>${item.breeds[0].description}</p>
      <p><b>Temperament: </b>${item.breeds[0].temperament}</p>
      </div>
      </div>`
    );
  }
}
