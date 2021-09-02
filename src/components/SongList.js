import React from 'react';
import Table from './Table';

class SongList extends React.Component {
    render(){
        const items = this.props.songlist
        const listItems =
        items ? items.map(item =>
        <Table key={item.id} item={item}/>) : ''; 
         {console.log(items)}
        return (
            <tbody>{listItems}</tbody>
        )
    }
   
}

export default SongList