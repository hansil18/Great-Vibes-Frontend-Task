import axios from 'axios';
import { useState } from 'react';
import url from '../constants/mockapiUrl';

export const jobDataSendPostRequest = async (jobData) => {
    try{
        return await axios.post(url, jobData)
    }
    catch(error) {
        console.log('Error to save job data', error);
    }
}