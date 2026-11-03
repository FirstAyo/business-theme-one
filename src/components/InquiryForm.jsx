import { useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { submitInquiry } from '../lib/api';
import { services } from '../data/content';

export default function InquiryForm() {
  const id = useId();
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const feedback = useRef(null);
  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return;
    if (data.message.trim().length < 10) {
      setStatus('error');
      setMessage('Please describe your project in at least 10 characters, excluding extra spaces.');
      form.elements.message.focus();
      return;
    }
    setStatus('sending'); setMessage('Sending your message…');
    try {
      const result = await submitInquiry({ name: data.name.trim(), email: data.email.trim(), company: data.company.trim(), service: data.service, message: data.message.trim(), consent: true, website: '' }, { signal: AbortSignal.timeout(15000) });
      setStatus('success');
      setMessage(result.demo ? 'Demo complete. No message was sent or saved. Connect your API to receive real inquiries.' : 'Thank you. Your message was sent successfully. We’ll be in touch soon.');
      form.reset();
    } catch (error) { setStatus('error'); setMessage(error.name === 'TimeoutError' ? 'The request timed out. Please try again.' : error.message); }
    requestAnimationFrame(() => feedback.current?.focus());
  }
  return <form className="inquiry-form" onSubmit={handleSubmit} aria-label="Project inquiry" aria-describedby={`${id}-note`}>
    <div className="form-grid"><label htmlFor={`${id}-name`}>Your name <span>(required)</span><input id={`${id}-name`} name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*" placeholder="Alex Morgan" /></label><label htmlFor={`${id}-email`}>Work email <span>(required)</span><input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} placeholder="alex@company.com" /></label></div>
    <div className="form-grid"><label htmlFor={`${id}-company`}>Company <span>(optional)</span><input id={`${id}-company`} name="company" autoComplete="organization" maxLength={150} placeholder="Your company" /></label><label htmlFor={`${id}-service`}>How can we help?<select id={`${id}-service`} name="service" defaultValue=""><option value="">Let’s figure it out together</option>{services.map(service => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label></div>
    <label htmlFor={`${id}-message`}>Tell us a little about your project <span>(required)</span><textarea id={`${id}-message`} name="message" rows={5} required minLength={10} maxLength={5000} placeholder="What are you working toward? What’s standing in the way?" /></label>
    <div className="honeypot" aria-hidden="true"><label htmlFor={`${id}-website`}>Leave this field empty<input id={`${id}-website`} tabIndex={-1} name="website" autoComplete="off" /></label></div>
    <label className="checkbox-label"><input type="checkbox" name="consent" required /> <span>I agree to the <Link to="/privacy">privacy notice</Link> and consent to being contacted about my inquiry. (required)</span></label>
    <div className="form-submit"><button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? <>Sending <LoaderCircle className="spin" size={18} /></> : <>Send your inquiry <ArrowUpRight size={18} /></>}</button><p id={`${id}-note`}>{import.meta.env.VITE_API_BASE_URL ? 'Your next chapter starts with a conversation.' : 'Preview mode: submissions are not sent or stored.'}</p></div>
    <div ref={feedback} tabIndex={-1} className={`form-feedback ${status}`} role="status" aria-live="polite" aria-atomic="true">{status === 'success' && <CheckCircle2 size={20} />} {message}</div>
  </form>;
}
