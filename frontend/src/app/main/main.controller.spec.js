describe('controllers', () => {
  let vm;
  let scope;
  let deferred;

  let albums = [
    {
      name: 'A Matter Of Life And Death',
      images: [
        { url: 'https://i.scdn.co/image/ffb0d66e40aec0bc35d1cf10ad329777ee5f6724' }
      ],
      external_urls : {
        spotify: 'https://open.spotify.com/album/5qLvOn0QzAWOqonBc05Ord'
      }
    },
    {
      name: 'A Matter Of Life And Death',
      images: [
        { url: 'https://i.scdn.co/image/ffb0d66e40aec0bc35d1cf10ad329777ee5f6724' }
      ],
      external_urls : {
        spotify: 'https://open.spotify.com/album/5qLvOn0QzAWOqonBc05Ord'
      }
    }
  ];

  beforeEach(angular.mock.module('frontend'));

  beforeEach(inject(($rootScope, $controller, _$q_, ArtistAlbums) => {
    scope = $rootScope.$new();
    deferred = _$q_.defer();

    spyOn(ArtistAlbums, 'findAll').and.returnValue(deferred.promise);

    vm = $controller('MainController', {
      $scope: scope,
      ArtistAlbums: ArtistAlbums
    });
  }));

  it('should have a array of albums', () => {
    deferred.resolve({data: albums});

    scope.$apply();

    expect(vm.albums).toEqual(jasmine.any(Array));
    expect(vm.albums.length).toEqual(2);
  });
});
