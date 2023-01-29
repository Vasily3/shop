import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import './ProductItem.scss'


interface IProductItemProps {
    product: IProduct,
    onClick: (product: IProduct) => void
}

const ProductItem: FC<IProductItemProps> = ({product, onClick}) => {
    const startDate = format(parse(product.start_date, 'MM/dd/yyyy', new Date()), 'dd.MM.yyyy')
    const endDate = format(parse(product.end_date, 'MM/dd/yyyy', new Date()), 'dd.MM.yyyy')

    return (
        <tr className='product-item' onClick={() => onClick(product)}>
            <td><img className='product-item__img' src={product.image_url} alt={product.name}/></td>
            <td>
                <p className='product-item__name'>{product.name}</p>
                <p className='product-item__category'>{product.category}</p>
            </td>
            <td className='product-item__views'>{product.views}</td>
            <td className='product-item__start-date'>{startDate}</td>
            <td className='product-item__end-date'>{endDate}</td>
        </tr>
    );
};

export default ProductItem;
