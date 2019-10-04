import React from 'react'

const BenchIndexItem = ({ description, lat, lng })=>(
  <li>
    <p>Bench description: {description}</p>
    <p>latitude: {lat}</p>
    <p>longitude: {lng}</p>
  </li>
)

export default BenchIndexItem;