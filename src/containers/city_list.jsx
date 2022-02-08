import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from '../containers/city';

class CityList extends Component {

  render() {
    return (
      <div className = "cities">
        {this.props.cities.map(city)} => <City city={city} key={city.name} />}
      </div>
    );
  }
};

  function mapStateToProps(state) {
    return {
      cities: state.cities
    };
  }

export default connect(mapStateToProps)(cityList);
