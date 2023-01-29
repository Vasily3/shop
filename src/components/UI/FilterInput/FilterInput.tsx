import React, {FC} from 'react';
import './FilterInput.scss'


interface IFilterInputProps {
    value: string,
    onChange: (e: string) => void,
    className?: string
}

const FilterInput: FC<IFilterInputProps> = ({value, onChange, className}) => {
    return (
        <div className={className + ' filter-input'}>
            <input value={value}
                   onChange={(e) => onChange(e.target.value)}
                   type='text'
                   placeholder='Поиск...'
            />
        </div>
    );
};

export default FilterInput;
