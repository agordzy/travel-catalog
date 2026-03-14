import Card from '../Card/Card';

function CardList({ travels }) {
  if (travels.length === 0) {
    return <p className="no-results">Нет путешествий по выбранному фильтру</p>;
  }

  return (
    <div className="card-list">
      {travels.map((travel) => (
        <Card key={travel.id} travel={travel} />
      ))}
    </div>
  );
}

export default CardList;