import { apiUrl, getAuthorizationHeaders } from "./Api.service"


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

export const deleteStudio = async studioId => {
  const response = await fetch(`${apiUrl}/studios/${studioId}`, {
    method: 'DELETE',
    headers: getAuthorizationHeaders()
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}

export const createStudio = async studioData => {
  const body = JSON.stringify(studioData)
  const response = await fetch(`${apiUrl}/studios`, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}

export const updateStudio = async (studioId, studioData) => {
  const body = JSON.stringify(studioData)
  const response = await fetch(`${apiUrl}/studios/${studioId}`, {
    method: 'PUT',
    body,
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}