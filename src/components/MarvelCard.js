import React from 'react';
import './MarvelCard.css';
//<img src={hero.thumb[0] ? `${hero.thumbnail[0].path}.${hero.thumbnail[0].extension}` : ''} alt='' title='{hero.title}' />
const MarvelCard = ({ hero }) => {
    return (
        <div key={hero.id} className="card-item">
            <div className='card-img' >
                <img src={hero.thumbnail ? `${hero.thumbnail.path}.${hero.thumbnail.extension}` : ''} alt={hero.title} title={hero.title} />
            </div>
            <div className='card-title'>
                <p>{hero.name}</p>
            </div>           
        </div>
    )
}

export default MarvelCard;