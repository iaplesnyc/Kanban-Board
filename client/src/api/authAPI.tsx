import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<string | null> => {
  try {
    const response = await fetch('/api/auth/login', {  // <-- corrected endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data.token; // Return the token to the caller
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

export { login };
