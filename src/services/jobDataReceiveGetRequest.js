import axios from 'axios';
import url from '../constants/mockapiUrl';

export const jobDataFromGetRequest = async () => {
     try{
         return await axios.get(url)
     }
     catch(error) {
         console.log('Error while getting job data', error);
     }
 }