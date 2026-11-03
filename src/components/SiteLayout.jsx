import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '../config/site';
import { getMetadata } from '../lib/metadata';

const navigation = [['About', '/about'], ['Expertise', '/services'], ['Our work', '/projects'], ['Journal', '/blog']];
function Metadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getMetadata(pathname);
    document.title = meta.title;
    const set = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
        const match = selector.match(/\[(name|property|rel)="([^"]+)"\]/);
        if (match) element.setAttribute(match[1], match[2]);
        document.head.append(element);
      }
      element.setAttribute(attribute, value);
    };
    set('meta[name="description"]', 'content', meta.description);
    set('meta[name="robots"]', 'content', meta.noindex ? 'noindex, follow' : 'index, follow');
    set('link[rel="canonical"]', 'href', meta.canonical);
    for (const [name, value] of Object.entries({ title: meta.title, description: meta.description, url: meta.canonical, image: meta.image, type: meta.type, site_name: site.name })) set(`meta[property="og:${name}"]`, 'content', value);
    for (const [name, value] of Object.entries({ card: 'summary_large_image', title: meta.title, description: meta.description, image: meta.image })) set(`meta[name="twitter:${name}"]`, 'content', value);
    let schema = document.getElementById('page-schema');
    if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.id = 'page-schema'; document.head.append(schema); }
    schema.textContent = JSON.stringify(meta.schema);
  }, [pathname]);
  return null;
}
export function Brand() { return <Link className="brand" to="/" aria-label={`${site.name} home`}><span className="brand-symbol" aria-hidden="true"><ArrowUpRight /></span>{site.name}<span className="brand-period">.</span></Link>; }
export default function SiteLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const toggle = useRef(null);
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      window.scrollTo(0, 0);
      document.getElementById('main-content')?.focus({ preventScroll: true });
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const trigger = toggle.current;
    const openedPath = window.location.pathname;
    element.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = overflow; if (window.location.pathname === openedPath) trigger?.focus(); else document.getElementById('main-content')?.focus({ preventScroll: true }); };
  }, [open]);
  return <>
    <Metadata />
    <a className="skip-link" href="#main-content">Skip to content <ArrowDown size={16} /></a>
    {site.demo && <div className="demo-strip">A Crafted Template preview <span aria-hidden="true">·</span> Fictional brand & sample projects</div>}
    <header className="site-header"><div className="container header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav><Link to="/contact" className="button button-small header-cta">Let’s talk <ArrowUpRight size={17} /></Link><button ref={toggle} className="menu-toggle icon-button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}><Menu /></button></div></header>
    <dialog id="mobile-navigation" ref={dialog} className="mobile-dialog" onCancel={() => setOpen(false)} onClick={e => { if (e.target === dialog.current) setOpen(false); }} aria-labelledby="navigation-title"><div className="mobile-dialog-inner"><div className="mobile-dialog-top"><span id="navigation-title">Explore Nexora</span><button className="icon-button" aria-label="Close navigation" onClick={() => setOpen(false)}><X /></button></div><nav aria-label="Mobile navigation">{[['Home', '/'], ...navigation, ['Let’s talk', '/contact']].map(([label, to]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}<ArrowUpRight /></NavLink>)}</nav><p>Clarity for your next chapter.</p></div></dialog>
    <main id="main-content" tabIndex={-1}><Outlet /></main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><div><Brand /><p>Independent thinking.<br />Extraordinary possibilities.</p></div><div className="footer-links"><nav aria-label="Company navigation"><span className="eyebrow">Explore</span>{navigation.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</nav><div><span className="eyebrow">Get in touch</span><a href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={16} /></a><a href={`tel:${site.phoneHref}`}>{site.phone}</a><span>{site.address}</span><Link to="/contact">Start a conversation <ArrowUpRight size={16} /></Link></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Nexora. {site.demo ? 'A template by Crafted Template.' : 'All rights reserved.'}</span><div><Link to="/privacy">Privacy notice</Link><Link to="/terms">Terms of use</Link><a href="#main-content">Back to top ↑</a></div></div></div></footer>
  </>;
}
