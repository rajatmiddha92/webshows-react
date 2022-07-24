import React from 'react';

function Shows(props){
    return (
        <React.Fragment>
        
        <div className='cards'>
        <div className='card'>
         <img src={props.imgs} alt="web series image" className='card__img'/>
         <div className='card__info'>
         <span className='card__category'>{props.category}</span>
         <h3 className='card__title'>{props.sname}</h3>
         <a href={props.link} target="_blank" >
         <button>Watch now</button>
         </a>
         </div>
        </div>
        </div>
        </React.Fragment>
    );
}

export default Shows;