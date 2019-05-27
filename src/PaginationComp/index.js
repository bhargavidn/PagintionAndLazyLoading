import React,{Component} from 'react';
import {pageData} from './pageMockData';
import PageNumberComp from './pageNumberComp';
import ConfigComp from './configComp';

export default class extends Component {
    renderPageData = () =>  pageData.map((item) => (   
    <ul class="list-group">
        <li class="list-group-item">
        <div className='row'>
            <div className='col-sm-2'>
                <img src={item.thumbnailUrl} width='50px'/>
            </div>
            <div className='col-sm-5'>
                {item.Title}
            </div>
        </div>
        </li>   
    </ul> ));            
  
    render() {
        return (
            <div className="row pt-sm-4 ml-sm-3">
                <div className="col-sm-2 ">
                    <ConfigComp />
                </div>
                <div className="col-sm-10 ">
                    {this.renderPageData()}
                        <PageNumberComp />
                </div>
            </div>
        )
    }
}