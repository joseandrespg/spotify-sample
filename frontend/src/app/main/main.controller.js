export class MainController {

  constructor (ArtistAlbums, toastr) {
    'ngInject';

    this.toastr = toastr;
    this.ArtistAlbums = ArtistAlbums;
    this.artistId = '6mdiAmATAx73kdxrNrnlao';
    this.albums = [];

    this.showAlbums();
  }

  showAlbums() {
    this.ArtistAlbums.findAll({artistId: this.artistId}).then(
      (response) => {
        this.albums = response.data;
      },
      (response) => {
        this.toastr.error('Connection error' +  response.data.message);
      }
    )
  }
}
