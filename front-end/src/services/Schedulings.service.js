import { apiUrl, getAuthorizationHeaders } from "./Api.service"

export const createScheduling = async (inscriptionData) => {
  const response = await fetch(`${apiUrl}/inscriptions`, {
    method: 'POST',
    body: JSON.stringify(inscriptionData),
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}