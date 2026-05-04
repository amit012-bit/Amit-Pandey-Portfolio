/**
 * Re-exports project data from content.js (the single source of truth).
 * Edit project content in src/data/content.js — not here.
 */
export { RESUME_PROJECTS, MORE_PROJECTS } from './content'

import { RESUME_PROJECTS, MORE_PROJECTS } from './content'

export const ALL_PROJECTS = [...RESUME_PROJECTS, ...MORE_PROJECTS]

export function getProjectById(id) {
  return ALL_PROJECTS.find((p) => p.id === id) ?? null
}
