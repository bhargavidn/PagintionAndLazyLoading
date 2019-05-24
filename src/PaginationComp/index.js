import React,{Component} from 'react';
import {pageData} from './pageMockData';
import PageNumberComp from './pageNumberComp';
import configComp from './configComp';

export default class extends Component {
    renderPageData = () =>  pageData.map((item) => (   <div>  {item.title}  </div> ));            
  
    render() {
        return (
            <div className="container">
                <div className="col">
                    <configComp />
                </div>
                <div className="col">
                    {this.renderPageData()}
                
                    <PageNumberComp />
                </div>
            </div>
        )
    }
}