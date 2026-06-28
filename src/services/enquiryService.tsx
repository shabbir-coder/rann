import axios from 'axios';
import { environment } from '@/environment/variables';

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
  monthOfTravel: string;
  maxPersons: string;
  tentPreferences: string[];
}

const API_URL = environment.API_URL;

export const submitEnquiry = async (data: EnquiryData) => {
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    description: data.message,       // map message → description (model field)
    month: data.monthOfTravel,
    maxPersons: data.maxPersons,
    tentPreferences: data.tentPreferences,
  };
  const response = await axios.post(`${API_URL}/enquiries/public`, payload);
  return response.data;
};