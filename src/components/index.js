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
            data: pageData
        }
    }
    
    renderPageData = () =>  pageData.map((item) => (   
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
        const pageNumbers = [];
        //page numbers will be (total num of rec / pagelimit)
        for(let i=1; i<=Math.ceil(this.state.data.length/this.state.pageLimit); i++) {
            pageNumbers.push(i);
        }
        console.log("pageNumbers",pageNumbers);
        return (
            <div className="row pt-sm-4 ml-sm-3">
                <div className="col-sm-2 ">
                    <ConfigComp />
                </div>
                <div className="col-sm-10 ">
                    {this.renderPageData()}
                    <PageNumberComp pageNumbers={pageNumbers}/>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    appData: state
});

export default connect(mapStateToProps)(PaginationComp);