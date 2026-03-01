import { LitElement, html } from 'lit'
import { state } from 'lit/decorators.js'

import './components/ag/Header/core/Header'
import './components/ag/Avatar/core/Avatar'
import './components/ag/Badge/core/Badge'
import './components/ag/Tag/core/Tag'
import './components/ag/Tabs/core/Tabs'
import './components/ag/Divider/core/Divider'
import './components/ag/Loader/core/Loader'
import './components/ag/ScrollProgress/core/ScrollProgress'
import './components/ag/ScrollToButton/core/ScrollToButton'
import './components/ag/AspectRatio/core/AspectRatio'
import './skin-switcher'
import { article } from './data/article'

const sunIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
const moonIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`

export class BlogApp extends LitElement {
  // Light DOM so global index.css shell styles apply
  override createRenderRoot() { return this }

  @state() private _isLoading = true
  @state() private _isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  @state() private _showProgress = false

  private _loadTimer: ReturnType<typeof setTimeout> | null = null
  private _onScroll = () => { this._showProgress = window.scrollY >= 58 }

  override connectedCallback() {
    super.connectedCallback()
    this._loadTimer = setTimeout(() => { this._isLoading = false }, 1500)
    window.addEventListener('scroll', this._onScroll, { passive: true })
  }

  override disconnectedCallback() {
    super.disconnectedCallback()
    if (this._loadTimer) clearTimeout(this._loadTimer)
    window.removeEventListener('scroll', this._onScroll)
  }

  private _toggleTheme() {
    const root = document.documentElement
    const dark = root.getAttribute('data-theme') === 'dark'
    if (dark) { root.removeAttribute('data-theme'); this._isDark = false }
    else { root.setAttribute('data-theme', 'dark'); this._isDark = true }
  }

  override render() {
    return html`
      <div class="scroll-progress-wrap ${this._showProgress ? 'visible' : ''}">
        <ag-scroll-progress></ag-scroll-progress>
      </div>
      <skin-switcher></skin-switcher>
      <ag-scroll-to-button scroll-threshold="400" shape="circle"></ag-scroll-to-button>

      <ag-header content-justify="between">
        <span slot="logo" style="font-weight:700;font-size:1.125rem;color:var(--ag-primary)">AgnosticUI</span>
        <button class="theme-toggle" aria-label="Toggle theme" @click=${() => this._toggleTheme()}>
          ${this._isDark ? sunIcon : moonIcon}
        </button>
        <ag-avatar text="AC" variant="info"></ag-avatar>
      </ag-header>

      <main class="reader-main">
        ${this._isLoading ? html`
          <div class="loader-overlay">
            <ag-loader size="large" aria-label="Loading article…"></ag-loader>
          </div>
        ` : html`
          <!-- Hero -->
          <div class="hero-wrapper">
            <ag-aspect-ratio width="16" height="9">
              <img class="hero-img" src="${article.heroImage}" alt="${article.heroImageAlt}" />
            </ag-aspect-ratio>
          </div>

          <!-- Meta -->
          <div class="article-meta">
            <div class="article-meta-left">
              <ag-tag>${article.category}</ag-tag>
              <div class="article-meta-author">
                <ag-avatar text="${article.author.initials}" size="sm" variant="info"></ag-avatar>
                <span class="article-meta-author-name">${article.author.name}</span>
              </div>
            </div>
            <div class="article-meta-right">
              <span class="article-meta-date">${article.author.date}</span>
              <span class="article-meta-sep">·</span>
              <ag-badge variant="info">${article.readTime}</ag-badge>
            </div>
          </div>

          <!-- Tabs -->
          <ag-tabs aria-label="Article navigation">
            <ag-tab slot="tab" panel="article">Article</ag-tab>
            <ag-tab slot="tab" panel="comments">Comments (${article.comments.length})</ag-tab>

            <ag-tab-panel slot="panel" id="article">
              <div class="article-tab-content">
                <h1 class="article-title">${article.title}</h1>
                <p class="article-subtitle">${article.subtitle}</p>

                <div class="reader-body">
                  ${article.body.map(para => html`<p>${para}</p>`)}
                </div>

                <ag-divider></ag-divider>

                <!-- Author card -->
                <div class="author-card">
                  <ag-avatar text="${article.author.initials}" variant="info"></ag-avatar>
                  <div>
                    <p class="author-card-name">${article.author.name}</p>
                    <p class="author-card-bio">${article.author.bio}</p>
                  </div>
                </div>

                <!-- Related -->
                <div class="related-section">
                  <h2 class="related-heading">More to read</h2>
                  <div class="related-grid">
                    ${article.related.map(item => html`
                      <div class="related-card">
                        <ag-aspect-ratio width="3" height="2">
                          <img class="related-card-img" src="${item.image}" alt="${item.title}" />
                        </ag-aspect-ratio>
                        <div class="related-card-body">
                          <p class="related-card-title">${item.title}</p>
                          <div class="related-card-meta">
                            <ag-tag>${item.category}</ag-tag>
                            <span>${item.readTime}</span>
                          </div>
                        </div>
                      </div>
                    `)}
                  </div>
                </div>
              </div>
            </ag-tab-panel>

            <ag-tab-panel slot="panel" id="comments">
              <div class="comments-tab-content">
                ${article.comments.map(c => html`
                  <div class="comment-item">
                    <ag-avatar text="${c.initials}" size="sm" variant="default"></ag-avatar>
                    <div class="comment-body">
                      <p class="comment-author">${c.author}</p>
                      <p class="comment-date">${c.date}</p>
                      <p class="comment-text">${c.text}</p>
                    </div>
                  </div>
                `)}
              </div>
            </ag-tab-panel>
          </ag-tabs>
        `}
      </main>
    `
  }
}

if (!customElements.get('blog-app')) {
  customElements.define('blog-app', BlogApp)
}
