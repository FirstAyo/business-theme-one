import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
export { getMetadata, paths } from './lib/metadata';
export { site } from './config/site';
export function render(path) { return renderToString(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>); }
