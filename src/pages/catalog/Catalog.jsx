import React from 'react';
import './catalog.css';
import Welcome from '../../components/welcome/Welcome';
import { CatData } from '../../data/cat';

const Catalog = () => {
  return (
    <div className='catalog' >
        <Welcome link='catalog' main='Catalog' title='Catalog' />
        <div className="down">
          <h3>Some core practices in the department</h3>
          <div className="imgcontainer">
            {
              CatData.map(cat=>(
                <div key={cat.id} className="oneContent">
                  <img src={cat.image} alt="" />
                  <span className="title">{cat.title}</span>
                  <span className="desc">{cat.desc}</span>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Catalog