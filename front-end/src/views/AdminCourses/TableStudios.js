import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteCourse } from "../../services/Courses.service";

export function TableCourses ({ courses, onDeleteCourse }) {
  const [courseToDelete, setCourseToDelete] = useState()
  const hideModal = () => setCourseToDelete(undefined)
  const handleClick = (course) => {
    setCourseToDelete(course)
  }
  const handleDelete = async () => {
    try {
      await deleteCourse(courseToDelete.id)
      await onDeleteCourse()
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
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.coordinator}</td>
              <td className="d-grid gap-1 d-sm-table-cell">
                <Button
                  size="sm"
                  as={Link}
                  to={`/portal/cursos/${course.id}`}
                >Editar</Button>
                <Button
                  size="sm"
                  variant='danger'
                  className="ms-sm-1"
                  onClick={() => handleClick(course)}
                >Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={courseToDelete} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tem certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ao clicar em confirmar, o curso <strong>{courseToDelete?.name}</strong> será excluído. Deseja realmente remover o curso?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Deletar curso</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}