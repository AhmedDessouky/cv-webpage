window.addEventListener('load', () => {
  document.getElementById('welcomeMessage').textContent = "Welcome to Ahmed El Dessouky's interactive CV webpage!";
});

const themeToggle = document.getElementById('themeToggle');
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const toggleProjectsBtn = document.getElementById('toggleProjectsBtn');
const toggleActivitiesBtn = document.getElementById('toggleActivitiesBtn');
const toggleAchievementsBtn = document.getElementById('toggleAchievementsBtn');
const skillsList = document.getElementById('skillsList');
const projectsList = document.getElementById('projectsList');
const activitiesBlock = document.getElementById('activitiesBlock');
const achievementsList = document.getElementById('achievementsList');
const addSkillBtn = document.getElementById('addSkillBtn');
const skillInput = document.getElementById('skillInput');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark')
    ? 'Toggle Light Mode'
    : 'Toggle Dark Mode';
});

toggleSkillsBtn.addEventListener('click', () => {
  skillsList.classList.toggle('hidden');
  toggleSkillsBtn.textContent = skillsList.classList.contains('hidden')
    ? 'Show Skills'
    : 'Hide Skills';
});

toggleProjectsBtn.addEventListener('click', () => {
  projectsList.classList.toggle('hidden');
  toggleProjectsBtn.textContent = projectsList.classList.contains('hidden')
    ? 'Show Projects'
    : 'Hide Projects';
});

toggleActivitiesBtn.addEventListener('click', () => {
  activitiesBlock.classList.toggle('hidden');
  toggleActivitiesBtn.textContent = activitiesBlock.classList.contains('hidden')
    ? 'Show Activities'
    : 'Hide Activities';
});

toggleAchievementsBtn.addEventListener('click', () => {
  achievementsList.classList.toggle('hidden');
  toggleAchievementsBtn.textContent = achievementsList.classList.contains('hidden')
    ? 'Show Achievements'
    : 'Hide Achievements';
});

addSkillBtn.addEventListener('click', () => {
  const value = skillInput.value.trim();
  if (!value) return;
  const li = document.createElement('li');
  li.textContent = value;
  skillsList.appendChild(li);
  skillsList.classList.remove('hidden');
  toggleSkillsBtn.textContent = 'Hide Skills';
  skillInput.value = '';
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
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
