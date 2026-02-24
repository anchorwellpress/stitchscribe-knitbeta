const APPS = [
  {
    id: 'video-pattern',
    file: 'stitchscribe-app.html',
    name: 'Video → Pattern',
    tag: 'VP',
    color: '#3D8B8B',
    desc: 'AI-powered YouTube video to knitting & crochet pattern converter with chart generation, stitch glossary, dialect detection, and confidence scoring.',
    features: ['YouTube transcript parsing', 'Chart generation', 'Stitch glossary', 'Photo mode', 'Confidence scoring', 'PDF export'],
    icon: '🎬',
  },
  {
    id: 'chart-designer',
    file: 'chart-demo.html',
    name: 'Chart Designer',
    tag: 'CD',
    color: '#B8533E',
    desc: 'Visual stitch chart builder with 30+ knitting and 16 crochet symbols, natural language text-to-chart parsing, and built-in motif templates.',
    features: ['30+ knitting symbols', '16 crochet symbols', 'Text parser', '12 motif templates', 'Add/delete rows & cols', 'PDF & DOCX export'],
    icon: '📊',
  },
  {
    id: 'row-counter',
    file: 'row-counter.html',
    name: 'Row Counter',
    tag: 'RC',
    color: '#7B8F6B',
    desc: 'Smart row counter with multi-project support, auto-pause timer, section tracking, session logging, and save-your-place notes.',
    features: ['Multi-project', 'Auto-pause timer', 'Section tracking', 'Session history', 'Save-place notes', 'TXT export'],
    icon: '🔢',
  },
  {
    id: 'yarn-stash',
    file: 'yarn-stash.html',
    name: 'Yarn Stash',
    tag: 'YS',
    color: '#7B5B7C',
    desc: 'Complete yarn inventory manager with 30+ brand autocomplete, color visualization, pattern matching, and stash analytics dashboard.',
    features: ['30+ real brands', 'Color visualization', 'Grid & list views', 'Pattern matching', 'Stash analytics', 'TXT export'],
    icon: '🧶',
  },
  {
    id: 'pattern-share',
    file: 'pattern-share.html',
    name: 'Pattern Share',
    tag: 'PS',
    color: '#D4A843',
    desc: 'Share patterns via real QR codes and encoded URLs, with PDF, DOCX, and TXT export plus Ravelry-compatible formatting.',
    features: ['QR code sharing', 'URL encoding', 'Ravelry format', 'PDF export', 'DOCX export', 'TXT export'],
    icon: '🔗',
  },
  {
    id: 'analyzer',
    file: 'pattern-analyzer.html',
    name: 'Pattern Analyzer',
    tag: 'PA',
    color: '#6B4C3B',
    desc: 'Row-by-row stitch math validator that catches errors in stitch counts, increases, decreases, and pattern repeats for both knitting & crochet.',
    features: ['Stitch count validation', 'Increase/decrease checks', 'Pattern repeat analysis', 'Error highlighting', 'Knit & crochet', 'PDF report'],
    icon: '🔍',
  },
  {
    id: 'grader',
    file: 'pattern-grader.html',
    name: 'Pattern Grader',
    tag: 'PG',
    color: '#3D8B8B',
    desc: 'Single-size to multi-size pattern expander supporting XS through 5XL with proportional stitch and measurement scaling.',
    features: ['XS to 5XL grading', 'Proportional scaling', 'Stitch calculations', 'Measurement tables', 'Size comparison', 'PDF export'],
    icon: '📐',
  },
  {
    id: 'accessibility',
    file: 'pattern-accessibility.html',
    name: 'Accessibility',
    tag: 'AR',
    color: '#B8533E',
    desc: 'Reformats patterns into 5 accessible formats including OpenDyslexic font, high contrast, large print, and screen-reader optimized layouts.',
    features: ['OpenDyslexic font', 'High contrast mode', 'Large print', 'Screen-reader optimized', 'Simplified layout', '5 format options'],
    icon: '♿',
  },
]

function BetaBadge() {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase"
      style={{ backgroundColor: '#E8C4B8', color: '#B8533E' }}>
      Beta
    </span>
  )
}

function Landing() {
  const basePath = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF6EC' }}>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #6B4C3B 0, #6B4C3B 1px, transparent 0, transparent 24px)' }} />
        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-md"
              style={{ background: 'linear-gradient(135deg, #2D6B6B, #3D8B8B)', color: 'white' }}>
              🧶
            </div>
            <h1 className="text-3xl font-bold tracking-tight" style={{ color: '#2B2623' }}>
              StitchScribe
            </h1>
            <BetaBadge />
          </div>
          <p className="text-lg max-w-2xl mx-auto mb-3 leading-relaxed" style={{ color: '#2B2623' }}>
            The knitting &amp; crochet app suite that understands your craft.
          </p>
          <p className="max-w-xl mx-auto mb-10" style={{ color: '#8B8680', fontSize: '15px', lineHeight: '1.6' }}>
            Eight interconnected tools built for knitters and crocheters of every level — from your first scarf to your most intricate lace shawl.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {APPS.slice(0, 4).map(app => (
              <a key={app.id} href={`${basePath}apps/${app.file}`}
                className="px-4 py-2.5 rounded-lg font-semibold text-sm text-white transition-all hover:shadow-lg hover:-translate-y-0.5 no-underline"
                style={{ backgroundColor: app.color }}>
                {app.icon} {app.name} →
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* App Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-bold mb-8 text-center" style={{ color: '#2B2623' }}>
          Explore the Suite
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPS.map(app => (
            <a key={app.id}
              href={`${basePath}apps/${app.file}`}
              className="rounded-xl border overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group no-underline"
              style={{ backgroundColor: 'white', borderColor: '#E6DFD4', display: 'block' }}>
              <div className="h-1.5" style={{ backgroundColor: app.color }} />
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{app.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm" style={{ color: '#2B2623', fontFamily: "'Playfair Display', Georgia, serif" }}>{app.name}</h3>
                    <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: '#F5F0E8', color: '#8B8680', fontFamily: "'JetBrains Mono', monospace" }}>{app.tag}</span>
                  </div>
                </div>
                <p className="text-xs mb-3 leading-relaxed" style={{ color: '#8B8680' }}>{app.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {app.features.slice(0, 4).map(f => (
                    <span key={f} className="text-[10px] px-1.5 py-0.5 rounded-full"
                      style={{ backgroundColor: `${app.color}10`, color: app.color, border: `1px solid ${app.color}20` }}>
                      {f}
                    </span>
                  ))}
                  {app.features.length > 4 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full"
                      style={{ backgroundColor: '#F5F0E8', color: '#8B8680' }}>
                      +{app.features.length - 4} more
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium transition-colors"
                  style={{ color: app.color }}>
                  <span>Try live demo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* What's in the Beta */}
      <section className="border-t border-b" style={{ borderColor: '#E6DFD4', backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-xl font-bold mb-2 text-center" style={{ color: '#2B2623' }}>What's in this beta?</h2>
          <p className="text-center mb-10 text-sm" style={{ color: '#8B8680' }}>
            Fully interactive tools — everything runs in your browser, no install or account needed.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🧠', title: 'AI-Powered', desc: 'Convert YouTube tutorials to written patterns with stitch-level accuracy' },
              { icon: '💾', title: 'Local Storage', desc: 'Your projects, yarn stash, and counters persist between sessions' },
              { icon: '📄', title: 'Multi-Format Export', desc: 'Export to PDF, DOCX, and TXT — ready for print or digital sharing' },
              { icon: '♿', title: 'Accessible', desc: 'OpenDyslexic font, high contrast, and screen-reader optimized options' },
            ].map(f => (
              <div key={f.title} className="p-5 rounded-xl border text-center"
                style={{ borderColor: '#E6DFD4', backgroundColor: '#FDF6EC' }}>
                <span className="text-2xl block mb-2">{f.icon}</span>
                <h3 className="font-semibold text-sm mb-1" style={{ color: '#2B2623', fontFamily: "'Playfair Display', Georgia, serif" }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#8B8680' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built With Precision */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: '#2B2623' }}>Built for fiber artists</h2>
            <div className="space-y-3">
              {[
                { label: 'Stitch-Accurate Charting', desc: '30+ knitting and 16 crochet symbols with standard notation' },
                { label: 'Pattern Intelligence', desc: 'Row-by-row math validation catches errors before you knit them' },
                { label: 'Multi-Size Grading', desc: 'Expand any single-size pattern to XS–5XL with proportional scaling' },
                { label: 'Real Yarn Brands', desc: '30+ brands with autocomplete — Malabrigo, Cascade, Lion Brand, and more' },
              ].map(item => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-1.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: '#3D8B8B', height: '40px' }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#2B2623' }}>{item.label}</p>
                    <p className="text-xs" style={{ color: '#8B8680' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-xl border" style={{ backgroundColor: 'white', borderColor: '#E6DFD4' }}>
            <h3 className="font-semibold mb-4 text-sm" style={{ color: '#2B2623', fontFamily: "'Playfair Display', Georgia, serif" }}>Suite Capabilities</h3>
            <div className="space-y-3">
              {[
                { label: 'Pattern Conversion', score: 9, max: 10 },
                { label: 'Stitch Charting', score: 9, max: 10 },
                { label: 'Export & Sharing', score: 8, max: 10 },
                { label: 'Accessibility', score: 8, max: 10 },
                { label: 'Yarn Management', score: 8, max: 10 },
              ].map(item => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: '#2B2623' }}>{item.label}</span>
                    <span style={{ color: '#8B8680' }}>{item.score}/{item.max}</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ backgroundColor: '#E6DFD4' }}>
                    <div className="h-2 rounded-full transition-all" style={{ width: `${(item.score / item.max) * 100}%`, backgroundColor: '#3D8B8B' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to Quilting */}
      <section className="border-t" style={{ borderColor: '#E6DFD4' }}>
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <p className="text-sm mb-3" style={{ color: '#8B8680' }}>Also from StitchScribe</p>
          <a href="/sewbeta/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-md hover:-translate-y-0.5 no-underline"
            style={{ backgroundColor: '#7B5B7C', color: 'white' }}>
            ✂️ Quilting &amp; Sewing Suite →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6 text-center" style={{ borderColor: '#E6DFD4' }}>
        <p className="text-xs" style={{ color: '#8B8680' }}>
          StitchScribe Knitting &amp; Crochet Suite · Beta · An{' '}
          <a href="https://anchorwellpress.com" target="_blank" rel="noopener noreferrer"
            className="underline hover:opacity-70" style={{ color: '#3D8B8B' }}>AnchorWell Press</a>{' '}
          product · © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}

export default function App() {
  return <Landing />
}
