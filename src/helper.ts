export const   LoadAction= async(obj:object)=> {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token); // Store token in localStorage
      return token;
    } catch (error) {
      console.error(error);
      return false;
    }
  }