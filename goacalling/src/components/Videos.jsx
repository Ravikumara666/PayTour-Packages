import React from 'react';
import { videoInformation } from '../data/videos'; // Assuming this imports your video data correctly
import './Images.css';

function VideoFunction({ itemData }) {
  return (<>


    <div className="image-card" >
      <video controls className="card-img-top">
        <source src={itemData.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-body">
        <h2>{itemData.title}</h2>
      </div>
    </div>
    </>
  );
}

export default function Videos() {
  const videos = videoInformation.map((videoData, index) => (
    <VideoFunction key={index} itemData={videoData} />
  ));

  return (

    <div className="video-gallery">
      <hr className="border border-danger border-2 opacity-50" />
    <h1 className='p-2 text-center ' >Videos</h1>
    <hr className="border border-danger border-2 opacity-50" />
    
      {videos}
    </div>
  );
}
