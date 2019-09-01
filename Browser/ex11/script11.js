window.onload = function() {
  const userName = prompt("Input your Username");
  const password = prompt("Input your Password");

  if (userName) {
    alert(`Welcome ${userName}`);
  }

  setTimeout(function() {
    const confirmLogin = confirm("Do you still want to be logged?");
    if (confirmLogin) {
      console.log(`${userName} your session has been restored`);
    } else {
      console.log(`${userName} your session has expaired`);
    }
  }, 10000);
};
