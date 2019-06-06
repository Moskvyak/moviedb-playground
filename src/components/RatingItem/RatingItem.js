import React from 'react';

import './RatingItem.css';

const getRatingAndClass = (value) => {
    const rating = `${value * 10}%`;
    if (value < 4) {
        return { 
            rating,
            className: 'red'
        }
    }
    if (value < 7.5) {
        return {
            rating,
            className: 'purple'
        }
    }
    return {
        rating,
        className: 'primary'
    }
}

const RatingItem = React.memo(({ rating }) => {
    const ratingObject = getRatingAndClass(rating);
    const className = `${ratingObject.className}-background-color ratingitem`
    return <div className={className}>{ratingObject.rating}</div>
});

export default RatingItem;

