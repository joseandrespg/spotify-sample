var SpotifyService = require('../../../services/spotify/spotify-service');

function AlbumController() {
}

function get(req, res, next) {
  SpotifyService.getAllArtistAlbums(req.params.artistId).then(
    data => {
      data = SpotifyService.removeDuplicates(data);
      res.status(200).json(data);
      return next();
    },
    err => {
      return next(err);
    }
  );
}

AlbumController.prototype = {
  get: get
};

var albumController = new AlbumController();

module.exports = albumController;
