import axios from 'axios';

export function fetchProducts() {
  return (dispatch) => {
    axios.get('/products')
    .then((result) => {
      console.log(result.data);
    }).catch((error) => {
      console.log(error);
    });
  }
}
