import React from 'react';

const PageNumberComp = ({pageNumbers}) => (
    <nav aria-label="Page navigation pt-sm-4">
    <ul className="pagination">
        <li className="page-item">
        <button className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
        </button>
        </li>
        {pageNumbers.map(pageNumber => 
               <li className="page-item"><button className="page-link" >{pageNumber}</button></li>

        )}
        <li className="page-item">
        <button className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
        </button>
        </li>
    </ul>
    </nav>
);

export default PageNumberComp;