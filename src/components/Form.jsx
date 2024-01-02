import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LeadForm() {
  return (
    <>
      <div style={{ display: "flex"}}>
        <div>
          <h1 style={{ margin: "100px" }}>Welcome to Unseen</h1>

          <p>
            The first fully accessible mobile dating app for the visually
            impaired and blind
          </p>

          <Form style={{ width: "50vw" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control placeholder="Enter full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter phone number" />
              <Form.Text className="text-muted">
                We'll never share your phone number with anyone else.
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Text className="text-muted">
              By clicking 'Join Now', you agree to our Terms of Service and
              Privacy Policy.
            </Form.Text>
            <br />
            <Button variant="primary" type="submit">
              Join the Waitlist
            </Button>
            <br />
          </Form>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignContent: "center", backgroundColor: "lightblue"}}>
          <img
            class="mockup_v2__device_img"
            src="https://unicorn-cdn.b-cdn.net/f8c4871c-db7a-4f44-acb0-6e4854a590ed/apple_iphone_se_2020_black.png"
            alt="device"
            style={{ display: "initial;", width: "25vw", height: "auto" }}
          ></img>
        </div>
      </div>
    </>
  );
}
