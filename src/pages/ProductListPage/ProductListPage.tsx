import React, {FC} from 'react'
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter'
import './ProductListPage.scss'

const ProductListPage: FC = () => {
    return (
        <div className='product-list'>
            <div className='product-list__container container'>
                <h1 className='product-list__title'>Карточки контента</h1>
                <ProductsFilter/>
            </div>
        </div>
    );
};

export default ProductListPage;
