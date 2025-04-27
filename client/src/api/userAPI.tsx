import Auth from '../utils/auth';

const retrieveUsers = async () => {
  try {
    const response = await fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    const data = await response.json();  // <-- parse only after OK
    return data;
  } catch (err) { 
    console.error('Error from data retrieval:', err);
    return [];
  }
}

export { retrieveUsers };
