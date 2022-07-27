
import { useState } from "react";
import { Alert, Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteScheduling } from "../../services/Schedulings.service";


export function TableSchedulings({ schedulings, onDeleteScheduling }) {
  
  const [schedulingToDelete, setSchedulingToDelete] = useState()
  const hideModal = () => setSchedulingToDelete(undefined)
  const handleClick = (scheduling) => {
    setSchedulingToDelete(scheduling)
  }
  const handleDelete = async () => {
    try {
      await deleteScheduling(schedulingToDelete.id)
      await onDeleteScheduling()
      toast.success('Serviço deletado com sucesso.')
    } catch {
      toast.error('Falha ao deletar serviço.')
    }
    hideModal()
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
                to={`/portal/scheduling/${scheduling.id}`}
              >Editar
              </Button>
                <Button
                  size="sm"
                  variant="danger"
                  className="ms-sm-1"
                  onClick={() => handleClick(scheduling)}
                >Cancelar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={schedulingToDelete} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tem certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>O <strong>{schedulingToDelete?.service}</strong> será excluído.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Deletar serviço</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
