import React from 'react';
import {Card} from '../card/card.component';
import './card-list.style.css';


export const CardList = props => (
     //This props is any property that is added on the app.js in the tag Cardlist, ex: <CardList 'className'/>
    //props.children is everything that is in between the tags of the component ex: <CardList>this is children</CardList>
    //return (<div className='card-lis'>{props.children}</div>) 
    <div className='card-list'>
        {
            props.monsters.map(monster => (<Card key={monster.id} monster={monster}/>))
        }
    </div>
);


   