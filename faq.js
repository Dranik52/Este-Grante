const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');

    // Закрыть остальные
    faqItems.forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
  });
});


const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
threshold: 0.1
};
