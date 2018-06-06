var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

  for( list in library.playlists){
    var playlist = library.playlists[list]
  var id = playlist['id']
  var nameOfplaylist = playlist['name']
  var numberOftracks = playlist['tracks'].length
  console.log(id + ": " +  nameOfplaylist + "- " + numberOftracks + " tracks ")
 }
}

//printPlaylists()
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  for (track in library.tracks) {
    var listOftracks = library.tracks[track]
    var trackID = listOftracks['id']
    var nameOftrack = listOftracks['name']
    var auhtorOftrack = listOftracks['artist']
    var album = listOftracks['album']
    console.log(trackID + ': ' + nameOftrack + ' by ' + auhtorOftrack + "(" + album + ")" )

  }
}
//printTracks()

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  for(playlist in library.playlists) {
    var numberOfplaylists = library.playlists[playlist]
    var playlistId = numberOfplaylists['id']
    var nameOfplaylist = numberOfplaylists['name']
    var numberOftracks = numberOfplaylists['tracks'].length
    var tracks = numberOfplaylists['tracks']
    console.log(playlistId + ": " + nameOfplaylist + "- " + numberOftracks)
      for ( track in tracks ) {
       var nameToprint = tracks[track]
       var trackToprint = library.tracks[nameToprint]
       console.log(trackToprint['name'] + " by " + trackToprint['artist'] +  " on the album - " + trackToprint['album'])



      }
  }

}
 printPlaylist()

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}