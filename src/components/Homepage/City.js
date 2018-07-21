import React from 'react';
import image from '../../img/LA.jpg'
import { Redirect, withRouter } from 'react-router-dom';

class City extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }
  redirect = () => {
    this.props.history.push(this.props.url);
  }
  render(){
    return(
      <div className="city" onClick={this.redirect}>
        <div className="cityImage">
          <img src={require(`../../img/${this.props.img}`)} />
        </div>
        <div className="cityName">{this.props.name.toUpperCase()}</div>
        <div className="underline"></div>
      </div>
    )
  }
}
export default withRouter(City);
