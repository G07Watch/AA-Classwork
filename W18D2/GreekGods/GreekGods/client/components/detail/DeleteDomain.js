import React from "react";
import { Mutation } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_GOD } = Queries;
import Mutations from "../../graphql/mutations";
const { DELETE_GOD_DOMAIN } = Mutations;

import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";

class DeleteDomain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

   update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }


  render(){
    if (this.state.editing){
    return (
      <Mutation
        mutation={DELETE_GOD_DOMAIN}
        refetchQueries={() => {
          return [
            {
              query: FETCH_GOD,
              variables: { godId: this.props.id }
            }
          ];
        }}
      >
        {(removeGodDomain, {data}) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                removeGodDomain({
                  variables: { godId: this.props.id, domain: this.props.domain }
                }).then(this.setState({ editing: false }))
              }}
              >
              <button type="submit">Remove Domain</button>
            </form>
          </div>
        )}
      </Mutation>
    );
    }else{
      return (
          <div>
            <div
              onClick={this.handleEdit}
              style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
            >
              <IconContext.Provider value={{ className: "custom-icon" }}>
                <FaPencilAlt />
              </IconContext.Provider>
            </div>
            <h2>{this.props.domain}</h2>
          </div>
      );
    }
  }
}

export default DeleteDomain;