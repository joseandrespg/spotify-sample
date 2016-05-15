import { SpotifyAlbumDirective } from './spotify-album/spotify-album.directive';

angular.module('frontend.components', [])
  .directive('spotifyAlbum', SpotifyAlbumDirective);
