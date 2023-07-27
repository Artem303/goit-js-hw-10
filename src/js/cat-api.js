const API_KEY =
  'live_e3fj5ffy3NLjNSnI1MYdfztWEew7j5YC5iWqixcNlGzhBUsHf9qLb3HEa8B7X70C';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};

export class BreedsAPI {
  #BASE_URL = 'https://api.thecatapi.com/v1/';

  fetchObjects() {
    const url = `${this.#BASE_URL}breeds`;

    return fetch(url, options)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        return resp.json();
      })
      .catch(console.warn);
  }

  fetchCatById(id) {
    const url = `${this.#BASE_URL}images/search?breed_ids=${id}`;

    return fetch(url, options)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.status);
        }

        return resp.json();
      })
      .catch(console.warn);
  }
}
