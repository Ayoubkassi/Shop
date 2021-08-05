import React from 'react';
import './collection.styles.css';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectColletion } from '../../redux/shop/shop.selectors';

const CollectionPage  = ({collection}) => {
  return (
    <div className="collection-page">
      <h2> PAGE</h2>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
    collection : selectColletion(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
