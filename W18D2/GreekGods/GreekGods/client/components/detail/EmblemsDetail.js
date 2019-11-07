import React from "react";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_EMBLEMS } = Queries;
import AddEmblem from "./AddEmblem";

class EmblemsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      emblemId: null
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }

  render() {
    const editButton = (
      <div
        onClick={this.handleEdit}
        style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
      >
        <IconContext.Provider value={{ className: "custom-icon" }}>
          <FaPencilAlt />
        </IconContext.Provider>
      </div>
    );

    return (
      <Query query={FETCH_EMBLEMS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          let emblemList = data.emblems;
          let ownedEmblemIds = this.props.emblems.map(emblem => emblem.id);
          if (this.state.editing) {
            return (
              <AddEmblem 
                id={this.props.id} 
                emblems={this.props.emblems} 
                emblemList={emblemList} 
                ownedEmblemIds={ownedEmblemIds} 
                toggleEditing={() => this.setState({editing: !this.state.editing})} 
              />
            )
          } else {
            return (
              <div>
                {editButton}
                <h2>Emblems</h2>
                <ul>
                  {this.props.emblems.map(emblem => <li key={emblem.id}>{emblem.name}</li>)}
                </ul>
              </div>
            )
          }
        }}
      </Query>
    )
  }
}

export default EmblemsDetail;