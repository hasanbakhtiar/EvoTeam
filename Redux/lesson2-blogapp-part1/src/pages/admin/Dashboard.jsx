import React from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import DashboardItem from "../../components/DashboardItem";
const Dashboard = (props) => {
  return (
    <>
      <h1 className="text-center my-5">Admin Panel</h1>
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
          {props.pvalue.map((item, i) => {
           return <DashboardItem
              title={item.title}
              desc={item.desc}
              photo={item.img}
              count={i}
            />;
          })}
        </tbody>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pvalue: state,
  };
};

export default connect(mapStateToProps)(Dashboard);
