/* Small, additive accessibility layer for the Locavore prototype. */
(function () {
  'use strict';

  function labelIcons(root) {
    var labels = {
      '.back-btn': 'Go back',
      '.share-btn': 'Share',
      '.more-btn': 'More options',
      '.notification-btn': 'Notifications',
      '.filter-btn': 'Filter markets',
      '.call-btn': 'Call farmer',
      '.attach-btn': 'Attach a file',
      '.send-btn': 'Send message',
      '.settings-btn': 'Settings',
      '.edit-avatar': 'Change profile photo',
      '.favorite-btn': 'Favorite this product',
      '.favorite-btn-large': 'Favorite this product',
      '.qty-btn': 'Adjust quantity',
      '.add-btn': 'Add to cart',
      '.add-btn-small': 'Add to cart'
    };
    Object.keys(labels).forEach(function (selector) {
      root.querySelectorAll(selector).forEach(function (el) {
        if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) {
          el.setAttribute('aria-label', labels[selector]);
        }
      });
    });
    root.querySelectorAll('.qty-btn').forEach(function (el) {
      el.setAttribute('aria-label', el.textContent.trim() === '+' ? 'Increase quantity' : 'Decrease quantity');
    });
  }

  function makeCardsKeyboardOperable(root) {
    root.querySelectorAll('[onclick]').forEach(function (el) {
      if (el.matches('button, a, input, select, textarea, summary, [tabindex]')) return;
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.addEventListener('keydown', function (event) {
        if (event.target.closest('button, a, input, select, textarea, summary')) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          el.click();
        }
      });
    });
  }

  function syncStates(root) {
    root.querySelectorAll('.favorite-btn, .favorite-btn-large').forEach(function (el) {
      el.setAttribute('aria-pressed', el.classList.contains('active') || el.classList.contains('favorited') ? 'true' : 'false');
    });
    root.querySelectorAll('.btn-going, .going-btn').forEach(function (el) {
      el.setAttribute('aria-pressed', el.classList.contains('active') || el.classList.contains('going') ? 'true' : 'false');
    });
    root.querySelectorAll('.bottom-nav').forEach(function (nav) {
      nav.querySelectorAll('.nav-item').forEach(function (item) {
        item.setAttribute('aria-current', item.classList.contains('active') ? 'page' : 'false');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    labelIcons(document);
    makeCardsKeyboardOperable(document);
    syncStates(document);
    new MutationObserver(function (records) {
      var relevant = records.some(function (record) {
        return record.type === 'attributes' && record.attributeName === 'class';
      });
      if (relevant) syncStates(document);
    }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
  });
}());
