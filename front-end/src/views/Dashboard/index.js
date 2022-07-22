import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LayoutPortal } from "../../components/LayoutPortal";
import { selectUser } from "../../store/User/User.selectors";

export function DashboardView () {
  const user = useSelector(selectUser)
  return (
    <LayoutPortal>
      <h1 className="mt-4">Bem vindo(a) {user.name}!</h1>
      {user.type === 1 ? (
        <p>Utilize o menu para gerenciar os dados do site.</p>
      ) : (
        <Alert variant="info">Você receberá as instruções do curso por e-mail.</Alert>
      )}
    </LayoutPortal>
  )
}