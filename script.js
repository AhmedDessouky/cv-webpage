// Welcome message on page load
window.addEventListener('load', () => {
  const welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.textContent = "Welcome to Ahmed El Dessouky's portfolio page!";
});

// Dark mode / light mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark')
    ? 'Toggle Light Mode'
    : 'Toggle Dark Mode';
});

// Show / hide sections
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsList = document.getElementById('skillsList');
toggleSkillsBtn.addEventListener('click', () => {
  skillsList.classList.toggle('hidden');
  toggleSkillsBtn.textContent = skillsList.classList.contains('hidden')
    ? 'Show Skills'
    : 'Hide Skills';
});

const toggleAchievementsBtn = document.getElementById('toggleAchievementsBtn');
const achievementsList = document.getElementById('achievementsList');
toggleAchievementsBtn.addEventListener('click', () => {
  achievementsList.classList.toggle('hidden');
  toggleAchievementsBtn.textContent = achievementsList.classList.contains('hidden')
    ? 'Show Achievements'
    : 'Hide Achievements';
});

// Dynamic skills list
const addSkillBtn = document.getElementById('addSkillBtn');
const skillInput = document.getElementById('skillInput');
addSkillBtn.addEventListener('click', () => {
  const newSkill = skillInput.value.trim();

  if (newSkill === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = newSkill;
  skillsList.appendChild(li);
  skillsList.classList.remove('hidden');
  toggleSkillsBtn.textContent = 'Hide Skills';
  skillInput.value = '';
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = 'Please complete all required fields.';
    formMessage.style.color = '#dc2626';
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = '#dc2626';
    return;
  }

  formMessage.textContent = 'Message sent successfully!';
  formMessage.style.color = '#16a34a';
  contactForm.reset();
});
