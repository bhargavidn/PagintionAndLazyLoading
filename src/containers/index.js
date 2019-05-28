import React,{Component} from 'react';
// import {connect} from 'react-redux';
import PaginationComp from '../components';
// import setDisplayType from '../actions';

export default class extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h4 className="text-center mt-sm-3">
          Custom Pagination Component
        </h4>
        <PaginationComp />
  
      </div>
    );
  }
}
  

// const mapDispatchToProps = {
//   setDisplayType
// }

// const mapStateToProps = ({isPaginationRequired}) => ({
//   isPaginationRequired
// });


// export default connect(mapStateToProps, mapDispatchToProps)(App);
