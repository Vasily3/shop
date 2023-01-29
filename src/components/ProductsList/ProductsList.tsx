import React, {FC} from 'react'
import ProductItem from '../ProductItem/ProductItem';
import {IProduct} from '../../models/IProduct';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';
import './ProductsList.scss'


interface IProductsListProps {
    products: IProduct[] | null,
}

const ProductsList: FC<IProductsListProps> = ({products}) => {
    const navigate = useNavigate()
    const {isLoading, error} = useAppSelector(state => state.productReducer)

    return (
        <table className='products-list'>
            <tbody>
                <tr>
                    <th className='products-list__photo'>Фото</th>
                    <th className='products-list__name'>Название</th>
                    <th className='products-list__views'>Просмотры</th>
                    <th className='products-list__start-date'>Начало ротации</th>
                    <th className='products-list__end-date'>Конец ротации</th>
                </tr>
                {isLoading && <tr><td className='products-list__attention'>Загрузка...</td></tr>}
                {error && <tr><td className='products-list__attention'>Ошибка: {error}</td></tr>}
                {products && products.map((product, index) => {
                    return (<ProductItem key={product.id} product={product} onClick={() => navigate('/product/' + product.id)}></ProductItem>)
                })}
            </tbody>
        </table>
    );
};

export default ProductsList;
