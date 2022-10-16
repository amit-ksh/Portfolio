<template>
  <div>
    <div class="absolute bg-white rounded-lg top-2 py-3 px-8 right-2">
      <h3 class="mb-2 text-lg text-blue-500 font-bold font-exo">Connect with me!</h3>

      <div class="flex justify-between align-middle gap-3 w-8 h-8">
        <a v-for="social in socials" :key="social.name" 
          :href="social.url"
          class="cursor-pointer" 
          target="_blank"
        >
          <component :is="social.Logo" :label="social.name" class="block w-8 h-8"></component>
        </a>
      </div>
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script lang="ts" setup>
import '@/assets/css/main.css'
import GithubLogo from '~/components/Logo/Github.vue'
import LinkedInLogo from '~/components/Logo/LinkedIn.vue'
import TwitterLogo from '~/components/Logo/Twitter.vue'
import CodepenLogo from '~/components/Logo/Codepen.vue'

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/amit-ksh',
    Logo: LinkedInLogo
  },
  {
    name: 'Github',
    url: 'https://github.com/amit-ksh',
    Logo: GithubLogo
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/amit__ksh',
    Logo: TwitterLogo
  },
  {
    name: 'CodePen.io',
    url: 'https://codepen.io/amit-ksh',
    Logo: CodepenLogo
  },
]
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.font-exo {
  font-family: 'Exo 2', sans-serif;
}

.font-space-mono {
  font-family: 'Space Mono', monospace;
}
</style>