import { apiUrl, getAuthorizationHeaders } from "./Api.service"

export const deleteScheduling = async schedulingsId => {
  const response = await fetch(`${apiUrl}/schedulings/${schedulingsId}`, {
    method: 'DELETE',
    headers: getAuthorizationHeaders()
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}

export const createScheduling = async schedulingData => {
  const body = JSON.stringify(schedulingData)
  const response = await fetch(`${apiUrl}/schedulings`, {
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

export const updateScheduling = async (schedulingId, schedulingData) => {
  const body = JSON.stringify(schedulingData)
  const response = await fetch(`${apiUrl}/scheduling/${schedulingId}`, {
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
