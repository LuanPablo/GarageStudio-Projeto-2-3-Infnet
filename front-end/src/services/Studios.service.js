export const getStudios = async (studioId) => {
    // fetch(`${process.env.REACT_APP_API_URL}/studios`)
    const response = await fetch(`http://localhost:3001/studios`)
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