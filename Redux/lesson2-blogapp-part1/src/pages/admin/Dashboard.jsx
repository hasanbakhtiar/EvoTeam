import React from 'react'
import Table from 'react-bootstrap/Table';
import DashboardItem from '../../components/DashboardItem';
const Dashboard = () => {
  return (
<>
<h1 className='text-center my-5'>Admin Panel</h1>
<Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Title</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>

    <DashboardItem />
    <DashboardItem />
    <DashboardItem />

    </tbody>
  </Table>
</>
  )
}

export default Dashboard