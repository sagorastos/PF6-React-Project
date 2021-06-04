import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Table, Row, Col } from "reactstrap";
import CoursesTable from '../components/CoursesTable';
import { fetchStats, fetchCourses } from '../api';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const [responseStats, responseCourses] = await Promise.all([fetchStats(), fetchCourses()]);
      setStats(responseStats);
      setCourses(responseCourses);
    };

    fetshData();
  }, []);

  return (
    <div className="App">

      <Jumbotron className="mt-5">
        <h2 className="display-4">Welcome to Code.Hub Dashboard!</h2>
        <p className="lead">
          <strong>Manage everything and have fun!</strong>
        </p>
      </Jumbotron>
{/* 
      <Row>
        {stats.length > 0 &&
          stats.map(({ id, title, amount }) => (
            <Col key={id}>{title} {amount}!!!!</Col>
          ))}
      </Row> */}
      <Table bordered>
        <thead>
          <tr>
              {stats.length > 0 &&
            stats.map(({ id, title, amount }) => (
              <td key={id}>{title} {amount}</td>
           ))}
          </tr>
        </thead>
      </Table>
      <Table>
        <tr className="table-active">
          <td>Last 5 Courses</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
          <tr>
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        <tbody>
          {courses.map((data) => <CoursesTable key={data.id} {...data} />)}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
