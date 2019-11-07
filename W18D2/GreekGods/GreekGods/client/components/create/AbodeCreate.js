import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Mutations from '../../graphql/mutations';
const { NEW_ABODE } = Mutations;
import Queries from "../../graphql/queries";
const { FETCH_ABODES } = Queries;

class AbodeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      coordinates: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCache = this.updateCache.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e, newAbode) {
    e.preventDefault();
    let name = this.state.name;

    // our newAbode function will accept an object with the key of "variables" pointing to an object with all our passed in variables.
    newAbode({
      variables: {
        name: name,
        coordinates: this.state.coordinates,
        description: this.state.description
      }
    })
      // after our mutation has run we want to reset our state and show our user the success message
      .then(data => {
        console.log(data);
        this.setState({
          message: `New abode "${name}" created successfully`,
          name: "",
          coordinates: ""
        });
      })
  }

  updateCache(cache, { data: { newAbode } }) {
    let abode;
    try {
      abode = cache.readQuery({ query: FETCH_ABODES });
    } catch (err) {
      return;
    }

    if (abode) {
      let abodeArray = abode.abode;

      cache.writeQuery({
        query: FETCH_ABODES,
        data: { abodes: abodeArray.concat(newAbode) }
      });
    }
  }

  render (){
    return (
      <Mutation
        mutation= {NEW_ABODE}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newAbode, {data}) => (
          <div>
            <form onSubmit={e => this.handleSubmit(e, newAbode)}>
              <input
                onChange={this.update("name")}
                value={this.state.name}
                placeholder="Name"
              />
              <input type="text" 
                value={this.state.coordinates}
                onChange={this.update("coordinates")}
                placeholder="coordinates"
               />
              <button type="submit">Create Abode</button>
            </form>
            <p>{this.state.message}</p>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AbodeCreate;