import React,{Component} from 'react';
import {pageData} from './pageMockData';


export default class extends Component {
    renderPageData = () =>  pageData.map((item) => (   <div>  {item.title}  </div> ));            
  
    render() {
        return (
            <div>
                {this.renderPageData()}
            </div>
        )
    }
}