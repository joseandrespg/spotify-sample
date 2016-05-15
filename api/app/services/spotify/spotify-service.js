var _ = require('lodash');

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

function SpotifyService() {
}

/**
 * Paginate artist albums
 *
 * @param artistId
 * @param options
 * @returns {Promise}
 */
function getArtistAlbums(artistId, options) {
  var defaults = {
    limit: 50,
    offset: 0
  };

  options = _.merge(defaults, options);

  return new Promise((resolve, reject) => {
    spotifyApi.getArtistAlbums(artistId, options)
      .then(
        data => {
          resolve(data);
        },
        err => {
          reject(err);
        }
      );
  });
}

/**
 * Get all artist albums
 *
 * @param artistId
 * @returns {Promise}
 */
function getAllArtistAlbums(artistId) {
  var SpotifyService = this;

  var result = [];
  var limit = 50;
  var offset = 0;
  var total = null;

  return new Promise((resolve, reject) => {
    function loadAllAlbums() {
      // Iron Maiden artistId: 6mdiAmATAx73kdxrNrnlao
      SpotifyService.getArtistAlbums(artistId, {limit: limit, offset:offset}).then(
        data => {
          total = data.body.total;
          result = result.concat(data.body.items);

          if (offset < total) { // test if there are more to retrieve
            offset += limit;
            loadAllAlbums();
          } else {
            resolve(result);
          }
        },
        err => {
          reject(err);
        }
      )
    }

    loadAllAlbums();
  });
}

/**
 * Remove duplicate names
 * 
 * @param items
 * @returns {Array|*}
 */
function removeDuplicates (items){
  function normalize(string) {
    return string.toLowerCase().replace(/[^a-z0-9]/gi, '');
  }

  // remove duplicated names
  items = _.uniqWith(items || [], (a, b) => {
    var string1 = normalize(a.name);
    var string2 = normalize(b.name);

    return (string1.includes(string2) || string2.includes(string1));
  });
  
  return items;
}

SpotifyService.prototype = {
  getArtistAlbums,
  getAllArtistAlbums,
  removeDuplicates
};

var spotifyService = new SpotifyService();

module.exports = spotifyService;
