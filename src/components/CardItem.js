import React from 'react';
import {Link} from 'react-router-dom';
import './CardItem.css';

function CardItem(props) {

  const card_style= {width: '18rem'};

  return (
    <>
      <div className='card' style={card_style}>
          <div className="card-img-container">
            <img src={props.card_img_src} className='card-img-top' alt={props.card_img_alt}/>
          </div>
          <div className='card-body'>
              <span className="card-date">{props.date}</span>
              <h5 className='card-title'>
                <Link to={props.link_href}>{props.card_title}</Link>
              </h5>
              <p className='card-text'>{props.card_text}</p>
          </div>
      </div>
    </>
  );
}

export default CardItem;
