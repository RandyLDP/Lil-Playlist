import React from 'react';


class SongForm extends React.Component {
    constructor(){
        super()
        this.state = {
            id:'',
            song: '',
            artist: '',
            genre: '',
            rating: '',
        }
    }
    render(){
        const handleChange = e =>{
            let {name, value} = e.target;
            this.setState({[name]: value});
        }

        const handleSubmit = e => {
            e.preventDefault();
            this.props.addSong(this.state)
            this.setState({
                song: '',
                artist: '',
                genre: '',
                rating: '',

            })
        }

    return(
        <div className='SongForm'>
            <form onSubmit={handleSubmit} >

                <input name='song' 
                placeholder = 'Song'
                type='text' 
                value={this.state.song} 
                onChange={handleChange}/>

                <input name='artist' 
                placeholder = 'Artist'
                type='text' 
                value={this.state.artist} 
                onChange={handleChange}/>

                <select name='genre' value={this.state.genre} onChange={handleChange}>
                    <option value="genre">Genre:</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="Reaggaeton">Reaggaeton</option>
                    <option value="Pop">Pop</option>
                </select>

                <select name='rating' value={this.state.rating} onChange={handleChange}>
                    <option value="rating">Rating:</option>
                    <option value="1">1*</option>
                    <option value="2">2*</option>
                    <option value="3">3*</option>
                    <option value="4">4*</option>
                    <option value="5">5*</option>
                </select>

                <input type="submit" value="submit" />
                { console.log(handleSubmit) }
                { console.log(handleChange) }
                
            </form>
        </div>

    )
    }


}

export default SongForm 