import { apiUrl, getAuthorizationHeaders } from "./Api.service"

export const createScheduling = async (schedulingData) => {
  const response = await fetch(`${apiUrl}/schedulings`, {
    method: 'POST',
    body: JSON.stringify(schedulingData),
    headers: {
      'content-type': 'application/json',
      ...getAuthorizationHeaders()
    }
  })
  if (!response.ok) {
    throw new Error('Response not ok.')
  }
}