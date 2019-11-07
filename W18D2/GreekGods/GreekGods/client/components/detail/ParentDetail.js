import React from "react";
import { Mutation } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_GOD, FETCH_GODS } = Queries;
import Mutations from "../../graphql/mutations";
const { ADD_GOD_RELATIVE, REMOVE_GOD_RELATIVE } = Mutations;

class ParentDetail extends React.Component{
  constructor(props){
    super(props);

    this.state={
      editing: false,
      parent: '',
      relativeId: ''
    }

  }

  update(field){
    return e => this.setState({[field]: e.target.value})
  }

  render(){

    if (this.state.editing){
      return(
        <div>
          <Mutation  mutation={ADD_GOD_RELATIVE}
            refetchQueries={() => {
              return [
                {
                  query: FETCH_GOD,
                  variables: { godId: this.props.id }
                }
              ];
            }}
          >
            {(addGodRelative, {data}) => (
              <form 
                onSubmit={e=>{
                  e.preventDefault;
                  addGodRelative({
                    variables: { godId: this.props.id, relativeId: this.state.relativeId, relationship: 'parent' }
                  })
                }}>

                <Query query={FETCH_GODS}>
                  {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error</p>;

                    let gods = data.gods;
                    return (
                      <select value={this.state.relativeId} onChange={this.update('relativeId')}>
                        {gods.filter(god => god.id !== this.props.id && god.child.id === this.props.id).map(god=>
                          <option 
                          key = {god.id}
                          value={god.id}
                          >{god.name}</option>
                        )}
                      </select>
                    )
                  }}
                </Query>


                <button type="submit">Add Parent</button>

              </form>
              )}
            </Mutation>
          <div>
            {this.props.parents.map(parent=>{
              <li>

                <Mutation
                  mutation={REMOVE_GOD_RELATIVE}
                  refetchQueries={() => {
                    return [
                      {
                        query: FETCH_GOD,
                        variables: { godId: props.id }
                      }
                    ];
                  }}
                >
                  {(removeGodRelative, { data }) => (
                    <a
                      style={linkStyle}
                      onClick={e => {
                        e.preventDefault();
                        removeGodRelative({ 
                        variables: { godId: this.props.id, relativeId: parent.id, relationship: 'parent' }
                        });
                      }}
                    >
                      <p>Delete</p>
                    </a>
                  )}
                </Mutation>  
              {parent.name}
            </li>})}
          </div>
        </div>
      )
    } else {
    return (
        <div>

          <ul>
            {this.props.parents.map(parent=>{
              <li>
                <div
                  onClick={this.handleEdit}
                  style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
                >
                  <IconContext.Provider value={{ className: "custom-icon" }}>
                    <FaPencilAlt />
                  </IconContext.Provider>
                </div>
                {parent.name}
              </li>})
            }
          </ul>
        </div>
      )
    }
  }
}

export default ParentDetail;