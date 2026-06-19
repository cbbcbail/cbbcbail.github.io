// Add blank target and no opener attributes to anchor tags
document.querySelectorAll('a[href^="http"]').forEach(a => {
  if (a.host !== location.host) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
});