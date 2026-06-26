// Add blank target to anchor tags
document.querySelectorAll('a[href^="http"]').forEach(a => {
  if (a.host !== location.host) {
    a.target = '_blank';
  }
});