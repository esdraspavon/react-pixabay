import React from "react";

const Image = props => {
  const { largeImageURL, previewURL, likes, views, tags } = props.image;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{likes} Me gusta</p>
          <p className="card-text">{views} Vistas</p>

          <a
            href={largeImageURL}
            target="_blank"
            className="btn btn-primary btn-block"
          >
            Ver imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
