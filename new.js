const getData = () => {
    const password = document.getElementById('passwordlogin').value;
    const email = document.getElementById('emaillogin').value;
  
    const user = JSON.parse(window.localStorage.getItem('user'));
  
    if (email !== user.email || password !== user.password) {
      alert('Você digitou algo errado');
      return;
    }
  
    document.getElementById('texto').innerHTML = `Bem-vindo, ${user.name}`;
  };
  
  const logOut = () => {
    window.localStorage.setItem('user', '');
  };
  
  const setData = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const name = 'Carlos';
    const idade = 18;
  
    if (password.length < 6) {
      alert('Sua senha precisa ter no mínimo 6 carácteres');
      return;
    }
  
    const obj = {
      name,
      email,
      password,
      idade,
    };
  
    window.localStorage.setItem('user', JSON.stringify(obj));
  };
  
  const getData = () => {
    const password = document.getElementById('passwordlogin').value;
    const email = document.getElementById('emaillogin').value;
  
    const passwordLocalStorage = window.localStorage.getItem('password');
    const emailLocalStorage = window.localStorage.getItem('email');
  
    if (email !== emailLocalStorage || password !== passwordLocalStorage) {
      alert('Você digitou algo errado');
      return;
    }
  
    window.location.href = 'https://google.com';
  };
  
  const setData = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (password.length < 6) {
      alert('Sua senha precisa ter no mínimo 6 carácteres');
      return;
    }
  
    window.localStorage.setItem('password', password);
    window.localStorage.setItem('email', email);
  };
  