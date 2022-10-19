export default () => {
  const backgroundImage = `var(--card-img-hovered-overlay), url('https://source.unsplash.com/Qm_n6aoYzDs')`;

  return (
    <article className="nb-card-item">
      <div className="nb-card-item__img" style={{ backgroundImage }}></div>
      <a href="" className="nb-card-item__link">
        <div className="nb-card-item__img--hovered" style={{ backgroundImage }}></div>
      </a>
      <div className="nb-card-item__info">
        <div className="nb-card-item__about">
          <a className="nb-card-item__tag nb-card-item__tag--news">NEWS</a>
          <div className="card-time">6/11/2018</div>
        </div>
        <h1 className="nb-card-item__title">There have been big Tesla accident at New Jersey</h1>
        <div className="nb-card-item__creator">by <a className="nb-card-item__link" href="">Sardorbek Usmonov</a></div>
      </div>
    </article>
  );
};
