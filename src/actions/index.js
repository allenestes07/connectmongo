import axios from 'axios';

export const SET_PRODUCTS = 'SET_PRODUCTS';

// Axios Get call to the Express Api
export function fetchProducts() {
  return (dispatch) => {
    axios.get('/products')
    .then((result) => {
      dispatch({
          type: "SET_PRODUCTS",
          posts: result.data
        })
    }).catch((error) => {
      console.log(error);
    });
  }
}

// Axios Post call to Express Api
export function setProduct(product) {
  axios.post('/setproduct', product)
  .then(function(response){
    console.log('success',response.data);
  });
}

// export function setProducts(products){
//  return {
//    type: "SET_PRODUCTS",
//    products
//  }
// }

// export function fetchPosts() {
//  return (dispatch) => {
//    return axios.get('/products')
//    .then((result) => {
//      dispatch(setProducts(result.data))
//    }).catch((error) => {
//      console.log(error);
//    });
//  }
// }

// export function fetchProducts() {
//  return (dispatch) => {
//    axios.get('/products')
//    .then((result) => {
//     console.log(result.data);
//    }).catch((error) => {
//      console.log(error);
//    });
//  }
// }
