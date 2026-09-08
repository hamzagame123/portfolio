// Keep images and cards visible immediately during navigation and capture.
triggerScreenAnimations = function (screenId) {
  document.querySelectorAll('#' + screenId + ' .product-card, #' + screenId + ' .farm-card, #' + screenId + ' .category-item, #' + screenId + ' .menu-item').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
};
setupScrollAnimations = function () {};
document.addEventListener('DOMContentLoaded', () => {
  const count = document.querySelector('.markets-week-banner h3');
  if (count) count.textContent = '4 markets to explore';
  const sub = document.querySelector('.markets-week-banner p');
  if (sub) sub.textContent = 'A fresh stop for every kind of week.';
  document.querySelectorAll('.screen img').forEach(img => { img.decoding = 'async'; });

  const phone = document.querySelector('.iphone-frame');
  const captureSection = document.querySelector('.ui-captures');
  if (phone && captureSection) {
    const screenIds = ['onboarding', 'location', 'home', 'search', 'markets', 'market-detail', 'farmer-profile', 'product-detail', 'cart', 'checkout', 'messages', 'chat', 'profile'];
    const labels = Object.fromEntries(screenIds.map(id => [id, id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())]));
    const nav = document.createElement('div');
    nav.className = 'screen-navigator';
    nav.innerHTML = `<label for="screen-jump">Jump to screen</label><select id="screen-jump">${screenIds.map(id => `<option value="${id}">${labels[id]}</option>`).join('')}</select>`;
    phone.parentNode.insertBefore(nav, phone);
    const select = nav.querySelector('select');
    const reveal = () => phone.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    select.addEventListener('change', () => { showScreen(select.value); reveal(); });
    const sync = () => { select.value = document.querySelector('.screen.active')?.id || 'home'; };
    const original = showScreen;
    showScreen = function (id) { original(id); sync(); };
    sync();

    captureSection.querySelectorAll('figure').forEach(figure => {
      const image = figure.querySelector('img');
      const id = image?.src.match(/ui-captures\/([^./]+)\./)?.[1];
      if (!id || !screenIds.includes(id)) return;
      figure.tabIndex = 0;
      figure.setAttribute('role', 'button');
      figure.setAttribute('aria-label', `Open ${labels[id]} screen`);
      const open = () => { showScreen(id); reveal(); };
      figure.addEventListener('click', open);
      figure.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
  }

  const input = document.querySelector('.chat-input-container input');
  const send = document.querySelector('.chat-input-container .send-btn');
  const messages = document.querySelector('.chat-messages');
  const sendMessage = () => {
    const text = input?.value.trim();
    if (!text || !messages) return;
    const message = document.createElement('div');
    message.className = 'message sent';
    message.innerHTML = `<div class="message-bubble"></div><span class="message-time">Now</span>`;
    message.querySelector('.message-bubble').textContent = text;
    messages.appendChild(message);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  };
  send?.addEventListener('click', sendMessage);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); sendMessage(); } });
});
