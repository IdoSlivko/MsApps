class PicsApi {
  constructor({ baseUrl, method }) {
    this._baseUrl = baseUrl;
		this._method = method;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.statusText);
    }
  }

  getImages(CATEGORY = 'nice car') {
    return fetch(`${this._baseUrl}&q=${CATEGORY}&image_type=photo&per_page=40`, {
      method: this._method,
    })
    .then(res => this._checkResponse(res))
  }
}

const key = '25540812-faf2b76d586c1787d2dd02736';

const picsApi = new PicsApi({
  baseUrl: `https://pixabay.com/api/?key=${key}`,
  method: 'GET',
});

export default picsApi;
