import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MarriageRegistration = () => {
  const [data, setData] = useState({
    spouse1: '', spouse2: '', gender1: '', gender2: '',
    date: '', place: '', father1: '', father2: '',
    address1: '', address2: '', id1: '', id2: '',
    witness1: '', witness2: '', contactWitness: '', notes: ''
  });

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Marriage registration submitted:\n' + JSON.stringify(data, null, 2));
    setData({
      spouse1: '', spouse2: '', gender1: '', gender2: '',
      date: '', place: '', father1: '', father2: '',
      address1: '', address2: '', id1: '', id2: '',
      witness1: '', witness2: '', contactWitness: '', notes: ''
    });
  }

  return (
    <div>
      <h2>Marriage Registration</h2>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Spouse 1 Full Name</Form.Label>
          <Form.Control type="text" name="spouse1" value={data.spouse1} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Spouse 1 Gender</Form.Label>
          <Form.Select name="gender1" value={data.gender1} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Spouse 2 Full Name</Form.Label>
          <Form.Control type="text" name="spouse2" value={data.spouse2} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Spouse 2 Gender</Form.Label>
          <Form.Select name="gender2" value={data.gender2} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date of Marriage</Form.Label>
          <Form.Control type="date" name="date" value={data.date} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Place of Marriage</Form.Label>
          <Form.Control type="text" name="place" value={data.place} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Spouse 1 Father’s Name</Form.Label>
          <Form.Control type="text" name="father1" value={data.father1} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Spouse 2 Father’s Name</Form.Label>
          <Form.Control type="text" name="father2" value={data.father2} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Residential Address Spouse 1</Form.Label>
          <Form.Control type="text" name="address1" value={data.address1} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Residential Address Spouse 2</Form.Label>
          <Form.Control type="text" name="address2" value={data.address2} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>National ID Spouse 1</Form.Label>
          <Form.Control type="text" name="id1" value={data.id1} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>National ID Spouse 2</Form.Label>
          <Form.Control type="text" name="id2" value={data.id2} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Witness 1 Name</Form.Label>
          <Form.Control type="text" name="witness1" value={data.witness1} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Witness 2 Name</Form.Label>
          <Form.Control type="text" name="witness2" value={data.witness2} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Witness Contact Number / Email</Form.Label>
          <Form.Control type="text" name="contactWitness" value={data.contactWitness} onChange={handleChange} />
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

export default MarriageRegistration;
