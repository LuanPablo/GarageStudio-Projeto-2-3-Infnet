import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function PortalHeader({title, buttonText, buttonLink}){
    return(
        <div className="d-sm-flex align-items-center mt-4 mb-2 text-white">
            <h1>{title}</h1>
            <Button as={Link} size='sm' className="ms-sm-3 text-uppercase"to={buttonLink}>{buttonText}</Button>
        </div>
    )
}