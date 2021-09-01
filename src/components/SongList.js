import React from 'react';
import Table from './Table';

class SongList extends React.Component {
    render(){
        const items = this.props.SongList
        const listItems = 
        items ? items.map(item =>
        <Table key={item.id} item={item}/>) : ''; 
        return (
            <span>
               <tbody>{listItems}</tbody> 
            </span>
        )
    }
}

export default SongList