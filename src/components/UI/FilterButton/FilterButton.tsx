import format from 'date-fns/format';
import parse from 'date-fns/parse';
import React, {FC} from 'react';
import {IProduct} from '../../../models/IProduct';
import './FilterButton.scss'

interface IFilterButtonProps {
    products: IProduct[] | null,
    setProducts: (products: IProduct[]) => void,
    filterBy: string,
    children: string,
    sort: string,
    setSort: (sort: string) => void,
}

const FilterButton: FC<IFilterButtonProps> = ({products, setProducts, filterBy, children, sort, setSort}) => {

    const filterProducts = (field: string) => {
        setSort(field)
        if (products && field === 'name') {
            setProducts([...products].sort((a: IProduct, b: IProduct) => a[field].localeCompare(b[field])))
        } else if (products && field === 'views') {
            setProducts([...products].sort((a: IProduct, b: IProduct) => b[field] - a[field]))
        } else if (products && (field === 'start_date' || field === 'end_date')) {
            setProducts([...products].sort((a: IProduct, b: IProduct) => +format(parse(a[field], 'MM/dd/yyyy', new Date()), 't') - +format(parse(b[field], 'MM/dd/yyyy', new Date()), 't')))
        }
    }

    return (
        <button onClick={() => filterProducts(filterBy)} className={sort === filterBy? 'filter-button filter-button--current' : 'filter-button'}>
            {children}
        </button>
    );
};

export default FilterButton;
