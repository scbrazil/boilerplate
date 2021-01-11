import React from 'react';

const DogTable = props => {
  return(
    <tr>
      <td>{props.id}</td>
      <td>{props.breed}</td>
      {/* <td>{Boolean(props.large)}</td> */}
    </tr>
  )
}

export default DogTable;