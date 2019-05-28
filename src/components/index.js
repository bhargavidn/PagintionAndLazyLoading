import React,{Component} from 'react';
import {pageData} from './pageMockData';
import ConfigComp from './configComp';
import PageNumberComp from './pageNumberComp';
import LazyLoadingComp from './lazyLoadingComp';


const initialState ={
    pageLimit: 5,
    pageData,
    currentPage: 1,
    loadingState: false,
    isPaginationRequired: true,
    currentPageData:  pageData.slice(0, 5)
}
export default class extends Component {
    
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    changeDisplayType = (event) => {
        const isPaginationRequired = event.target.value==='P' ? true : false;
        this.setState({
            ...initialState,
            isPaginationRequired
            
        });
    }

    loadMoreItems = () => {  
        if(this.state.loadingState){
            return;
        }      
        
            this.setState({loadingState: true});
         
        setTimeout(() => {
            this.setPageState(this.state.currentPage + 1)
        }, 1000);

    }
    setPageState = (newPageNumber) => {
        const {pageLimit, pageData} = this.state;
        const indexOfLastPage = newPageNumber * pageLimit;
        const indexOfFirstPage = indexOfLastPage - pageLimit;
        const currentPageData = this.state.isPaginationRequired ? pageData.slice(indexOfFirstPage, indexOfLastPage) : pageData.slice(0, newPageNumber*pageLimit)

        this.setState({
            currentPage: newPageNumber,
            currentPageData,
            loadingState: false
        }); 
    }

    setCurrentPage = (event) => {
        this.setPageState(Number(event.target.textContent));
    }
    prevClickHandler = () => {
        const newPageNumber = this.state.currentPage === 1 ? 1 : this.state.currentPage-1;       
        this.setPageState(newPageNumber);
    }
    nextClickHandler = () => {
        const {pageLimit, pageData} = this.state;
        const lastPageNumber = Math.ceil(pageData.length/pageLimit)
        const newPageNumber = this.state.currentPage === lastPageNumber ? lastPageNumber : this.state.currentPage + 1;
        this.setPageState(newPageNumber);
    }
    renderPageData = (currentPageData) =>  currentPageData.map((item) => (   
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
    ));            
    
    render() {
        const {pageLimit, currentPage, loadingState, pageData, currentPageData,isPaginationRequired} = this.state;
        console.log("loadingState", loadingState,"currentPage", currentPage)
        return (
            <div className="row pt-sm-4 ml-sm-3">
                <div className="col-sm-2 ">
                    <ConfigComp changeDisplayType={this.changeDisplayType}/>
                </div>
                <div className="col-sm-10 ">
                    <ul className="list-group" >
                        {this.renderPageData(currentPageData)}
                    </ul>
                    {isPaginationRequired ?
                    <PageNumberComp 
                        totalRec={pageData.length} 
                        pageLimit={pageLimit}
                        pageClickEvent={this.setCurrentPage}
                        currentPage={currentPage} 
                        prevClickHandler={this.prevClickHandler}
                        nextClickHandler={this.nextClickHandler}/> 
                    :
                    <LazyLoadingComp loadingState={loadingState} loadMoreItems={this.loadMoreItems}
                    />}
                </div>
            </div>
        )
    }
}
