import React from 'react';

const lazyLoadingFunc = ({loadMoreItems,loadingState}) => (
    <div>
        {loadingState ? <h4> Loading... </h4> : <button className='btn btn-link' onClick={loadMoreItems}>Show More</button>}
    </div>
)

export default lazyLoadingFunc;