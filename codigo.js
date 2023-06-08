var cuentas = [
    { nombre: "Mali", saldo: 1560 },
    { nombre: "Gera", saldo: 14570 },
    { nombre: "Maui", saldo: 1054 }
  ];
  
  var selectedAccount = null;
  
  function login() {
    var accountSelect = document.getElementById("seleccionacuenta");
    var passwordInput = document.getElementById("password-input");
    var selectedOption = accountSelect.options[accountSelect.selectedIndex];
    var selectedIndex = parseInt(selectedOption.value);
    
    if (selectedIndex >= 0 && selectedIndex < cuentas.length) {
      var seleccionacuenta = cuentas[selectedIndex];
    
      var password = passwordInput.value;  
      if (password === "1234") { 
        showAccountInfo(seleccionacuenta);
      } else {
        alert("Contraseña incorrecta");
      }
    }
  }
  
  function showAccountInfo(account) {
    var loginpersona = document.getElementById("login-form");
    var balanceInfo = document.getElementById("balance-info");
    var accountName = document.getElementById("nombrecuenta");
    var accountBalance = document.getElementById("account-balance");
    
    accountName.textContent = "Nombre: " + account.nombre;
    accountBalance.textContent = "Saldo: $" + account.saldo;
    
    loginpersona.style.display = "none";
    balanceInfo.style.display = "block";
  }
  
  function logout() {
    var loginpersona = document.getElementById("login-form");
    var balanceInfo = document.getElementById("balance-info");
    var passwordInput = document.getElementById("password-input");
    
    passwordInput.value = "";
    loginpersona.style.display = "block";
    balanceInfo.style.display = "none";
  }