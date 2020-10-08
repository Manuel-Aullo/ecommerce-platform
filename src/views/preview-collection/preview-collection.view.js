import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items, imageUrl }) => (
  <div className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
