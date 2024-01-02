import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LeadForm() {
  return (
    <>
    <h1 style={{margin: "100px" }}>Welcome to Unseen</h1>

      <p>The first fully accessible mobile dating app for the visually impaired and blind</p>
      <Form style={{width: "50vw"}}>
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

        <br />

        <Button variant="primary" type="submit">
          Join the Waitlist
        </Button>
      </Form>
    </>
  );
}
