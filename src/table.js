import React from 'react'

export default function table( {users ,deleteSubmit}) {
  return (
    <div className='add'>
    <table >
      <tbody>
    <tr>
      <th className='md'>ID</th>
      <th className='lg'>Created Date</th>
      <th >status</th>
      <th className='sl'>First Name</th>
      <th className='sl'>Last Name</th>
      <th>User Name</th>
      <th className='lg'>Registration Number</th>
      <th>Action</th>
    </tr>
    {users.map((val, key) => {
      return (
        <tr key={key}>
          <td className='md'>{val.id}</td>
          <td className='lg'>{(new Date(val.createdDate)).toLocaleDateString()}</td>
          <td  ><button className={val.status}>{val.status}</button> </td>
          <td className='sl'>{val.firstName}</td>
          <td className='sl'>{val.lastName}</td>
          <td>{val.userName}</td>
          <td className='lg'>{val.registrationNumber}</td>
          <td><button className="delete" onClick={() => deleteSubmit(val.id)}><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/25/000000/external-delete-multimedia-kiranshastry-solid-kiranshastry.png" alt='ok'/></button></td>
        </tr>
      )
    })}
    </tbody>
  </table>
  </div>
  )
}
