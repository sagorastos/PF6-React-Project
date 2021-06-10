import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input, FormText, Container, Jumbotron } from "reactstrap";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import { addCourse, fetchCourse, updateCourse } from "../api";
import { useHistory } from "react-router-dom";

function EditCourse() {
  const match = useRouteMatch().params.id;
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [imagepath, setImagePath] = useState("");
  const [bookable, setBookable] = useState("");
  const [instructors, setInstructors] = useState({ "01": false, "02": false });
  const [description, setDescription] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [earlybird, setEarlyBird] = useState("");
  const [normalprice, setNormalPrice] = useState("");

  useEffect(() => {
    const fetchCourseData = async () => {
      const responseCourse = await fetchCourse(match);
      setTitle(responseCourse.title);
      setDuration(responseCourse.duration);
      setImagePath(responseCourse.imagePath);
      setBookable(responseCourse.open);

      let instructorsKeys = Object.keys(instructors);
      responseCourse.instructors.forEach((instructor, i) => {
        if (instructor === instructorsKeys[0]) {
          setInstructors((instructors) => ({
            ...instructors,
            [instructorsKeys[0]]: true,
          }));
        }
        if (instructor === instructorsKeys[1]) {
          setInstructors((instructors) => ({
            ...instructors,
            [instructorsKeys[1]]: true,
          }));
        }
      });

      setDescription(responseCourse.description);
      setStartDate(responseCourse.dates.start_date);
      setEndDate(responseCourse.dates.end_date);
      setEarlyBird(responseCourse.price.early_bird);
      setNormalPrice(responseCourse.price.normal);
    };

    fetchCourseData();
  }, []);

  const onInputChange = (event, setState) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    if (name === "instructors") {
      setState((instructors) => ({
        ...instructors,
        [event.target.value]: value,
      }));
    } else {
      setState(value);
    }
  };
  const modifyCourseData = async () => {
    const data = {
      id: match,
      title: title,
      imagePath: imagepath,
      price: {
        normal: normalprice,
        early_bird: earlybird,
      },
      dates: {
        start_date: startdate,
        end_date: enddate,
      },
      duration: duration,
      open: bookable,
      instructors: Object.keys(instructors).reduce((acc, key) => {
        if (instructors[key]) {
          acc.push(key);
        }
        return acc;
      }, []),
      description: description,
    };
    await updateCourse(data);
  };

  return (
    <Jumbotron>
      <h1>Edit Course</h1>
      <Form>
        <Form.Group key={"title"} controlId={"title"}>
          <Label for="title">Title:</Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            name="title"
            onChange={(e) => onInputChange(e, setTitle)}
          />
        </Form.Group>
        <Form.Group>
          <Label for="Duration">Duration:</Label>
          <Form.Control
            type="text"
            placeholder="Duration"
            value={duration}
            name="duration"
            onChange={(e) => onInputChange(e, setDuration)}
          />
        </Form.Group>
        <Form.Group>
          <Label for="ImagePath">Image Path:</Label>
          <Form.Control
            type="text"
            placeholder="Image Path"
            value={imagepath}
            name="imagepath"
            onChange={(e) => onInputChange(e, setImagePath)}
          />
        </Form.Group>
        <Form.Group>
          <Label check>
            <Input type="checkbox" name="bookable" checked={bookable} onChange={(e) => onInputChange(e, setBookable)} />
            Bookable
          </Label>
        </Form.Group>
        <hr className="my-2" />
        <h2>Instructors</h2>
        <Form.Group check>
          <Label check>
            <Input
              type="checkbox"
              name="instructors"
              onChange={(e) => onInputChange(e, setInstructors)}
              checked={instructors["01"]}
              value="01"
            />{" "}
            John Tsevdos
          </Label>
        </Form.Group>
        <Form.Group check>
          <Label check>
            <Input
              type="checkbox"
              name="instructors"
              onChange={(e) => onInputChange(e, setInstructors)}
              checked={instructors["02"]}
              value="02"
            />
            Yiannis Nikolakopoulos
          </Label>
        </Form.Group>
        <hr className="my-2" />
        <Form.Group>
          <Label for="description">Description:</Label>
          <Input
            type="textarea"
            placeholder="Description"
            value={description}
            name="description"
            onChange={(e) => onInputChange(e, setDescription)}
          />
        </Form.Group>
        <hr className="my-2" />
        <h2>Dates</h2>
        <Form.Group>
          <Label for="startDate">Start date:</Label>
          <Input
            type="text"
            name="startDate"
            value={startdate}
            placeholder="Start date"
            onChange={(e) => onInputChange(e, setStartDate)}
          />
        </Form.Group>
        <Form.Group>
          <Label for="endDate">End date:</Label>
          <Input
            type="text"
            name="endDate"
            value={enddate}
            onChange={(e) => onInputChange(e, setEndDate)}
            placeholder="End date"
          />
        </Form.Group>
        <hr className="my-2" />
        <h2>Price</h2>
        <Form.Group>
          <Label for="Early Bird">Early Bird:</Label>
          <Input
            type="number"
            name="earlyBird"
            value={earlybird}
            placeholder="0"
            onChange={(e) => onInputChange(e, setEarlyBird)}
          />
        </Form.Group>
        <Form.Group>
          <Label for="Normal price">Normal price:</Label>
          <Input
            type="number"
            name="normalPrice"
            value={normalprice}
            placeholder="0"
            onChange={(e) => onInputChange(e, setNormalPrice)}
          />
        </Form.Group>
        <hr className="my-2" />
      </Form>

      <Button
        variant="primary"
        className="float-right"
        onClick={() => {
          modifyCourseData();
          history.push(`/courses/${match}`);
        }}
      >
        Edit Course
      </Button>
    </Jumbotron>
  );
}

export default EditCourse;
