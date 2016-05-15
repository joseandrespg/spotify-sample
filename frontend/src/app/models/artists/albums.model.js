export class ArtistAlbums {
  constructor ($http, API_URL) {
    'ngInject';

    this.$http = $http;
    this.API_URL = API_URL;
  }

  findAll(params) {
    return this.$http({method: 'GET', url: this.API_URL + '/artists/' + params.artistId + '/albums'});
  }
}
