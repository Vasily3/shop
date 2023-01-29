import React, {FC} from 'react';
import './ProductRating.scss'
import starFull from '../../../assets/img/star-full.svg'
import starEmpty from '../../../assets/img/star.svg'


interface IProductRatingProps {
    value: number | undefined
    className?: string
}

const ProductRating: FC<IProductRatingProps> = ({value = 0, className}) => {

    return (
        <div className={className + ' rating'}>
            <img className='rating__star' src={value >= 1 ? starFull : starEmpty} alt="star"/>
            <img className='rating__star' src={value >= 2 ? starFull : starEmpty} alt="star"/>
            <img className='rating__star' src={value >= 3 ? starFull : starEmpty} alt="star"/>
            <img className='rating__star' src={value >= 4 ? starFull : starEmpty} alt="star"/>
            <img className='rating__star' src={value === 5 ? starFull : starEmpty} alt="star"/>
        </div>
    );
};

export default ProductRating;
