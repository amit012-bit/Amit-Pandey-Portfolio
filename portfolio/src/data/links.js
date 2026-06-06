/**
 * Contact & profile URLs (from resume header + live profile).
 * Resume: linkedin.com/in/amit-prakhar · github.com/amit012-bit · amitprakhar35@gmail.com · +91 8239636347
 */
export const LINKS = {
  email: 'amitprakhar35@gmail.com',
  mailto: 'mailto:amitprakhar35@gmail.com',
  phoneDisplay: '+91 82396 36347',
  phoneTel: 'tel:+918239636347',
  linkedin: 'https://www.linkedin.com/in/amit-prakhar-pandey-b537851b0/',
  github: 'https://github.com/amit012-bit',
  upwork: 'https://www.upwork.com/freelancers/~01be10157da59302dc',
  resumeFile: 'documents/Amit_Prakhar_Pandey_Resume_Full.pdf',
}

export function resumePdfHref(baseUrl) {
  const b = baseUrl || '/'
  const normalized = b.endsWith('/') ? b : `${b}/`
  return `${normalized}${encodeURI(LINKS.resumeFile)}`
}
