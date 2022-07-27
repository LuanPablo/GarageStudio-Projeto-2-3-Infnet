import { Container } from "react-bootstrap";
import { Layout } from "../../componentes/Layout";
import { UpsertSchedulingForm } from "../../componentes/UpsertSchedulingForm";
import { createScheduling } from "../../services/Schedulings.service";
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

export function AdminAddSchedulingView() {
    const navigate = useNavigate()
    
    const handleSubmit = async (formData) => {
        try {
            await createScheduling(formData)
            toast.success('Horário cadastrado com sucesso')
            navigate('/portal/schedulings')
        } catch {
            toast.error('Falha ao cadastrar')   
        }
    }
    return (
        <Layout>
            <Container>
                <TitleStyled>Cadastrar novo horário</TitleStyled>
                <UpsertSchedulingForm onSubmit={handleSubmit}/>
            </Container>
        </Layout>
    )
}

const TitleStyled = styled.h2`
    color: #fff;
    margin: 2rem;
    text-align: center;
`