import React from 'react';
import { iconMap } from "../assets";
import './SimplifiedPhoto.css';

function SimplifiedPhoto() {
  return (
    <div className="simplifiedPhotoContainer">
      <img className="simplifiedPhoto" src={iconMap.get('mePhoto')} alt="Photo of me"></img>
      <img className="tape1" src={iconMap.get('tape')} alt="Tape"></img>
      <img className="tape2" src={iconMap.get('tape')} alt="Tape"></img>
    </div>
  );
}

export default SimplifiedPhoto; 