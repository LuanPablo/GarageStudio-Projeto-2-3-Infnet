import { useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { AuthForm } from "../../components/AuthForm"
import { createInscription, createScheduling } from "../../services/Schedulings.service"
import { selectUser } from "../../store/User/User.selectors"

export function SchedulinForm ({ studioId, onRegister }) {
  const user = useSelector(selectUser)
  const [isSubmiting, setIsSubmiting] = useState(false)
  const handleScheduling = async () => {
    try {
      setIsSubmiting(true)
      await createScheduling({
        name: user.name,
        email: user.email,
        courseId: parseInt(studioId),
        userId: user.id
      })
      toast.success('Inscrito com sucesso.')
      onRegister()
    } catch (err) {
      console.error(err)
      toast.error('Falha ao fazer inscrição. Tente novamente.')
    }
    setIsSubmiting(false)
  }
  
}