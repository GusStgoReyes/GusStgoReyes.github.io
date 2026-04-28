const VIZ_PREVIEWS = {
  "loss-aversion": {
    bg: "linear-gradient(135deg,rgba(196,94,46,0.12),rgba(232,133,90,0.08))",
    svg: `<svg width="140" height="120" viewBox="0 0 140 120">
      <rect x="10" y="80" width="18" height="30" rx="3" fill="rgba(74,124,111,0.7)"/>
      <rect x="36" y="60" width="18" height="50" rx="3" fill="rgba(74,124,111,0.8)"/>
      <rect x="62" y="40" width="18" height="70" rx="3" fill="rgba(196,94,46,0.8)"/>
      <rect x="88" y="55" width="18" height="55" rx="3" fill="rgba(196,94,46,0.6)"/>
      <rect x="114" y="70" width="18" height="40" rx="3" fill="rgba(196,94,46,0.4)"/>
      <line x1="5" y1="110" x2="135" y2="110" stroke="rgba(45,36,25,0.2)" stroke-width="1"/>
    </svg>`
  },
  "pupil": {
    bg: "linear-gradient(135deg,rgba(74,124,111,0.12),rgba(122,181,165,0.08))",
    svg: `<svg width="140" height="120" viewBox="0 0 140 120">
      <circle cx="70" cy="60" r="40" fill="none" stroke="rgba(74,124,111,0.3)" stroke-width="1"/>
      <circle cx="70" cy="60" r="28" fill="none" stroke="rgba(74,124,111,0.4)" stroke-width="1"/>
      <circle cx="70" cy="60" r="16" fill="rgba(74,124,111,0.15)" stroke="rgba(74,124,111,0.6)" stroke-width="1.5"/>
      <circle cx="70" cy="60" r="5" fill="rgba(196,94,46,0.8)"/>
      <line x1="70" y1="60" x2="98" y2="36" stroke="rgba(196,94,46,0.5)" stroke-width="1.5"/>
      <line x1="70" y1="60" x2="44" y2="42" stroke="rgba(74,124,111,0.5)" stroke-width="1"/>
      <line x1="70" y1="60" x2="52" y2="84" stroke="rgba(74,124,111,0.3)" stroke-width="0.8"/>
    </svg>`
  },
  "choice-history": {
    bg: "linear-gradient(135deg,rgba(196,94,46,0.08),rgba(74,124,111,0.1))",
    svg: `<svg width="140" height="120" viewBox="0 0 140 120">
      <polyline points="10,90 25,85 40,70 55,75 70,50 85,60 100,40 115,45 130,30" fill="none" stroke="rgba(196,94,46,0.7)" stroke-width="2" stroke-linejoin="round"/>
      <polyline points="10,95 25,92 40,88 55,85 70,75 85,70 100,65 115,60 130,55" fill="none" stroke="rgba(74,124,111,0.5)" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="4 2"/>
      <line x1="5" y1="100" x2="135" y2="100" stroke="rgba(45,36,25,0.15)" stroke-width="1"/>
      <line x1="5" y1="100" x2="5" y2="20" stroke="rgba(45,36,25,0.15)" stroke-width="1"/>
    </svg>`
  }
};

const vizGrid = document.getElementById('viz-grid');
VISUALIZATIONS.forEach(v => {
  const preview = VIZ_PREVIEWS[v.previewId] || { bg: 'var(--sand)', svg: '' };
  const badge = v.coming
    ? `<span class="viz-coming">Coming soon</span>`
    : `<span class="viz-live">Live →</span>`;
  const tag = v.coming ? '' : `href="${v.url}" target="_blank"`;
  vizGrid.innerHTML += `
    <a class="viz-card" ${tag}>
      <div class="viz-preview" style="background:${preview.bg}">${preview.svg}</div>
      <div class="viz-info">
        <div class="viz-title">${v.title}</div>
        <div class="viz-desc">${v.desc}</div>
        ${badge}
      </div>
    </a>`;
});
