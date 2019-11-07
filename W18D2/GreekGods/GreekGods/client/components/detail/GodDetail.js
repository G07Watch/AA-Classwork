import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_GOD } = Queries;
import NameDetail from "./NameDetail";
import TypeDetail from "./TypeDetail";
import DescriptionDetail from "./DescriptionDetail";
import DomainsDetail from "./DomainsDetail";
import AbodeDetail from "./AbodeDetail";
import EmblemsDetail from "./EmblemsDetail";

const GodDetail = props => (
  // there we are getting the `id` for our query from React Router
  <Query query={FETCH_GOD} variables={{ godId: props.match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;
      
      return (
        <div className="detail">
          <NameDetail id={data.god.id} name={data.god.name} />
          <TypeDetail id={data.god.id} name={data.god.type} />
          <DescriptionDetail id={data.god.id} description={data.god.description} />
          <DomainsDetail id={data.god.id} domains={data.god.domains} /> 
          <AbodeDetail id={data.god.id} abodeId={data.god.abode.id} abode={data.god.abode} />
          <EmblemsDetail id={data.god.id} emblems={data.god.emblems} />
          {/* <RelativesDetail id={data.god.id} parents={data.god.parents} siblings={data.god.siblings} children={data.god.children} /> */}
        </div>
      );
    }}
  </Query>
);

export default GodDetail;