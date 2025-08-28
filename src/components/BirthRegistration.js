import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BirthRegistration = () => {
  const [data, setData] = useState({
    childName: '', dob: '', placeOfBirth: '', gender: '',
    fatherName: '', motherName: '', fatherID: '', motherID: '',
    address: '', contact: '', notes: ''
  });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Birth registration submitted:\n' + JSON.stringify(data, null, 2));
    setData({
      childName: '', dob: '', placeOfBirth: '', gender: '',
      fatherName: '', motherName: '', fatherID: '', motherID: '',
      address: '', contact: '', notes: ''
    });
  }

  return (
    <div>
      <h2>Birth Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Child's Full Name</Form.Label>
          <Form.Control type="text" name="childName" value={data.childName} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" name="dob" value={data.dob} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Place of Birth</Form.Label>
          <Form.Control type="text" name="placeOfBirth" value={data.placeOfBirth} onChange={handleChange} required />
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
          <Form.Label>Father's Full Name</Form.Label>
          <Form.Control type="text" name="fatherName" value={data.fatherName} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mother's Full Name</Form.Label>
          <Form.Control type="text" name="motherName" value={data.motherName} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Father's National ID</Form.Label>
          <Form.Control type="text" name="fatherID" value={data.fatherID} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mother's National ID</Form.Label>
          <Form.Control type="text" name="motherID" value={data.motherID} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Residential Address</Form.Label>
          <Form.Control type="text" name="address" value={data.address} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contact Number / Email</Form.Label>
          <Form.Control type="text" name="contact" value={data.contact} onChange={handleChange} required />
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

export default BirthRegistration;
