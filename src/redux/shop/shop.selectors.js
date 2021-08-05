import {createSelector} from 'reselect';

const selectShop = state => state.shop;


export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);


export const selectColletion = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  );
