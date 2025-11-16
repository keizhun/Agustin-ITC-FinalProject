function loadNavbar() {
  fetch('navigationBar.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('navBar').innerHTML = html;
    })
    .catch(err => console.error('Error loading navigation bar:', err));
}
