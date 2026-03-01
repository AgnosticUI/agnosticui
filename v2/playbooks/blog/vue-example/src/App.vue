<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SkinSwitcher from './SkinSwitcher.vue'
import { VueHeader } from './components/ag/Header/vue/index.ts'
import { VueAvatar } from './components/ag/Avatar/vue/index.ts'
import { VueBadge } from './components/ag/Badge/vue/index.ts'
import { VueTag } from './components/ag/Tag/vue/index.ts'
import { VueTabs, VueTab, VueTabPanel } from './components/ag/Tabs/vue/index.ts'
import { VueDivider } from './components/ag/Divider/vue/index.ts'
import { VueLoader } from './components/ag/Loader/vue/index.ts'
import { VueScrollProgress } from './components/ag/ScrollProgress/vue/index.ts'
import { VueScrollToButton } from './components/ag/ScrollToButton/vue/index.ts'
import { VueAspectRatio } from './components/ag/AspectRatio/vue/index.ts'
import { article } from './data/article'

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`

const isLoading = ref(true)
const isDark = ref(false)
const showProgress = ref(false)

function onScroll() { showProgress.value = window.scrollY >= 58 }

onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
  setTimeout(() => { isLoading.value = false }, 1500)
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function toggleTheme() {
  if (isDark.value) {
    document.documentElement.removeAttribute('data-theme')
    isDark.value = false
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    isDark.value = true
  }
}

</script>

<template>
  <div :class="['scroll-progress-wrap', { visible: showProgress }]">
    <VueScrollProgress />
  </div>
  <SkinSwitcher />
  <VueScrollToButton :scroll-threshold="400" shape="circle" />

  <VueHeader content-justify="between">
    <template #logo>
      <span style="font-weight: 700; font-size: 1.125rem; color: var(--ag-primary)">AgnosticUI</span>
    </template>
    <button class="theme-toggle" aria-label="Toggle theme" @click="toggleTheme">
      <span v-html="isDark ? sunIcon : moonIcon" />
    </button>
    <VueAvatar text="AC" variant="info" />
  </VueHeader>

  <main class="reader-main">
    <div v-if="isLoading" class="loader-overlay">
      <VueLoader size="large" aria-label="Loading article…" />
    </div>

    <template v-else>
      <!-- Hero -->
      <div class="hero-wrapper">
        <VueAspectRatio :width="16" :height="9">
          <img class="hero-img" :src="article.heroImage" :alt="article.heroImageAlt" />
        </VueAspectRatio>
      </div>

      <!-- Meta -->
      <div class="article-meta">
        <div class="article-meta-left">
          <VueTag>{{ article.category }}</VueTag>
          <div class="article-meta-author">
            <VueAvatar :text="article.author.initials" size="sm" variant="info" />
            <span class="article-meta-author-name">{{ article.author.name }}</span>
          </div>
        </div>
        <div class="article-meta-right">
          <span class="article-meta-date">{{ article.author.date }}</span>
          <span class="article-meta-sep">·</span>
          <VueBadge variant="info">{{ article.readTime }}</VueBadge>
        </div>
      </div>

      <!-- Tabs -->
      <VueTabs aria-label="Article navigation">
        <VueTab slot="tab" panel="article">Article</VueTab>
        <VueTab slot="tab" panel="comments">Comments ({{ article.comments.length }})</VueTab>

        <VueTabPanel slot="panel" id="article">
          <div class="article-tab-content">
            <h1 class="article-title">{{ article.title }}</h1>
            <p class="article-subtitle">{{ article.subtitle }}</p>

            <div class="reader-body">
              <p v-for="(para, i) in article.body" :key="i">{{ para }}</p>
            </div>

            <VueDivider />

            <!-- Author card -->
            <div class="author-card">
              <VueAvatar :text="article.author.initials" variant="info" />
              <div>
                <p class="author-card-name">{{ article.author.name }}</p>
                <p class="author-card-bio">{{ article.author.bio }}</p>
              </div>
            </div>

            <!-- Related -->
            <div class="related-section">
              <h2 class="related-heading">More to read</h2>
              <div class="related-grid">
                <div v-for="item in article.related" :key="item.id" class="related-card">
                  <VueAspectRatio :width="3" :height="2">
                    <img class="related-card-img" :src="item.image" :alt="item.title" />
                  </VueAspectRatio>
                  <div class="related-card-body">
                    <p class="related-card-title">{{ item.title }}</p>
                    <div class="related-card-meta">
                      <VueTag>{{ item.category }}</VueTag>
                      <span>{{ item.readTime }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VueTabPanel>

        <VueTabPanel slot="panel" id="comments">
          <div class="comments-tab-content">
            <div v-for="c in article.comments" :key="c.id" class="comment-item">
              <VueAvatar :text="c.initials" size="sm" variant="default" />
              <div class="comment-body">
                <p class="comment-author">{{ c.author }}</p>
                <p class="comment-date">{{ c.date }}</p>
                <p class="comment-text">{{ c.text }}</p>
              </div>
            </div>
          </div>
        </VueTabPanel>
      </VueTabs>
    </template>
  </main>
</template>
