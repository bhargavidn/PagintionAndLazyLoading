import React, {Component} from 'react';


export default class extends Component {
    changeDisplayType = (e) => {
        console.log("val",+e.target.value   )
    }
    render() {
        return (
            <div className="pt-sm-0 align-middle"> 
            <h5>Display Type</h5>
            <hr/>
                <form>
                    <div className="radio">
                        <label><input type="radio" name="displayType" checked onChange={this.changeDisplayType}/>
                            <span className='pl-sm-2'>Pagination</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="displayType" onChange={this.changeDisplayType}/> 
                            <span className='pl-sm-2'>Lazy Loading</span>
                        </label>
                    </div>
                    
                </form>
            </div> 
        )
    }
}