import React, {FC, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {fetchProducts} from '../../store/reducers/actionCreators'
import {IProduct} from '../../models/IProduct';
import './ProductPage.scss'
import discount from '../../assets/img/discount.png'
import ProductRating from '../../components/UI/ProductRating/ProductRating';

const ProductPage: FC = () => {
    const dispatch = useAppDispatch();
    const {products, isLoading, error} = useAppSelector(state => state.productReducer)
    const [product, setProduct] = useState<IProduct>()
    const params = useParams<{ id: string }>()
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [fetchProducts])

    useEffect(() => {
        setProduct(products[Number(params.id)])
    }, [products])


    return (
        <article className='product-page'>
            {isLoading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            <div className='product-page__container container'>
                <button className='product-page__btn-back' type='button' onClick={handleClick}>Вернуться на главную</button>
                <div className='product-page__header'>
                    <div className='product-page__discount'>
                        {product?.discount !== '0' &&
                            <>
                                <img className='product-page__discount-img' src={discount} alt='discount'/>
                                <span className='product-page__discount-value'>-{product?.discount}%</span>
                            </>
                        }
                    </div>
                    {product?.logo_url &&
                        <img className='product-page__logo' src={product?.logo_url} alt='discount'/>
                    }
                </div>

                <div className='product-page__info'>
                    {product?.image_url &&
                        <img className='product-page__img' src={product?.image_url} alt='product'/>
                    }
                    <div className='product-page__text-block'>
                        {product?.name &&
                            <h1 className='product-page__title'>{product?.name}</h1>
                        }
                        <ProductRating className='product-page__rating' value={product?.stars}/>
                        {product?.new_price ?
                            <div className='product-page__prices'>
                                <div className='product-page__price'>
                                    <span className='product-page__old-price'>{product?.old_price} ₽<span/></span>
                                    <p className='product-page__old-price-text'>старая цена</p>
                                </div>
                                <div className='product-page__price'>
                                    <span className='product-page__new-price'>{product?.new_price} ₽</span>
                                    <p className='product-page__new-price-text'>цена по акции</p>
                                </div>
                            </div>
                            :
                            <p className='product-page__new-price-text'>товара нет в наличии</p>
                        }
                    </div>
                </div>
            </div>

            <div className='product-page__disclaimer'>
                {product?.disclaimer? product?.disclaimer : ''}
            </div>
        </article>
    );
};

export default ProductPage;
