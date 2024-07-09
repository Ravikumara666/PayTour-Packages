import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../data/Plandata';
import { Link } from 'react-router-dom';
import './Plans.css';

export default function Plans() {
  let items = data.map((itemData, i) => (
    <Pack key={i} itemData={itemData} />
  ));

  return (
    <div className="plans-container">
      {items}
    </div>
  );
}

function Pack({ itemData }) {
  return (
    <div className="plan-card ">
      <div className="container text-center plan-container">
        <hr className="border border-danger border-2 opacity-50" />
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-12 border-end plan-image-container">
            <figure className="figure">
              <img src={itemData.image_url} className="figure-img img-fluid rounded plan-image" alt="..." />
              <figcaption className="figure-caption text-center">{itemData.title}</figcaption>
            </figure>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 border-end">
            <div className="d-flex flex-column h-100 justify-content-center plan-details">
              <div>
                <span className='float-start mb-3 plan-title'>{itemData.title}</span>
                <span className="float-end">{itemData.subtitle}</span>
              </div>
              <hr />
              <div className="plan-description" style={{ textAlign: 'left' }}>{itemData.description}</div>
              <hr />
              <div className="hstack gap-3">
                <span className='float-start p-2' style={{ fontSize: '16px', color:'#d6e6fa' }}>Customized Holidays</span>
                <span className='p-2 ms-auto'>Tour Type</span>
                <select className="form-control p-2 plan-select" style={{ width: 'auto', cursor: 'pointer' }}>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
              <div className="d-flex justify-content-between mt-2 plan-features">
                {itemData.optional_features.map((feature, index) => (
                  <span key={index} style={{ fontWeight: 'bold' }}>{feature}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="d-flex flex-column h-100 justify-content-center plan-price">
              <h3>Rs. {itemData.price}</h3>
              <div>Starting price per adult</div>
              {itemData.emi && <div>EMI starting from Rs. {itemData.emi} per month</div>}
              <div>Want us to call you?</div>
              <div className='mx-5 mt-4'>
                <button className="ui-btn plan-button">
                  <span>
                    <Link className='text-light' to={`/plan/${itemData.id}`}>{itemData.price}/-</Link>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-danger border-2 opacity-50" />
      </div>
    </div>
  );
}