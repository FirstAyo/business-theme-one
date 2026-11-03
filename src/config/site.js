// Public configuration only. VITE_* values are included in the browser bundle.
export const site = {
  name: 'Nexora',
  tagline: 'Clarity. Momentum. Meaningful growth.',
  description: 'Independent business consulting for ambitious teams. Turn complex challenges into focused strategies, better operations, and lasting growth.',
  url: (import.meta.env.VITE_SITE_URL || 'https://example.com').replace(/\/$/, ''),
  email: 'hello@example.com',
  phone: '+1 (202) 555-0147',
  phoneHref: '+12025550147',
  address: 'San Francisco, California',
  demo: import.meta.env.VITE_DEMO_MODE !== 'false',
};
