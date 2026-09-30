export default function WorkCard({ image, tag, title, description }) {
  return (
    <div className="work-card">
      <div className="work-card__image-wrap">
        {image && <img className="work-card__image" src={image} alt={title} />}
      </div>
      <div className="work-card__body">
        {tag && <span className="work-card__tag">{tag}</span>}
        <h3 className="work-card__title">{title}</h3>
        <p className="work-card__desc">{description}</p>
      </div>
    </div>
  );
}
