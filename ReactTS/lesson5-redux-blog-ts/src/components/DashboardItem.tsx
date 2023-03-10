import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

interface DashboardType  {
  count:number;
  photo:string;
  title:string;
  desc:string;
  id:string
}

const DashboardItem:React.FC<DashboardType> = ({count,photo,title,desc,id}) => {
  return (
    <tr>
    <td>{count+1}</td>
    <td><img width={100} src={photo} alt="" /></td>
    <td>{title}</td>
    <td>{desc}</td>
    <td>
      <LinkContainer to={`/edit/${id}`}>
      <Button variant='warning'>Edit</Button>
      </LinkContainer>
    </td>
  </tr>
  )
}

export default DashboardItem