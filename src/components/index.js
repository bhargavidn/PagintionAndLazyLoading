import React,{Component} from 'react';
import {connect} from 'react-redux';
import {pageData} from './pageMockData';
import ConfigComp from './configComp';
import PageNumberComp from './pageNumberComp';

export class PaginationComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLimit: 5,
            pageData,
            currentPage: 1            
        }
    }
    setCurrentPage = (event) => {
        this.setState({
            currentPage: Number(event.target.textContent)
        })
    }
    prevClickHandler = () => {
        const newPageNumber = this.state.currentPage === 1 ? 1 : this.state.currentPage-1;
        console.log("newPageNumber",newPageNumber);
        this.setState({
            currentPage: newPageNumber
        });
    }
    nextClickHandler = () => {
        const {pageLimit, pageData} = this.state;
        const lastPageNumber = Math.ceil(pageData.length/pageLimit)
        const newPageNumber = this.state.currentPage === lastPageNumber ? lastPageNumber : this.state.currentPage + 1;
        this.setState({
            currentPage: newPageNumber
        });
    }
    renderPageData = (currentPageData) =>  currentPageData.map((item) => (   
    <ul className="list-group" key={item.Albums}>
        <li className="list-group-item">
        <div className='row'  key={item.Albums}>
            <div className='col-sm-2'>
                <img src={item.thumbnailUrl} width='50px' alt="not found"/>
            </div>
            <div className='col-sm-5'>
                {item.Title}
            </div>
        </div>
        </li>   
    </ul> ));            
    
    render() {
        const {pageLimit, currentPage, pageData} = this.state;
        const indexOfLastPage = currentPage * pageLimit;
        const indexOfFirstPage = indexOfLastPage - pageLimit;
        const currentPageData = pageData.slice(indexOfFirstPage, indexOfLastPage)
        return (
            <div className="row pt-sm-4 ml-sm-3">
                <div className="col-sm-2 ">
                    <ConfigComp />
                </div>
                <div className="col-sm-10 ">
                    {this.renderPageData(currentPageData)}
                    <PageNumberComp 
                        totalRec={pageData.length} 
                        pageLimit={pageLimit}
                        pageClickEvent={this.setCurrentPage}
                        currentPage={currentPage} 
                        prevClickHandler={this.prevClickHandler}
                        nextClickHandler={this.nextClickHandler}/> 
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    appData: state
});

export default connect(mapStateToProps)(PaginationComp);