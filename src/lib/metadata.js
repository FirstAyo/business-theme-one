import { site } from '../config/site';
import { posts, projects, services } from '../data/content';

export const staticPages = {
  '/': ['Business consulting for what comes next', site.description],
  '/about': ['A thoughtful partner for ambitious teams', 'Meet Nexora: an independent consulting practice bringing clear thinking, practical strategy, and a collaborative approach to business growth.'],
  '/services': ['Expertise that moves your business forward', 'Explore business strategy, operations transformation, growth marketing, and digital advisory services from Nexora.'],
  '/projects': ['Selected work, meaningful progress', 'Explore illustrative consulting case studies in strategy, operations, growth, and digital transformation.'],
  '/blog': ['Ideas for your next chapter', 'Practical perspectives on business strategy, operations, growth, and digital transformation from the Nexora journal.'],
  '/contact': ['Let’s talk about what comes next', 'Tell us about your business challenge and start a conversation with Nexora about your next chapter.'],
  '/privacy': ['Privacy notice template', 'A starting point for the privacy notice of your Nexora-powered website. Customize before publishing.'],
  '/terms': ['Website terms template', 'A starting point for the terms of your Nexora-powered website. Customize before publishing.'],
};
export const paths = [...Object.keys(staticPages), ...services.map(x => `/services/${x.slug}`), ...projects.map(x => `/projects/${x.slug}`), ...posts.map(x => `/blog/${x.slug}`)];
export function getMetadata(path) {
  const route = path.replace(/\/$/, '') || '/';
  const post = posts.find(x => route === `/blog/${x.slug}`);
  const project = projects.find(x => route === `/projects/${x.slug}`);
  const service = services.find(x => route === `/services/${x.slug}`);
  const item = post || project || service;
  const entry = staticPages[route];
  const found = Boolean(item || entry);
  return {
    title: `${item?.title || entry?.[0] || 'Page not found'} | ${site.name}`,
    description: item?.excerpt || item?.summary || item?.description || entry?.[1] || 'This page could not be found. Explore Nexora services, projects, and insights.',
    canonical: `${site.url}${route === '/' ? '/' : route}`,
    image: `${site.url}${item?.image || '/images/social.jpg'}`,
    type: post ? 'article' : 'website',
    noindex: !found || route === '/privacy' || route === '/terms',
    schema: found ? {
      '@context': 'https://schema.org',
      '@type': post ? 'BlogPosting' : 'WebPage',
      name: item?.title || entry?.[0],
      url: `${site.url}${route === '/' ? '/' : route}`,
      ...(post ? { headline: post.title, datePublished: post.date, image: `${site.url}${post.image}`, author: { '@type': 'Organization', name: site.name } } : {}),
      isPartOf: { '@type': 'WebSite', name: site.name, url: site.url },
    } : null,
  };
}
