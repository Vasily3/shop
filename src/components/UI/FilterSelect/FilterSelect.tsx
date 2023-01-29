import React, {FC} from 'react';
import './FilterSelect.scss'


interface IFilterSelectProps {
    values: string[],
    onChange: (e: number) => void
}

const FilterSelect: FC<IFilterSelectProps> = ({values, onChange}) => {
    return (
        <div className='filter-select'>
            <p className='filter-select__name'>Показывать по:</p>
            <select className='filter-select__select' onChange={e => onChange(Number(e.target.value))}>
                {values.map(el => <option key={el} value={el}>{el}</option>)}
            </select>
        </div>
    );
};

export default FilterSelect;
