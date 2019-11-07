import React from "react";
import { Mutation } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_GOD, FETCH_GODS } = Queries;
import Mutations from "../../graphql/mutations";
const { ADD_GOD_RELATIVE } = Mutations;

class AddParentDetail extends React.Component{

  constructor(props){
    super(props);

  }


  render(){

    return(
      <Query query={FETCH_GODS}>
        {({loading, error, data})=>{
          if(loading)
          if(error)
          if(data){
            let gods = data.gods;
        

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

              
                <select value={this.state.relativeId} onChange={this.update('relativeId')}>
                  {gods.filter(god => god.parent.id === this.props.id).map(god=>
                    <option 
                    key = {god.id}
                    value={god.id}
                    >{god.name}</option>
                  )}
                </select>
          


                <button type="submit">Add Parent</button>

              </form>
              )}
            </Mutation>
          }
        }}
      </Query>
    )

  }

}

export default AddParentDetail;