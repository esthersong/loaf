import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import City from './City'

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
      console.log(this.props);
    return(
      <div>
        <div className="citiesList">
          {
            this.props.cities.map((city, index) => (
              <City key={index} {...city}/>
            ))
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    cities: state.citiesReducer.cities
  };
}
const mapDispatchToProps = {
  // onAddTaskClick: taskActions.addTask,
  // onEditTaskText: taskActions.editTaskText,
  // onEditTaskStatus: taskActions.editTaskStatus
}
//
export default connect(mapStateToProps, mapDispatchToProps)(Home);
