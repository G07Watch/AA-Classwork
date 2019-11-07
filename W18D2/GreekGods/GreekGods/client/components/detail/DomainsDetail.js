import React from "react";
import { Mutation } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import AddDomain from './AddDomain';
import DeleteDomain from './DeleteDomain';

class DomainsDetail extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      domains: this.props.domains
    }
  }

  render() {
    return (
      <div className="domains-detail">
        <ul>
          <AddDomain id={this.props.id} /> 

          {this.props.domains.map((domain, idx)=>(
          <li key={this.props.id + domain + idx}>
            <DeleteDomain id={this.props.id} domain={domain} />
          </li>
        ))
      }
        </ul>
      </div>)
  }
}

export default DomainsDetail;