const axios = require('axios');

export default class fetchByName {
  constructor() {
    this.page = 1;
    this.value = '';
    this.totalHits = null;
  }

  async fetchDataFromPixabay() {
    const BASIC_URL = 'https://pixabay.com/api/';
    const URL_KEY = '27728656-72b5f578fbb2bf55140009f4e';
    const queryString = `q=${this.value}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;

    const response = await axios.get(`${BASIC_URL}?key=${URL_KEY}&${queryString}`);

    if (!response.data.total) {
      throw new Error('error');
    }
    return response;
  }

  queryValue(newValue) {
    this.value = newValue;
  }

  increasePage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  setTotalHits(hits) {
    this.totalHits = hits;
  }

  lastTotalHits() {
    this.totalHits -= 40;
  }
}