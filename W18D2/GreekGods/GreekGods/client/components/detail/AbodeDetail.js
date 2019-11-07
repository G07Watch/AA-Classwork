import React from "react";
import { Mutation } from "react-apollo";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import Mutations from "../../graphql/mutations";
import { Query } from "react-apollo";
const { UPDATE_GOD_ABODE } = Mutations;
import Queries from "../../graphql/queries";
const { FETCH_ABODES } = Queries;

class AbodeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      abodeId: this.props.abodeId
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }

  fieldUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <Query query={FETCH_ABODES}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          let abodeList = data.abodes;
          if (this.state.editing) { 
            return (
                <Mutation mutation={UPDATE_GOD_ABODE}>
                  {(updateGodAbode, data) => (
                    <div>
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          updateGodAbode({
                            variables: { godId: this.props.id, abodeId: this.state.abodeId }
                          }).then(() => this.setState({ editing: false }));
                        }}
                      >
                        <select 
                          onChange={this.fieldUpdate("abodeId")}
                          defaultValue={abodeList.find(abode => abode.id === this.state.abodeId).id || ""}
                        >
                          {abodeList.map(abode => 
                            <option
                              key={abode.id}
                              value={abode.id}
                            >{abode.name}</option>
                          )}
                        </select>
                        <button type="submit">Update Abode</button>
                      </form>
                    </div>
                  )}
                </Mutation>
              )
          } else { 
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
                <h2>{this.props.abode.name}</h2>
              </div>
            )
          }
        }}
      </Query>
    )
  }
}

export default AbodeDetail;