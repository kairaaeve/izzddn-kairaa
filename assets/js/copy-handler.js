// assets/js/copy-handler.js
document.querySelectorAll('.btn-copy').forEach(btn => {
  btn.addEventListener('click', () => {
    // find the account number in the same card
    const account = btn
      .closest('.card-qr')
      .querySelector('.form-control p')
      .textContent;
    copyText(btn, account);
  });
});