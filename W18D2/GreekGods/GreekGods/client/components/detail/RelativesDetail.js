import React from 'react'
import { Mutation } from "react-apollo";

import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";


const RelativesDetail = props =>{


  return(
    <div>
      <ParentsDetail relationship={this.props.parents} />
      <SiblingDetail relationship={this.props.siblings}/>
      <ChildDetail relationship={this.props.children}/>
    </div>

  )

}