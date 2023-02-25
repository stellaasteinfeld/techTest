import React from "react";
import NextImage from "./image";

const Card = ({ article }) => {
  return (
    <div className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        {article.attributes?.image ?
            <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          : ''
        }
        <div className="uk-card-body">
          <p id="title" className="uk-text-large">
            {article.attributes.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;