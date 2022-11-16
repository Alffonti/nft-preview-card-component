export function NFTCard(props) {
  return (
    <div className="nft-card">
      <img className="nft-card__image" alt="" />
      <h1 className="nft-card__title">{props.title}</h1>
      <p className="nft-card__description">{props.description}</p>
      <span className="nft-card__price">{props.price}</span>
      <span className="nft-card__deadline">{props.deadline}</span>
      <span className="nft-card__creator-avatar">{props.avatar}</span>
      <span className="nft-card__creator-name">{props.author}</span>
    </div>
  );
}