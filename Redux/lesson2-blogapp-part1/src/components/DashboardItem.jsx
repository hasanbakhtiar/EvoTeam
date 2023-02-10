import React from 'react'

const DashboardItem = ({count,photo,title,desc}) => {
  return (
    <tr>
    <td>{count}</td>
    <td><img width={100} src={photo} alt="" /></td>
    <td>{title}</td>
    <td>{desc}</td>
  </tr>
  )
}

export default DashboardItem