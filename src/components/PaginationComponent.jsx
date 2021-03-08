import React from 'react';
import Pagination from 'react-js-pagination';
import paginationChangeStyle from '../helpers/paginationChangeStyle';

const PaginationComponent = (props) => {
  const checkCondition = paginationChangeStyle(props.totalItemsCount, props.activePage);

  let marginStyle;
  checkCondition === 2 ? marginStyle = { marginTop: '30vh'} : marginStyle = { marginTop: '0'}

  return (
    <nav aria-label='Page navigation - pagination' style={marginStyle}>
      <div className='pagination justify-content-center'>
        <Pagination
          activePage={props.activePage}
          itemsCountPerPage={12}
          totalItemsCount={props.totalItemsCount}
          pageRangeDisplayed={5}
          firstPageText={'<<'}
          prevPageText={'<'}
          nextPageText={'>'}
          lastPageText={'>>'}
          itemClass='page-item'
          linkClass='page-link'
          onChange={ (e) => props.handleElement(e) }
        />
      </div>
    </nav>
  )
}

export default PaginationComponent;