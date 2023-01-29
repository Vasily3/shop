import {IProduct} from '../../models/IProduct'
import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProduct[]>('https://files.rerotor.ru/rerotor/products.json')
            const arrWithId = [...response.data]
            arrWithId.forEach((el, i) => {el.id = i})
            return arrWithId
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка: ' + e)
        }
    }
)
