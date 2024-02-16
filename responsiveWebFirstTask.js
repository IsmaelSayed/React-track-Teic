const showContentBtn = document.getElementById('show-content-btn');
const hiddenContent = document.getElementById('hidden-content');

showContentBtn.addEventListener('click', () => {
  hiddenContent.style.display = 'block';
});
