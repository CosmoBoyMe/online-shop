import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IProduct } from './types'

const loadProducts = createAsyncThunk('products/loadProducts', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('http://localhost:3001/products')
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export { loadProducts }
