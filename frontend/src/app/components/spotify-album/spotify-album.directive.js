export function SpotifyAlbumDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/spotify-album/spotify-album.html',
    scope: {
        album: '='
    }
  };

  return directive;
}
