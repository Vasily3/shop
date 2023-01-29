import React, {FC} from 'react';
import './Pagination.scss'

interface IPagination {
    pagesArray: number[],
    setPage: (page: number) => void,
    currentPage: number
}

const Pagination: FC<IPagination> = ({pagesArray, setPage, currentPage}) => {
    return (
        <div className='pagination'>
            <button className='pagination__arrow pagination__arrow--prev'
                    type='button'
                    disabled={currentPage === 1}
                    onClick={() => {if(currentPage > 1) {setPage(currentPage - 1)}}}/>
            {pagesArray.map((page) =>
                <button className={page === currentPage? 'pagination__num pagination__num--current' : 'pagination__num'}
                        type='button'
                        onClick={() => {setPage(page)}}
                        key={page}>{page}</button>
            )}
            <button className='pagination__arrow pagination__arrow--next'
                    type='button'
                    disabled={currentPage === pagesArray.length}
                    onClick={() => {if(currentPage < pagesArray.length){setPage(currentPage + 1)}}}/>
        </div>
    );
};

export default Pagination;
