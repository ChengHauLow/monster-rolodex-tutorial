import React from 'react';
import Card from '../card/Card';
import './CardList.css';

const CardList = ({monsters}) => {
    return (
        <div className="card-list">
            {monsters.length !== 0 ? monsters.map(monster =>(
            <Card key={monster.id} monster={monster}/>
          )) : (<h1>No Monster</h1>)}
        </div>
    )
}

export default CardList
