import React from 'react'

export default function table( {users ,deleteSubmit}) {
  return (
    <table>
      <tbody>
    <tr>
      <th>ID</th>
      <th>Created Date</th>
      <th>status</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>User Name</th>
      <th>Registration Number</th>
      <th>Action</th>
    </tr>
    {users.map((val, key) => {
      return (
        <tr key={key}>
          <td>{val.id}</td>
          <td>{(new Date(val.createdDate)).toLocaleDateString()}</td>
          <td ><button className={val.status}>{val.status}</button> </td>
          <td>{val.firstName}</td>
          <td>{val.lastName}</td>
          <td>{val.userName}</td>
          <td>{val.registrationNumber}</td>
          <td><button className="delete" onClick={() => deleteSubmit(val.id)}><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/25/000000/external-delete-multimedia-kiranshastry-solid-kiranshastry.png" alt='ok'/></button></td>
        </tr>
      )
    })}
    </tbody>
  </table>
  )
}
