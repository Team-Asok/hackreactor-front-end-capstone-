import React from 'react';
import Characteristics from './Characteristics.jsx';
import MetaScore from './MetaScore.jsx';
import { StarRating, findTotalStars } from './StarRatingGraph.jsx';

const ReviewMetaDataContainer = function(props) {
  if (props.metaData.product_id) {
  return (
    <div id="review-meta-data-container">
      <MetaScore metaData={props.metaData} findTotalStars={findTotalStars}/>
      <div id="percent-recommended">100% of People recommended this product</div>
      <StarRating metaData={props.metaData}/>
      <Characteristics />
    </div>
  );
  }
  return null;
};

export default ReviewMetaDataContainer;
