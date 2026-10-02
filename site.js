'use strict';
// Client-confirmed numbers will enable all contact links in one place.
const contact = { call: '+917878673630', whatsapp: '+919680478850' };
const message = 'नमस्ते भंवर लाल जी, मुझे जयपुर में काम करवाना है। काम: ___ जगह: ___';
function connect(selector, number, url) {
  document.querySelectorAll(selector).forEach(link => {
    if (!/^\+?[1-9]\d{7,14}$/.test(number)) {
      link.setAttribute('aria-disabled', 'true');
      link.setAttribute('role', 'link');
      link.setAttribute('aria-label', link.textContent.trim() + ' — संपर्क नंबर जुड़ना बाकी है');
      return;
    }
    link.href = url;
    link.removeAttribute('aria-disabled');
    if (selector === '.whatsapp-link') {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
}
connect('.call-link', contact.call, 'tel:' + contact.call);
connect('.whatsapp-link', contact.whatsapp, 'https://wa.me/' + contact.whatsapp.replace(/\D/g, '') + '?text=' + encodeURIComponent(message));
document.getElementById('year').textContent = new Date().getFullYear();
