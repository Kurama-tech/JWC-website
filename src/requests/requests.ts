import axios, { AxiosError, AxiosResponse } from 'axios';

const API_URL = "http://localhost:8002/"

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
        
        return response.data
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