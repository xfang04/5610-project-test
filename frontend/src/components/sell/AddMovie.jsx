import Form from "react-bootstrap/Form";
import React from "react";

const AddMovie = () => {
  return (
    <div>
      <Form.Control type="text" placeholder="Normal text" />
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
    </div>
  );
};

export default AddMovie;
