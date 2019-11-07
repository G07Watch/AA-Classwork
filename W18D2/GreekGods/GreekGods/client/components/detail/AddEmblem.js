import React from "react";
import RemoveEmblem from "./RemoveEmblem";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import Mutations from "../../graphql/mutations";
import { Mutation } from "react-apollo";
const {
  ADD_GOD_EMBLEM
} = Mutations;

class AddEmblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emblemId: null
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(addGodEmblem) {
    return e => {
      e.preventDefault();
      addGodEmblem({
        variables: { godId: this.props.id, emblemId: this.state.emblemId }
      }).then(() => this.props.toggleEditing());
    }
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.toggleEditing();
  }

  fieldUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
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
      <Mutation mutation={ADD_GOD_EMBLEM}>
        {(addGodEmblem, data) => (
          <div>
            {editButton}
            <h2>Emblems</h2>
            <form onSubmit={this.handleSubmit(addGodEmblem)}>
              <select onChange={this.fieldUpdate("emblemId")} defaultValue="default">
                <option value="default" disabled>Select an Emblem</option>
                  {this.props.emblemList.filter(emblem => !this.props.ownedEmblemIds.includes(emblem.id)).map(emblem =>
                    <option key={emblem.id} value={emblem.id}>
                      {emblem.name}
                    </option>
                  )}
              </select>
              <button type="submit">Add Emblem</button>
            </form>
            <RemoveEmblem id={this.props.id} emblems={this.props.emblems} />
          </div>
        )}
      </Mutation>
    )
  }
}

export default AddEmblem;