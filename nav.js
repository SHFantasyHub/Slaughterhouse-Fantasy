// Shared nav HTML — injected into every page
function renderNav(activePage) {
  const pages = [
    { id: 'rankings', label: 'Rankings', href: 'rankings.html' },
    { id: 'rookies', label: 'Rookies', href: 'rookies.html' },
    { id: 'calculator', label: 'Calculator', href: 'calculator.html' },
    { id: 'optimizer', label: 'Optimizer', href: 'optimizer.html' },
    { id: 'trade', label: 'Trade Analyzer', href: 'trade.html' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  return `
  <nav>
    <a class="nav-logo" href="index.html">
      <svg width="34" height="26" viewBox="0 0 34 26" fill="none" aria-label="SH" style="flex-shrink:0">
        <text x="0" y="22" font-family="'Bebas Neue',sans-serif" font-size="24" fill="#F5F0E8" font-style="italic">S</text>
        <text x="14" y="22" font-family="'Bebas Neue',sans-serif" font-size="24" fill="#C0392B" font-style="italic">H</text>
        <line x1="12" y1="2" x2="17" y2="24" stroke="#C0392B" stroke-width="1.2" opacity="0.5"/>
      </svg>
      <div class="nav-div"></div>
      <div>
        <span class="nav-wordmark-top">SLAUGHTERHOUSE</span>
        <span class="nav-wordmark-sub">FANTASY</span>
      </div>
    </a>
    <ul class="nav-links">
      ${links}
      <li><a href="#" class="nav-cta">Join Free</a></li>
    </ul>
  </nav>`;
}
