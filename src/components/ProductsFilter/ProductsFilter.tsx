import React, {FC, useEffect, useState} from 'react'
import './ProductsFilter.scss'
import FilterButton from '../UI/FilterButton/FilterButton'
import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import ProductsList from '../ProductsList/ProductsList';
import {fetchProducts} from '../../store/reducers/actionCreators';
import {IProduct} from '../../models/IProduct';
import {getPagesArr, getPagesCount} from '../../utils/utils';
import FilterSelect from '../UI/FilterSelect/FilterSelect';
import Pagination from '../UI/Pagination/Pagination';
import FilterInput from '../UI/FilterInput/FilterInput';

const ProductsFilter: FC = () => {
    const dispatch = useAppDispatch();
    const {products} = useAppSelector(state => state.productReducer)
    const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(null)
    const [renderedProducts, setRenderedProducts] = useState<IProduct[] | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [sort, setSort] = useState('name')
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(3)
    const [page, setPage] = useState(1)
    const pagesArray = getPagesArr(totalPages)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [fetchProducts])

    useEffect(() => {
        setFilteredProducts([...products].sort((a: IProduct, b: IProduct) => a['name'].localeCompare(b['name'])))
    }, [products])

    useEffect(() => {
        setFilteredProducts([...products].filter(product => product.name.toLowerCase().includes(searchQuery)))
    }, [searchQuery])

    useEffect(() => {
        if (filteredProducts) {
            let startIndex = limit * page - limit
            setRenderedProducts([...filteredProducts].slice(startIndex, startIndex + limit))
            setTotalPages(getPagesCount(filteredProducts.length, limit))
        }
    }, [filteredProducts, limit, page])

    useEffect(() => {
        setPage(1)
    }, [searchQuery, limit])


    return (
        <div className='products-filter'>
            <div className='products-filter__row'>
                <div className='products-filter__buttons'>
                    <p className='products-filter__name'>Сортировать:</p>
                    <FilterButton products={filteredProducts} setProducts={setFilteredProducts} filterBy='name' sort={sort} setSort={setSort}>по названию</FilterButton>
                    <FilterButton products={filteredProducts} setProducts={setFilteredProducts} filterBy='views' sort={sort} setSort={setSort}>по просмотрам</FilterButton>
                    <FilterButton products={filteredProducts} setProducts={setFilteredProducts} filterBy='start_date' sort={sort} setSort={setSort}>по дате начала</FilterButton>
                    <FilterButton products={filteredProducts} setProducts={setFilteredProducts} filterBy='end_date' sort={sort} setSort={setSort}>по дате окончания</FilterButton>
                </div>
                <FilterInput className='products-filter__filter-input' value={searchQuery} onChange={setSearchQuery}/>
            </div>
            <div className='products-filter__row'>
                <Pagination pagesArray={pagesArray} setPage={setPage} currentPage={page}/>
                <FilterSelect values={['3', '5', '10']} onChange={setLimit}/>
            </div>
            <ProductsList products={renderedProducts}/>
        </div>
    );
};

export default ProductsFilter;
