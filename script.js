(() => {
  const button = document.getElementById('copy-bib');
  const source = document.getElementById('bibtex');
  if (!button || !source) return;

  button.addEventListener('click', async () => {
    const text = source.innerText;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 1400);
    } catch (_) {
      button.textContent = 'Select & copy';
    }
  });
})();
