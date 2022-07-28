import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../componentes/Layout";
import { Loading } from "../../componentes/Loading";
import { getStudioById } from "../../services/Studios.service";
import { NotFoundView } from "../NotFound/";
import { Schedulings } from "./Schedulings";


export function StudioDetailView() {
    const { id } = useParams()
    const [studio, setStudio] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {

        const fetchStudio = async () => {
            try {
                const data = await getStudioById(id)
                setStudio(data)
                setLoading(false)
            } catch (err) {
                const message = err.message === 'Response not ok.'
                    ? '404'
                    : 'Falha'
                setErrorMsg(message)
                setLoading(false)
            }
        }
        fetchStudio()
    }, [id])

    if (loading) {
        return <Loading />
    }
    if (errorMsg === '404') {
        return <NotFoundView />
    }
    return (
        <Layout>
            <Container>
                {errorMsg ? (
                    <Alert variant="danger" className="mt-3">{errorMsg}</Alert>
                ) : (
                    <>
                        <Schedulings schedulings={studio.schedulings}/>
                    </>
                )}
            </Container>
        </Layout>
    )
}