
describe('SpotifyService Tests', function() {

  var spotifyService;

  var demoArtist = '6mdiAmATAx73kdxrNrnlao'; // Iron Maiden

  beforeEach(function() {
    spotifyService = require('../../../../app/services/spotify/spotify-service');
  });

  describe('getArtistAlbums', function() {

    it('should be a function', done => {
      expect(spotifyService.getArtistAlbums).to.be.a('function');
      done();
    });

    it('should return an object that contains items', done => {
      spotifyService.getArtistAlbums(demoArtist).then(
        data => {
          expect(data).to.be.a('object');
          expect(data.body.items).to.be.a('array');
          done();
        },
        err => {
          done(err);
        }
      );
    });

  });

  describe('getAllArtistAlbums', function() {

    it('should be a function', done => {
      expect(spotifyService.getAllArtistAlbums).to.be.a('function');
      done();
    });

    it('should return an array', done => {
      spotifyService.getAllArtistAlbums(demoArtist).then(
        data => {
          expect(data).to.be.a('array');
          done();
        },
        err => {
          done(err);
        }
      );
    });

  });

  describe('removeDuplicates', function() {

    it('should be a function', done => {
      expect(spotifyService.removeDuplicates).to.be.a('function');
      done();
    });

    it('should filter duplicated names', done => {
      var items = [
        {name: 'a - 1'},
        {name: 'a (1)'},
        {name: 'a 1'},
        {name: 'a\'1'},
        {name: 'b'}
      ];

      var filtered = spotifyService.removeDuplicates(items);
      expect(filtered).to.be.a('array');
      expect(filtered.length).to.equal(2);
      done();
    });

  });
});
