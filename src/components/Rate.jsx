export const Rate = ({ editaRate, id, rate }) => {
  const stars = [1, 2, 3, 4, 5];

  function avisaPadre(star) {
    editaRate(id, star);
  }

  return (
    <div className="stars">
      {stars.map((star, i) => (
        <span key={i} className={star > rate ? "star" : "active"}>
          <a onClick={() => avisaPadre(star)}>{"\u2605"}</a>
        </span>
      ))}
      <br />
      <span>{rate}</span>
    </div>
  )
}
