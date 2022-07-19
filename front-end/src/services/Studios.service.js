import { apiUrl } from "./Api.service"

export async function getStudios(studioId) {
    // fetch(`${process.env.REACT_APP_API_URL}/studios`)
    const response = await fetch(`${apiUrl}/studios`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const getStudioById = async (studioId) => {
    // fetch(`${process.env.REACT_APP_API_URL}/studios`)
    const response = await fetch(`http://localhost:3001/studios/${studioId}?_embed=schedulings`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}