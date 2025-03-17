import React, { useState, useEffect, useRef } from 'react';
import { iconMap } from "../assets";
import "./Construction.css";

const Construction = () => {
  return (
    <div className="constructionPage">
      <div className="constructionText">
        Under Construction...
      </div>
      <img className="forklift" data-name="forklift" src={iconMap.get('forklift')} alt="Forklift Icon"></img>
    </div>
  );
};

export default Construction;