import React from 'react';
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends React.Component {
  
    constructor() {
      super()
      this.state = 
      {
        songs: [{
            id: 1,
            song: 'Pepas',
            artist: 'Farruko',
            genre: 'Reaggaeton',
            rating: 5
        }]
      }}
  
    render() {

        const addSong = song => {
            const item = {
                id: this.state.songs.length + 1,
                song: song.song,
                artist: song.artist,
                genre: song.genre,
                rating: song.rating
            }
            this.setState({
                songs: this.state.songs.concat(item)
            })
        }

        const sortBySong = () => {
          const currentState = this.state.songs;
          this.setState(currentState.sort((a, b) => a.song.localeCompare(b.song)));
        };
        const sortByArtist = () => {
          const currentState = this.state.songs;
          this.setState(
            currentState.sort((a, b) => a.artist.localeCompare(b.artist))
          );
        };
        const sortByGenre = () => {
          const currentState = this.state.songs;
          this.setState(
            currentState.sort((a, b) => a.genre.localeCompare(b.genre))
          );
        };
        const sortByRating = () => {
          const currentState = this.state.songs;
          this.setState(
            currentState.sort((b, a) => a.rating.localeCompare(b.rating))
          );
        };
      return (
        <div>
          <SongForm addSong={addSong} />
        
         <table style={{ width: "100%" }} className="song-header">
           <thead >
             <tr>
               <th className="song-row__item">
                 <button onClick={sortBySong}>Song</button>
               </th>
               <th className="song-row__item">
                 <button onClick={sortByArtist}>Artist</button>
               </th>
               <th className="song-row__item">
                 <button onClick={sortByGenre}>Genre</button>
               </th>
               <th className="song-row__item">
                 <button onClick={sortByRating}>Rating</button>
               </th>
             </tr>
           </thead>
           <SongList songList={this.state.songs} />
         </table>
       </div>
      );
    }
  }
  
  export default SongOverview;