(() => {
  const measurementId = 'G-X8V7G1S3EH';
  const key = '37x-ga-consent';
  const read = () => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (value) => { try { localStorage.setItem(key, value); } catch { /* Page-level choice still applies. */ } };

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  });

  function enable() {
    if (document.getElementById('ga37x')) return;
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    const script = document.createElement('script');
    script.id = 'ga37x';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { allow_google_signals: false, allow_ad_personalization_signals: false });
  }

  if (read() === 'yes') return enable();
  if (read() === 'no') return;

  window.addEventListener('DOMContentLoaded', () => {
    const panel = document.createElement('aside');
    panel.setAttribute('aria-label', 'Analytics preference');
    panel.style.cssText = 'position:fixed;z-index:50;right:18px;bottom:18px;width:min(410px,calc(100vw - 36px));padding:18px;background:#102a43;color:#fff;border:1px solid #486581;border-radius:14px;box-shadow:0 18px 46px #0004;font:14px/1.45 system-ui';
    panel.innerHTML = '<strong style="display:block;font-size:15px">Optional audience measurement</strong><p style="margin:6px 0 14px;color:#d9e2ec">Analytics is off by default. Accept only if you want anonymous usage to help improve the route planner.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" data-accept style="cursor:pointer;border:0;border-radius:9px;background:#ef8354;color:#102a43;padding:9px 13px;font:inherit;font-weight:800">Accept analytics</button><button type="button" data-decline style="cursor:pointer;border:1px solid #9fb3c8;border-radius:9px;background:transparent;color:#fff;padding:9px 13px;font:inherit;font-weight:800">Essential only</button></div>';
    document.body.appendChild(panel);
    panel.querySelector('[data-accept]').onclick = () => { save('yes'); enable(); panel.remove(); };
    panel.querySelector('[data-decline]').onclick = () => { save('no'); panel.remove(); };
  });
})();
