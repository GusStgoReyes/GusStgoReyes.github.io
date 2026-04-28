const researchGrid = document.getElementById('research-grid');
RESEARCH.forEach(r => {
  researchGrid.innerHTML += `
    <div class="research-card">
      <div class="card-icon" style="background:${r.iconBg}">${r.icon}</div>
      <div class="card-title">${r.title}</div>
      <p class="card-body">${r.body}</p>
      <div class="card-tags">${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`;
});
