// Wait for window to load
document.addEventListener('DOMContentLoaded', function (event) {
  // Get reference to header object
  let myHeader = document.getElementById('header');

  // Wait 3 seconds, then display the header
  SetTimeout(() => {
    myHeader.classList.remove('hidden');
  }, 3000);
});
