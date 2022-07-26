
import { Alert, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


export function TableSchedulings({ schedulings, studios }) {
const handleClick = (scheduling) =>{
  
} 
  return (
    <>
      <Table className="text-white shadow border" responsive>
        <thead >
          <tr>
            <th>Cod. Estúdio</th>
            <th>Serviço</th>
            <th>Dia</th>
            <th>horário</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {schedulings.map(scheduling => (
            <tr key={scheduling.id}>
              <td>{scheduling.studioId}</td>
              <td>{scheduling.service}</td>
              <td>{scheduling.day}</td>
              <td>{scheduling.hour}</td>
              <td className="d-grid gap-1 d-sm-table-cell"><Button
                size="sm"
                as={Link}
                to={`/portal/schedulings/${schedulings.id}`}
                >Editar
                </Button>
                <Button
                size="sm"
                variant="danger"
                className="ms-sm-1"
                onClick={()=>handleClick(scheduling)}
                >Cancelar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
