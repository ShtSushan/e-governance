import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function RegistrationForm({ formType }) {
  const [formData, setFormData] = useState({ name: "", date: "", details: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${formType.toUpperCase()} Registration Submitted!\n` + JSON.stringify(formData, null, 2));
    setFormData({ name: "", date: "", details: "" });
  };

  return (
    <div>
      <h2 className="mb-4">{formType.charAt(0).toUpperCase() + formType.slice(1)} Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control as="textarea" rows={3} name="details" value={formData.details} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default RegistrationForm;
