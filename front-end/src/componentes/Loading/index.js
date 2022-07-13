import { Spinner } from "react-bootstrap";

export function Loading(){
    return(
        <div className="text-center my-5">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Carregando...</span>
            </Spinner>
        </div>
    )
}