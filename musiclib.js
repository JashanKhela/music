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


var printPlaylists = function () {

  for( list in library.playlists){
    var playlist = library.playlists[list]
  var id = playlist['id']
  var nameOfplaylist = playlist['name']
  var numberOftracks = playlist['tracks'].length
  console.log(id + ": " +  nameOfplaylist + "- " + numberOftracks + " tracks ")
 }
}


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



var addTrackToPlaylist = function (trackId, playlistId) {
  var playlistRecievingTrack = library.playlists[playlistId]

  playlistRecievingTrack['tracks'].push(trackId)
  console.log(playlistRecievingTrack['tracks'])

}
addTrackToPlaylist('t03' , 'p01')




var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}




var addTrack = function (name, artist, album) {



  var uniqueID = uid()
  var newTrack = {
    id: uniqueID,
    name: name,
    artist: artist,
    album: album
  }
  library.tracks[uniqueID] = newTrack
  console.log(library.tracks)
  //console.log(library.tracks.length)
}

addTrack("Yes Indeed", "Drake" , "Love is Hard") ;


// adds a playlist to the library

var addPlaylist = function (name) {

  var uniqueID = uid()
  var newPlaylist = {
    id: uniqueID,
    name: name,
    tracks : []

  }
  library.playlists[uniqueID] = newPlaylist
  console.log(library.playlists)

}
addPlaylist('Summer Jams')

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}