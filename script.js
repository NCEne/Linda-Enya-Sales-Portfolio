// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Dismiss the "edit me" dev banner (safe to delete this whole block once the
// placeholders below are filled in and the banner div is removed from index.html)
const banner = document.getElementById('editBanner');
const dismissBtn = document.getElementById('dismissBanner');
if (dismissBtn) {
  dismissBtn.addEventListener('click', () => banner.classList.add('is-hidden'));
}

// Gentle scroll-reveal for sections
const revealTargets = document.querySelectorAll('.section, .hero');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// Placeholder boxes: clicking shows what's expected there (helper for editing, harmless in production)
document.querySelectorAll('.placeholder-box, [data-note]').forEach((el) => {
  el.addEventListener('click', () => {
    const note = el.getAttribute('data-note');
    if (note) alert(note);
  });
});
