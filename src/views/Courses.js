import React, { useState, useEffect } from "react";
import CoursesCard from '../components/CoursesCard';
import { fetchCourses } from '../api';
import { Row, Col, Container} from 'reactstrap';


const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetshData = async () => {
      const responseCourses = await fetchCourses();
      setCourses(responseCourses);
      console.log(setCourses);
    };

    fetshData();
  }, []);

  return (
    <div >
      
      <Container>
      <h2>All Courses</h2>
        <Row >
          {courses.map((data) =>
            <Col md="4" className="mt-2" >
              <CoursesCard
                key={data.id} {...data} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
