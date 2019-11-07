import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
const { REMOVE_GOD_EMBLEM } = Mutations;
const { FETCH_GOD } = Queries;

const linkStyle = {
  cursor: "pointer",
  fontSize: "10px",
  color: "red"
};

const refetchGod = godId => () => {
  return [
    {
      query: FETCH_GOD,
      variables: { godId }
    }
  ];
}

const submitRemove = (godId, emblemId, removeGodEmblem) => {
  return e => {
    e.preventDefault();
    removeGodEmblem({ variables: { godId, emblemId } });
  }
}

const RemoveEmblem = props => (
  <ul>
    {props.emblems.map(emblem => (
      <li key={`emblem-remove-${emblem.id}`}><p>{emblem.name}</p>
        <Mutation mutation={REMOVE_GOD_EMBLEM} refetchQueries={refetchGod(props.id)}>
          {(removeGodEmblem, { data }) => (
            <a style={linkStyle} onClick={submitRemove(props.id, emblem.id, removeGodEmblem)}>
              <p>Delete</p>
            </a>
          )}
        </Mutation>
      </li>
    ))}
  </ul>
);

export default RemoveEmblem;