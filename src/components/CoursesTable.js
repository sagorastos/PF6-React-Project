import React from "react";
import { Table } from 'reactstrap';

const CoursesTable = ({title, open, price, dates}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{open ? '✓' : 'X'}</td>
      <td>{price.normal} €</td>
      <td>{dates.start_date} - {dates.end_date}</td>
    </tr>   
  );
};

export default CoursesTable;
