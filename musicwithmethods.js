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
             },

 printPlaylists: function () {

          for( list in this.playlists){
        var playlist = this.playlists[list]
          var id = playlist['id']
         var nameOfplaylist = playlist['name']
          var numberOftracks = playlist['tracks'].length
          console.log(id + ": " +  nameOfplaylist + "- " + numberOftracks + " tracks ")
 }
}

printTracks: function () {

  for (track in this.tracks) {
    var listOftracks = this.tracks[track]
    var trackID = listOftracks['id']
    var nameOftrack = listOftracks['name']
    var auhtorOftrack = listOftracks['artist']
    var album = listOftracks['album']
    console.log(trackID + ': ' + nameOftrack + ' by ' + auhtorOftrack + "(" + album + ")" )


  }
}

printPlaylist : function (playlistId) {

  for(playlist in this.playlists) {
    var numberOfplaylists = this.playlists[playlist]
    var playlistId = numberOfplaylists['id']
    var nameOfplaylist = numberOfplaylists['name']
    var numberOftracks = numberOfplaylists['tracks'].length
    var tracks = numberOfplaylists['tracks']
    console.log(playlistId + ": " + nameOfplaylist + "- " + numberOftracks)
      for ( track in tracks ) {
       var nameToprint = tracks[track]
       var trackToprint = this.tracks[nameToprint]
       console.log(trackToprint['name'] + " by " + trackToprint['artist'] +  " on the album - " + trackToprint['album'])



      }
  }

}

 addTrackToPlaylist : function (trackId, playlistId) {
  var playlistRecievingTrack = this.playlists[playlistId]

  playlistRecievingTrack['tracks'].push(trackId)
  console.log(playlistRecievingTrack['tracks'])

}
addTrack : function (name, artist, album) {



  var uniqueID = uid()
  var newTrack = {
    id: uniqueID,
    name: name,
    artist: artist,
    album: album
  }
  this.tracks[uniqueID] = newTrack
  console.log(this.tracks)
  //console.log(library.tracks.length)
}


addPlaylist : function (name) {

  var uniqueID = uid()
  var newPlaylist = {
    id: uniqueID,
    name: name,
    tracks : []

  }
  library.playlists[uniqueID] = newPlaylist
  console.log(this.playlists)

}


















}

library.printPlaylists()
