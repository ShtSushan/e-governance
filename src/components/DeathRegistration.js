import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const DeathRegistration = () => {
  const [data, setData] = useState({
    name: '', dob: '', placeOfDeath: '', age: '', gender: '',
    cause: '', fatherOrSpouse: '', address: '', nationalID: '',
    informant: '', contact: '', notes: ''
  });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Death registration submitted:\n' + JSON.stringify(data, null, 2));
    setData({
      name: '', dob: '', placeOfDeath: '', age: '', gender: '',
      cause: '', fatherOrSpouse: '', address: '', nationalID: '',
      informant: '', contact: '', notes: ''
    });
  }

  return (
    <div>
      <h2>Death Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name of Deceased</Form.Label>
          <Form.Control type="text" name="name" value={data.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date of Death</Form.Label>
          <Form.Control type="date" name="dob" value={data.dob} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Place of Death</Form.Label>
          <Form.Control type="text" name="placeOfDeath" value={data.placeOfDeath} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age at Death</Form.Label>
          <Form.Control type="number" name="age" value={data.age} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Select name="gender" value={data.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cause of Death</Form.Label>
          <Form.Control type="text" name="cause" value={data.cause} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Father or Spouse Name</Form.Label>
          <Form.Control type="text" name="fatherOrSpouse" value={data.fatherOrSpouse} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Residential Address</Form.Label>
          <Form.Control type="text" name="address" value={data.address} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>National ID</Form.Label>
          <Form.Control type="text" name="nationalID" value={data.nationalID} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Informant Name & Relationship</Form.Label>
          <Form.Control type="text" name="informant" value={data.informant} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact Number / Email</Form.Label>
          <Form.Control type="text" name="contact" value={data.contact} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Additional Notes</Form.Label>
          <Form.Control as="textarea" name="notes" value={data.notes} onChange={handleChange} />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default DeathRegistration;
