import axios from 'axios';
import { homeMenuApi, productListApi } from './url.js';

export const getHomeMenuCategories = async () => {
  // GET request using axios with error handling
  let headers = { 'Content-Type': 'application/json; charset=utf-8' }
  let homeApiResponse = null;
  await axios.get(homeMenuApi, { headers })
    .then(res => {
      homeApiResponse = res.data;
      console.log(res.data)
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  return homeApiResponse;
}

export const getProductDetails = async (categoryId) => {
  // GET request using axios with error handling
  let headers = { 'Content-Type': 'application/json; charset=utf-8' }
  let productDetailResp = null;
  await axios.get(productListApi + categoryId, { headers })
    .then(res => {
      productDetailResp = res.data;
      console.log(res.data)
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  return productDetailResp;
}