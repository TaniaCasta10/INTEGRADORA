document.getElementById('create-account-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('create-account-form').style.display = 'block';
  });
  
  document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('create-account-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  });
  