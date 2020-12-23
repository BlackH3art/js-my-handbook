import { store } from '../store';

export default function reducer(storeData, action) { 
  switch(action.type) {


    default:
      return storeData || store;
  }
}