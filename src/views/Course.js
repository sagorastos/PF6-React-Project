import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { fetchCourses, fetchInstructors } from "../api";
import Instructor from "../components/Instructor";
import { Button, Container, Row, Col } from "reactstrap";

const Course = () => {
  const match = useRouteMatch().params.id;
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseCourses = await fetchCourses();
      setCourses(responseCourses);
      const responseInstructors = await fetchInstructors();
      setInstructors(responseInstructors);
    };

    fetchData();
  }, []);

  let courseInfo = {};
  courses.forEach((course) => {
    if (course.id === match) {
      courseInfo = {
        id: course.id,
        title: course.title,
        imagePath: course.imagePath,
        start_date: course.dates.start_date,
        end_date: course.dates.start_date,
        normalPrice: course.price.normal,
        earlyBirdPrice: course.price.early_bird,
        duration: course.duration,
        open: course.open,
        instructors: course.instructors,
        description: course.description,
      };
    }
  });

  let instructorInfo = [];
  instructors.forEach((instructor) => {
    courseInfo.instructors.forEach((person, i) => {
      if (instructor.id == person) {
        instructorInfo[i] = {
          id: instructor.id,
          gender: instructor.gender,
          firstName: instructor.name.first,
          lastName: instructor.name.last,
          email: instructor.email,
          dob: instructor.dob,
          bio: instructor.bio,
          linkedin: instructor.linkedin,
        };
      }
    });
  });

  return (
    <div>
      <h1>{courseInfo.title}</h1>
      <img src={courseInfo.imagePath} className="img-fluid" alt="Course image" style={{ maxWidth: "40%" }} />
      <Container className="themed-container m-4" fluid={true}>
        <Row>
          <Col xs="auto">
            <div>Price: {courseInfo.normalPrice}$</div>
            <div>Bookable: {courseInfo.open ? "✓" : "X"}</div>
          </Col>
          <Col xs="auto">
            <div>Duration: {courseInfo.duration}</div>
            <div>
              Dates: {courseInfo.start_date} - {courseInfo.end_date}
            </div>
          </Col>
        </Row>
      </Container>
      <div dangerouslySetInnerHTML={{ __html: courseInfo.description }} className="m-4"></div>
      <div>
        <Button color="primary">Edit</Button>
        <Button color="danger">Delete</Button>
      </div>
      <h2>Instructors</h2>
      {instructorInfo.map((instructor) => (
        <Instructor key={instructor.id} {...instructor} />
      ))}
    </div>
  );
};

export default Course;
