import React from 'react';
import { imageInforamtion} from '../data/Imagedata';
import './Images.css';
function ImageFunction({ itemData }) {
  return (
    <div className="image-card">
      <img src={itemData.url} className="card-img-top" alt={itemData.title} />
      <div className="card-body">
        <h2>{itemData.title}</h2>
      </div>
    </div>
  );
}

export default function Images() {
  const images = imageInforamtion.map((imageData, i) => (
    <ImageFunction key={i} itemData={imageData} />
  ));

  return (
    <>
    <hr className="border border-danger border-2 opacity-50" />
    <h2 className='p-2 text-center ' >Images</h2>
    <hr className="border border-danger border-2 opacity-50" />
    <div className='image-grid'>
      {images}
    </div>
    </>
  );
}
