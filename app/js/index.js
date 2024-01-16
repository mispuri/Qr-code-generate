let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');
const alertText = document.querySelector('.alert');

async function generateQr() {
  if (qrText.value.length > 0) {
    qrImg.src =
      (await 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=') +
      qrText.value;
    imgBox.classList.add('show-img');
    alertText.style.display = 'none';
  } else {
    alertText.style.display = 'block';
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.remove('error');
    }, 1000);
  }
}

qrText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    generateQr();
  }
});
