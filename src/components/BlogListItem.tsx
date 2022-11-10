const BlogListItem = () => {
  const backgroundImage = `url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg')`;

  return (
    <article className="nb-card">
      <div className="nb-card__background">
        <div className="nb-card__background--wrapper">
          <div className="nb-card__background--main" style={{ backgroundImage }}>
            <div className="nb-card__background--layer"></div>
          </div>
        </div>
      </div>
      <div className="nb-card__head">
        <span className="nb-card__date-wrapper">
          <span className="nb-card__date-day">11</span>
          <span className="nb-card__date-month">JAN</span>
        </span>
      </div>
      <div className="nb-card__info">
        <h5>HARVICK GETS WHAT HE NEEDS, JOHNSON AMONG THOSE</h5>
        <p>
          <a href="#" className="nb-link me-3"><i className="fa fa-pencil-square-o"></i> Tony Jahson</a>
          <a href="#" className="nb-link"><i className="fa fa-comments-o"></i> 150</a>
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!</p>
        <button className="nb-btn nb-btn--with-icon">
          <i className="nb-btn-icon fa fa-long-arrow-right"></i>
          READ MORE
        </button>
      </div>
    </article>
  );
};

export default BlogListItem;
