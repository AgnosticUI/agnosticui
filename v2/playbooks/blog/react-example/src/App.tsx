import { useState, useEffect } from 'react'
import { SkinSwitcher } from './SkinSwitcher'
import { ReactHeader } from './components/ag/Header/react/ReactHeader'
import { ReactAvatar } from './components/ag/Avatar/react/ReactAvatar'
import { ReactBadge } from './components/ag/Badge/react/ReactBadge'
import { ReactTag } from './components/ag/Tag/react/ReactTag'
import { ReactTabs, ReactTab, ReactTabPanel } from './components/ag/Tabs/react/ReactTabs'
import { ReactDivider } from './components/ag/Divider/react/ReactDivider'
import { ReactLoader } from './components/ag/Loader/react/ReactLoader'
import { ReactScrollProgress } from './components/ag/ScrollProgress/react/ReactScrollProgress'
import { ReactScrollToButton } from './components/ag/ScrollToButton/react/ReactScrollToButton'
import { ReactAspectRatio } from './components/ag/AspectRatio/react/ReactAspectRatio'
import { article } from './data/article'

const sunIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
)
const moonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  )
  const [showProgress, setShowProgress] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    function onScroll() { setShowProgress(window.scrollY >= 58) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const html = document.documentElement
    if (isDark) { html.removeAttribute('data-theme'); setIsDark(false) }
    else { html.setAttribute('data-theme', 'dark'); setIsDark(true) }
  }

  return (
    <>
      <div className={`scroll-progress-wrap${showProgress ? ' visible' : ''}`}>
        <ReactScrollProgress />
      </div>
      <SkinSwitcher />
      <ReactScrollToButton scrollThreshold={400} shape="circle" />

      <ReactHeader contentJustify="between">
        <span slot="logo" style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--ag-primary)' }}>
          AgnosticUI
        </span>
        <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
          {isDark ? sunIcon : moonIcon}
        </button>
        <ReactAvatar text="AC" variant="info" />
      </ReactHeader>

      <main className="reader-main">
        {isLoading ? (
          <div className="loader-overlay">
            <ReactLoader size="large" aria-label="Loading article…" />
          </div>
        ) : (
          <>
            {/* Hero */}
            <div className="hero-wrapper">
              <ReactAspectRatio width={16} height={9}>
                <img className="hero-img" src={article.heroImage} alt={article.heroImageAlt} />
              </ReactAspectRatio>
            </div>

            {/* Meta */}
            <div className="article-meta">
              <div className="article-meta-left">
                <ReactTag>{article.category}</ReactTag>
                <div className="article-meta-author">
                  <ReactAvatar text={article.author.initials} size="sm" variant="info" />
                  <span className="article-meta-author-name">{article.author.name}</span>
                </div>
              </div>
              <div className="article-meta-right">
                <span className="article-meta-date">{article.author.date}</span>
                <span className="article-meta-sep">·</span>
                <ReactBadge variant="info">{article.readTime}</ReactBadge>
              </div>
            </div>

            {/* Tabs */}
            <ReactTabs aria-label="Article navigation">
              <ReactTab slot="tab" panel="article">Article</ReactTab>
              <ReactTab slot="tab" panel="comments">Comments ({article.comments.length})</ReactTab>

              <ReactTabPanel slot="panel" id="article">
                <div className="article-tab-content">
                  <h1 className="article-title">{article.title}</h1>
                  <p className="article-subtitle">{article.subtitle}</p>

                  <div className="reader-body">
                    {article.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <ReactDivider />

                  {/* Author card */}
                  <div className="author-card">
                    <ReactAvatar text={article.author.initials} variant="info" />
                    <div>
                      <p className="author-card-name">{article.author.name}</p>
                      <p className="author-card-bio">{article.author.bio}</p>
                    </div>
                  </div>

                  {/* Related */}
                  <div className="related-section">
                    <h2 className="related-heading">More to read</h2>
                    <div className="related-grid">
                      {article.related.map(item => (
                        <div className="related-card" key={item.id}>
                          <ReactAspectRatio width={3} height={2}>
                            <img className="related-card-img" src={item.image} alt={item.title} />
                          </ReactAspectRatio>
                          <div className="related-card-body">
                            <p className="related-card-title">{item.title}</p>
                            <div className="related-card-meta">
                              <ReactTag>{item.category}</ReactTag>
                              <span>{item.readTime}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ReactTabPanel>

              <ReactTabPanel slot="panel" id="comments">
                <div className="comments-tab-content">
                  {article.comments.map(c => (
                    <div className="comment-item" key={c.id}>
                      <ReactAvatar text={c.initials} size="sm" variant="default" />
                      <div className="comment-body">
                        <p className="comment-author">{c.author}</p>
                        <p className="comment-date">{c.date}</p>
                        <p className="comment-text">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ReactTabPanel>
            </ReactTabs>
          </>
        )}
      </main>
    </>
  )
}

export default App
