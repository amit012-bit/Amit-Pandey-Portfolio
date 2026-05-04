import { SKILL_GROUPS, SKILLS_META } from '../data/content'

export default function Skills() {
  return (
    <section className="section-wrap section-block" id="skills">
      <div className="section-title-row">
        <p className="tiny-label">{SKILLS_META.sectionLabel}</p>
        <h2>{SKILLS_META.heading}</h2>
      </div>
      <div className="skills-stack">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="skills-group">
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-grid">
              {group.items.map((item) => (
                <div key={item} className="skill-pill">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
