import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function PortalHeader ({ title, buttonText, buttonLink }) {
  return (
    <div className="d-sm-flex align-items-center mt-4 mb-2">
      <h1 className="mb-0">{title}</h1>
      <Button as={Link} to={buttonLink} size='sm' className="ms-sm-3">{buttonText}</Button>
    </div>
  )
}