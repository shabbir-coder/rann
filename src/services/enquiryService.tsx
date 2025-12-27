import axios from 'axios';
import { environment } from '@/environment/variables';

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const API_URL = environment.API_URL

export const submitEnquiry = async (data: EnquiryData) => {
  const response = await axios.post(`${API_URL}/enquiries/public`, data);
  return response.data;
};
