function openSection(sectionId) {
  const sections = document.querySelectorAll('.dashboard-section');
  sections.forEach(sec => sec.classList.remove('active'));

  const activeSection = document.getElementById(sectionId);
  if (activeSection) activeSection.classList.add('active');
}

// Récupération du nom utilisateur depuis localStorage
document.getElementById('userName').innerText = localStorage.getItem('Name') || 'Travailler';

// Déconnexion
function logout() {
  localStorage.clear();
  window.location.href = './login.html';
}

// Exemple : peupler les familles
const familles = ['Famille 1', 'Famille 2', 'Famille 3'];
const familleList = document.getElementById('familleList');
familles.forEach(f => {
  const div = document.createElement('div');
  div.classList.add('list-item');
  div.innerText = f;
  familleList.appendChild(div);
});
