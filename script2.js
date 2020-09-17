// cadastros 
const setData = () => {
  const name = document.getElementById('n-1').value;
  const email = document.getElementById('email2').value;
  const senha = document.getElementById('password').value;

  if (name.length < 3 ) {
      alert('o nome precisa ter entre 3 e 10 carácteres');
      return;
  };
  if (name.length > 10 ) {
      alert('o nome precisa ter entre 3 e 10 carácteres');
      return;
  };
  if (senha.length < 6) {
    alert('Sua senha precisa ter no mínimo 6 carácteres');
    return;
  }
  window.localStorage.setItem('name', name);
  window.localStorage.setItem('password', senha);
window.localStorage.setItem('email', email);
window.location.href ='login.html';
};

// login
const getData = () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const emailLocalStorage = window.localStorage.getItem('email');
    const senhaLocalStorage = window.localStorage.getItem('password');
  
    if (email !== emailLocalStorage || senha !== senhaLocalStorage) {
      alert('Parece que esta errado :(');
      return;
    }
  
    window.location.href = 'index.html';
  };

