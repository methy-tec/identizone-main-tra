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
