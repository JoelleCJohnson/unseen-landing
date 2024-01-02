import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LeadForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Text className="text-muted">
        We'll never share your phone number with anyone else.
      </Form.Text>

      <br/>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}
