import React, {Component} from 'react';
// import setDisplayType from '../actions';
// import { connect } from 'react-redux';

export default class extends Component {
   
    // changeDisplayType = (event) => {
    //     this.props.setDisplayType(event.target.value==='P' ? true : false)
    // }
    render() {
        return (
            <div className="pt-sm-0 align-middle"> 
            <h5>Display Type</h5>
            <hr/>
                <form>
                    <div className="radio" >
                        <label><input type="radio" name="displayType" value="P" defaultChecked onClick={this.props.changeDisplayType}/>
                            <span className='pl-sm-2'>Pagination</span>
                        </label>

                    </div>
                    <div className="radio">
                        <label><input type="radio" name="displayType" value="L" onClick={this.props.changeDisplayType}/> 
                            <span className='pl-sm-2'>Lazy Loading</span>
                        </label>
                        
                    </div>
                    
                </form>
            </div> 
        )
    }
};

// const mapDispatchToProps = {
// setDisplayType
// }
    
// export default connect(null,mapDispatchToProps)(configComp);