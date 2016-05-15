describe('model artist album', () => {
  beforeEach(angular.mock.module('frontend'));

  it('should be registered', inject(ArtistAlbums => {
    expect(ArtistAlbums).not.toEqual(null);
  }));

  describe('API_URL variable', () => {
    it('should exist', inject(ArtistAlbums => {
      expect(ArtistAlbums.API_URL).not.toEqual(null);
    }));
  });

  describe('findAll function', () => {
    it('should exist', inject(ArtistAlbums => {
      expect(ArtistAlbums.findAll).not.toEqual(null);
    }));

    it('should return data', inject((ArtistAlbums, $httpBackend) => {
      var mockArtist = "6mdiAmATAx73kdxrNrnlao";

      $httpBackend.when('GET',  ArtistAlbums.API_URL + '/artists/'+mockArtist+'/albums').respond(200, [{name: 'value'}, {name: 'value2'}]);
      var data;
      ArtistAlbums.findAll({artistId: '6mdiAmATAx73kdxrNrnlao'}).then(function(fetchedData) {
        data = fetchedData;
      });
      $httpBackend.flush();
      expect(data).toEqual(jasmine.any(Object));
      expect(data.data).toEqual(jasmine.any(Array));
      expect(data.data.length === 2).toBeTruthy();
      expect(data.data[0]).toEqual(jasmine.any(Object));
    }));
  });
});
