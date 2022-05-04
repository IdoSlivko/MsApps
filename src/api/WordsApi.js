class WordsApi {
  constructor({ baseUrl, method, headers }) {
    this._baseUrl = baseUrl;
		// this._method = method;
		// this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.statusText);
    }
  }
  // original
  // getDefinitions(word) {
  //   return fetch(`${this._baseUrl}${word}/definitions`, {
  //     method: this._method,
  //     headers: this._headers,
  //   })
  //   .then(res => this._checkResponse(res))
  // }

  // MsApp
  getDefinitions(CATEGORY) {
    return fetch(`${this._baseUrl}&q=${CATEGORY}&image_type=photo`, {
      method: this._method,
      // headers: this._headers,
    })
    .then(res => this._checkResponse(res))
  }

}
// original
// const wordsApi = new WordsApi({
//   baseUrl: "https://wordsapiv1.p.rapidapi.com/words/",
//   method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'be29ed9d00msh7ec714bfdfb08eap182765jsnc74e3df0f5f5'
// 	}
// });

// MsApp
const key = '25540812-faf2b76d586c1787d2dd02736';

const wordsApi = new WordsApi({
  // baseUrl: `https://pixabay.com/api/?key=${key}&q=${CATEGORY}&image_type=photo`,
  baseUrl: `https://pixabay.com/api/?key=${key}`,
  method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
	// 	'X-RapidAPI-Key': 'be29ed9d00msh7ec714bfdfb08eap182765jsnc74e3df0f5f5'
	// }
});

export default wordsApi;


// baseUrl: "https://wordsapiv1.p.mashape.com/words/{word}",
// baseUrl: "https://wordsapiv1.p.mashape.com/words/",

// https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}