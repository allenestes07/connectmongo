import { setProducts} from '../actions/index.js';

export default function (state = {}, action) {
  console.log(action.type);
  switch(action.type) {
    case "SET_PRODUCTS":
      return action.products;
      default: return state;
  }
}
