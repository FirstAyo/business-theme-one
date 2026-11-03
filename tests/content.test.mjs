import test from 'node:test';
import assert from 'node:assert/strict';
import { services, projects, posts } from '../src/data/content.js';
test('content has unique URL-safe slugs and complete detail records', () => {
  for (const collection of [services, projects, posts]) {
    assert.equal(new Set(collection.map(item => item.slug)).size, collection.length);
    for (const item of collection) assert.match(item.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  }
  for (const service of services) assert.ok(service.deliverables.length >= 3);
  for (const project of projects) for (const key of ['challenge', 'approach', 'outcome', 'alt']) assert.ok(project[key]);
  for (const post of posts) { assert.ok(post.sections.length >= 3); assert.ok(!Number.isNaN(Date.parse(post.date))); }
});
