import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Jumbotron,
} from "reactstrap";

const AddCourse = () => {
  return (
    <Jumbotron>
      <h1>Add Course</h1>
      <Form>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input type="text" name="title" id="title" placeholder="Title" />
        </FormGroup>
        <FormGroup>
          <Label for="Duration">Duration:</Label>
          <Input
            type="text"
            name="duration"
            id="duration"
            placeholder="Duration"
          />
        </FormGroup>
        <FormGroup>
          <Label for="ImagePath">Image Path:</Label>
          <Input
            type="text"
            name="imagePath"
            id="imagePath"
            placeholder="Image Path"
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Bookable
          </Label>
        </FormGroup>
        <hr className="my-2" />
        <h2>Instructors</h2>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> John Tsevdos
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Yiannis Nikolakopoulos
          </Label>
        </FormGroup>
        <hr className="my-2" />
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input type="textarea" name="description" id="description" />
        </FormGroup>
        <hr className="my-2" />
        <h2>Dates</h2>
        <FormGroup>
          <Label for="startDate">Start date:</Label>
          <Input
            type="text"
            name="startDate"
            id="startDate"
            placeholder="Start date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="endDate">End date:</Label>
          <Input
            type="text"
            name="endDate"
            id="endDate"
            placeholder="End date"
          />
        </FormGroup>
        <hr className="my-2" />
        <h2>Price</h2>
        <FormGroup>
          <Label for="Early Bird">Early Bird:</Label>
          <Input type="number" name="earlyBird" id="earlyBird" placeholder="0" />
        </FormGroup>
        <FormGroup>
          <Label for="Normal price">Normal price:</Label>
          <Input
            type="number"
            name="normalPrice"
            id="normalPrice"
            placeholder="0"
          />
        </FormGroup>
        <hr className="my-2" />
      </Form>
    </Jumbotron>
  );
};

export default AddCourse;
