/**
 * Re-exports blog data from content.js (the single source of truth).
 * Edit blog content in src/data/content.js — not here.
 */
export { BLOG_META, BLOG_POSTS } from './content'

import { BLOG_POSTS } from './content'

export function getPublishedPosts() {
  return BLOG_POSTS.filter((post) => post.published !== false)
}

export function getPostById(id) {
  return BLOG_POSTS.find((post) => post.id === id) ?? null
}
