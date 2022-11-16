import React, { useState, useEffect } from 'react'
import clock from "../assets/images/icon-clock.svg"
import view from "../assets/images/icon-view.svg"

export function NFTCard(props) {
  const [nftCard, setNftCard] = useState(null);

  async function fetchNftData() {
    const response = await fetch('https://raw.githubusercontent.com/Alffonti/nft-preview-card-component/main/public/data.json');
    setNftCard(await response.json());
  }

  useEffect(() => {
    fetchNftData();
  }, []);

  if (!nftCard) {
    return "loading...";
  }

  return (
    <div className="nft-card">
      <div className='nft-card__image-container'>
        <img src={nftCard.image} alt="" />
        <div class="overlay">
          <img class="icon" src={view} alt="" />
        </div>
      </div>
      <h1 className="nft-card__title"><a href='#'>{nftCard.title}</a></h1>
      <p className="nft-card__description">{nftCard.description}</p>
      <div className="nft-card__details">
        <div className="detail price">
          <img src={nftCard.price.logo} alt="" />
          <span className="value">{nftCard.price.value}{nftCard.price.abbreviation}</span>
        </div>
        <div className="detail deadline">
          <img src={clock} alt="" />
          <p>{nftCard.deadline} left</p>
        </div>
      </div>
      <div className="nft-card__author-info">
        <img src={nftCard.author.avatar} alt="" />
        <p>Creation of <a href='#' className="author-name">{nftCard.author.name}</a></p>
      </div>
    </div >
  );
}