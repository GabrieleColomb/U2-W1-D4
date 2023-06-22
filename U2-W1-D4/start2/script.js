document.addEventListener('DOMContentLoaded', function() {
    var parole = Array.from(document.getElementsByClassName('parola-ruotante'));
    var index = 0;
  
    setInterval(function() {
      var parolaCorrente = parole[index];
      var parolaSuccessiva = parole[(index + 1) % parole.length];
  
      parolaCorrente.classList.remove('active');
      parolaSuccessiva.classList.add('active');
  
      setTimeout(function() {
        parolaCorrente.style.opacity = '0';
      }, 2000);
  
      setTimeout(function() {
        parolaCorrente.style.display = 'none';
        parolaSuccessiva.style.display = 'initial';
      }, 3000);
  
      index = (index + 1) % parole.length;
    }, 8000);
  });