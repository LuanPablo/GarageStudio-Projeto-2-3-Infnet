import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"



const emptyFormData = {
   
    service: '',
    day: '',
    hour: '',
    local: '',
    studioId: '',
    id:''
}
export function UpsertSchedulingForm({ initialValue = emptyFormData, buttonLabel = 'Cadastrar', onSubmit}) {
    const [formData, setFormData] = useState(initialValue)
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(formData)
    }

    return (
        <Row className="justify-content-md-center mt-5">
            <Col md="4" lg="4" >
               
                <Form onSubmit={handleSubmit} className="text-white">
                    
                    <Form.Group className="mb-3" controlId="shedulings-local">
                        <Form.Label className="mb-0">Estúdio</Form.Label>
                        <Form.Control
                            placeholder="Mesquita, Niteroi, Madureira, Cachambi..."
                            name="local"
                            value={formData.local}
                            onChange={handleChange}
                  
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="shedulings-service">
                        <Form.Label className="mb-0">Serviço</Form.Label>
                        <Form.Control
                            placeholder="Ensaio, gravação..."
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="shedulings-day">
                        <Form.Label className="mb-0">Dia</Form.Label>
                        <Form.Control
                            placeholder="dia/mês/ano"
                            name="day"
                            value={formData.day}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="shedulings-hour">
                        <Form.Label className="mb-0">Horário</Form.Label>
                        <Form.Control
                            placeholder="hh:mm"
                            name="hour"
                            value={formData.hour}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button type="submit">{buttonLabel}</Button>
                </Form>
            </Col>
        </Row>
    )
} 