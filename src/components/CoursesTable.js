import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function CoursesTable({ id, title, open, price, dates }) {
  const history = useHistory();
  return (
    <tr>
      <td>{title}</td>
      <td>{open ? "✓" : "X"}</td>
      <td>{price.normal} €</td>
      <td>
        {dates.start_date} - {dates.end_date}
      </td>
      <td>
        <Button color="info" onClick={() => history.push(`/courses/${id}`)}>
          View Details
        </Button>
      </td>
    </tr>
  );
}

export default CoursesTable;
