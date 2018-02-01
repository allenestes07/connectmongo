import axios from 'axios';

export const SET_PRODUCTS = 'SET_PRODUCTS';


export function fetchPosts() {
  return (dispatch) => {
    axios.get('/posts')
    .then((result) => {
      dispatch({
          type: "SET_POSTS",
          posts: result.data
        })
    }).catch((error) => {
      console.log(error);
    });
  }
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
