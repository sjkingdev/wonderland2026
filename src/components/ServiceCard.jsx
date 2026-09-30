export default function ServiceCard({ index, title, description, items }) {
  return (
    <div className="service-card">
      <span className="service-card__index">{index}</span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      {items?.length > 0 && (
        <ul className="service-card__list">
          {items.map((item) => (
            <li className="service-card__list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
