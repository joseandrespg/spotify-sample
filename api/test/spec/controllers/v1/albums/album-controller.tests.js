var _ = require('lodash');

describe('AlbumController Tests', function() {

  var albumController;
  var req;
  var res;

  var demoArtist = '6mdiAmATAx73kdxrNrnlao'; // Iron Maiden

  beforeEach(function() {
    req = { };
    res = {
      status: function (code) {
        return this;
      },
      json: function (obj) {
        return obj;
      }
    };

    sinon.spy(res, "status");
    sinon.spy(res, "json");

    albumController = require('../../../../../app/controllers/v1/albums/album-controller');
  });

  describe('get()', function() {
    it('should be a function', done => {
      expect(albumController.get).to.be.a('function');
      done();
    });

    it('should call res.status() one time', done => {
      req.params = {artistId: demoArtist};

      albumController.get(req, res, (err) => {
        expect(err).to.equal(undefined);
        expect(res.status.callCount).to.equal(1);
        done();
      });
    });

    it('should call res.status() with 200', done => {
      req.params = {artistId: demoArtist};

      albumController.get(req, res, (err) => {
        expect(err).to.equal(undefined);
        expect(res.status.calledWith(200)).to.equal(true);
        done();
      });
    });

    it('should return an array', done => {
      req.params = {artistId: demoArtist};

      albumController.get(req, res, (err) => {
        expect(err).to.equal(undefined);
        expect(res.json.args[0]).to.be.a('array');
        done();
      });
    });

    it('should return an array without duplicated names', done => {
      req.params = {artistId: demoArtist};

      albumController.get(req, res, (err) => {
        expect(err).to.equal(undefined);
        var SpotifyService = require('../../../../../app/services/spotify/spotify-service');
        var withoutDuplicates = data = SpotifyService.removeDuplicates(res.json.args[0]);
        
        expect(res.json.args[0].length).to.equal(withoutDuplicates.length);
        done();
      });
    });

  });
});
