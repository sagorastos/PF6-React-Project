import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function CoursesCard({ id, title, open, price, dates, imagePath, duration }) {
  const history = useHistory();
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardImg top width="100%" src={imagePath} alt="Card image cap" />
          <CardText>
            Price:{price.normal} | {open ? "✓" : "X"}
            <br />
            Duration:{duration} <br />
            Dates:{dates.start_date} - {dates.end_date}
          </CardText>
          <Button color="info" onClick={() => history.push(`/courses/${id}`)}>
            View Course
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CoursesCard;
