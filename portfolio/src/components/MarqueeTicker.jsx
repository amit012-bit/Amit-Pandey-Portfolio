import { TICKER_ITEMS } from '../data/content'

export default function MarqueeTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="marquee-ticker">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
