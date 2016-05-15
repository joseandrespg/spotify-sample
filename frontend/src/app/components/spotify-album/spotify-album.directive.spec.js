describe('directive spotify-album', function() {
  let scope;
  let element;
  let album = {
    name: 'A Matter Of Life And Death',
    images: [
      { url: 'https://i.scdn.co/image/ffb0d66e40aec0bc35d1cf10ad329777ee5f6724' }
    ],
    external_urls : {
      spotify: 'https://open.spotify.com/album/5qLvOn0QzAWOqonBc05Ord'
    }
  };

  beforeEach(angular.mock.module('frontend'));

  beforeEach(inject(($compile, $rootScope) => {
    $rootScope.album = album;

    element = angular.element(`
      <spotify-album album="album"></spotify-album>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    scope = element.isolateScope();
  }));

  it('should be compiled and show info', () => {
    expect(element.html()).not.toEqual(null);
    expect(element.html()).toContain(album.name);
    expect(element.html()).toContain(album.images[0].url);
    expect(element.html()).toContain(album.external_urls.spotify);
  });

  it('should have isolate scope object with album data', () => {
    expect(scope).toEqual(jasmine.any(Object));
    expect(scope.album).toEqual(album);
  });
});
