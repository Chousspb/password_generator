console.log('JavaScript code loaded');

const copyButton = document.getElementById('copy-button');
const passwordField = document.querySelector('.alert-success');
copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordField.textContent);
  copyButton.textContent = 'Copied!';
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 2000);
});


