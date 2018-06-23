
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { getDetails } from "../actions/index";

const HOST = "http://localhost:8080";

class ProviderList extends Component {


  renderDoctors(doctorData) {
    return (


      
      <li className="list-group-item" key={doctorData.provider_id}>
        <div className="card">
          <div className="card-header">
            <Link to={"doctors/" + doctorData.provider_id}>
              <h2>
                {doctorData.first_name} {doctorData.last_name}
              </h2>
            </Link>
          </div>
          <img
            className="card-img-top img-thumbnail"
            src={doctorData.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-text">{doctorData.location}</h5>
            <h6 className="card-text">{doctorData.type}</h6>
        
          </div>
        </div>
      </li>
    );
  }

  render() {
    return (
      <div className="container">
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="row">
       
          <div className="col-8">
            <ul className="list-group list-group-flush">
              {this.props.doctors.map(this.renderDoctors)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ doctors }) {
  return { doctors };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderList);


