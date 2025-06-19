const API_URL = 'http://localhost:5000/api/auth';

document.getElementById('register-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'dashboard.html';
    } else {
      alert(data.msg || 'Erro ao registrar');
    }
  } catch (error) {
    console.error('Erro:', error);
  }
});

document.getElementById('login-form')?.addEvent
