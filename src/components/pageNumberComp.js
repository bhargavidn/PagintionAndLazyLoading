import React from 'react';



const PageNumberComp = (props) => {
    const pageNumbers = [];
    const { totalRec, pageLimit, pageClickEvent,currentPage,prevClickHandler, nextClickHandler } = props;    
    //page numbers will be (total num of rec / pagelimit)
    for (let i = 1; i <= Math.ceil(totalRec / pageLimit); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav >
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={prevClickHandler}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Prev</span>
                    </button>
                </li>
                {pageNumbers.map(pageNumber =>
                    <li className={currentPage === pageNumber ? 'active page-item' : 'page-item'} key={pageNumber}>
                        <button className='page-link' onClick={pageClickEvent}>
                            {pageNumber}
                        </button>
                    </li>

                )}
                <li className="page-item">
                    <button className="page-link" aria-label="Next" onClick ={nextClickHandler}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default PageNumberComp;