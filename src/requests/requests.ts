import { sortData } from '@/store/utils';
import axios, { AxiosError, AxiosResponse } from 'axios';

const API_URL = "https://jwcapi.mamun.shop"

const fetchHomeData = async () => {
    try {
        const response: AxiosResponse = await axios.get(API_URL+ '/home');
        
        return response.data
      } catch (error: any) {
        console.error('Error:', error.response?.data);
      }
};

const fetchItemsData = async () => {
    try {
        const response: AxiosResponse = await axios.get(API_URL+ '/items');
        return sortData(response.data)
      } catch (error: any) {
        console.error('Error:', error.response?.data);
      }
};

const fetchTables = async () => {
    try {
        const response: AxiosResponse = await axios.get(API_URL+ '/tables');
        
        return response.data
      } catch (error: any) {
        console.error('Error:', error.response?.data);
      }
};

const fetchTable = async (id: string) => {
    try {
        const response: AxiosResponse = await axios.get(API_URL+ '/tables/' + id);
        
        return response.data
      } catch (error: any) {
        console.error('Error:', error.response?.data);
      }
};

export {fetchHomeData, fetchItemsData, fetchTable, fetchTables}

