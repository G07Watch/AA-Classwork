import React from "react";
import { Mutation } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_GOD } = Queries;
import Mutations from "../../graphql/mutations";
const { ADD_GOD_DOMAIN } = Mutations;

class AddDomain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      domain: '',
    }

  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render(){
    return (
      <Mutation
        mutation={ADD_GOD_DOMAIN}
        refetchQueries={() => {
          return [
            {
              query: FETCH_GOD,
              variables: { godId: this.props.id }
            }
          ];
        }}
      >
        {(addGodDomain, {data}) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addGodDomain({
                  variables: { godId: this.props.id, domain: this.state.domain }
                }).then(this.setState({ editing: false }))
              }}
              >
              <input
                onChange={this.update("domain")}
                value={this.state.domain}
                placeholder="New Domain"
              />

              <button type="submit">Add Domain</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AddDomain;