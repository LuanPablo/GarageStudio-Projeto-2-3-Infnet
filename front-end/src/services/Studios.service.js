import { apiUrl, getAuthorizationHeaders } from "./Api.service"

//retorna estúdios
export const getStudios = async () => {
 
  const response = await fetch(`${apiUrl}/studios`)

  if (!response.ok) {
    throw new Error('Response not ok.')
  }
  return response.json()
}

export const getStudioById = async (studioId) => {
  const response = await fetch(`${apiUrl}/studios/${studioId}?_embed=schedulings`)
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
  return response.json()
}
