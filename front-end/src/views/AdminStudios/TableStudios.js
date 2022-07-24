import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteStudio } from "../../services/Studios.service";

export function TableStudios ({ studios, onDeleteStudio }) {
  const [studioToDelete, setStudioToDelete] = useState()
  const hideModal = () => setStudioToDelete(undefined)
  const handleClick = (studio) => {
    setStudioToDelete(studio)
  }
  const handleDelete = async () => {
    try {
      await deleteStudio(studioToDelete.id)
      await onDeleteStudio()
      toast.success('Curso deletado com sucesso.')
    } catch {
      toast.error('Falha ao deletar curso. Tente novamente.')
    }
    hideModal()
  }
  return (
    <>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Coordenador</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {studios.map(studio => (
            <tr key={studio.id}>
              <td>{studio.id}</td>
              <td>{studio.name}</td>
              <td>{studio.coordinator}</td>
              <td className="d-grid gap-1 d-sm-table-cell">
                <Button
                  size="sm"
                  as={Link}
                  to={`/portal/cursos/${studio.id}`}
                >Editar</Button>
                <Button
                  size="sm"
                  variant='danger'
                  className="ms-sm-1"
                  onClick={() => handleClick(studio)}
                >Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={studioToDelete} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tem certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ao clicar em confirmar, o curso <strong>{studioToDelete?.name}</strong> será excluído. Deseja realmente remover o curso?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Deletar curso</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}