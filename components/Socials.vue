<template>
  <div class="bg-white rounded-lg py-3 px-6 z-50">
    <h3 class="mb-2 text-lg text-[#009ffd] font-bold font-exo">Connect with me!</h3>

    <div class="flex justify-between align-middle gap-3">
      <a v-for="social in socials" :key="social.name" 
        :href="social.url"
        class="block cursor-pointer focus:scale-110 hover:scale-110 transition duration-200" 
        target="_blank"
      >
        <component 
          :is="social.Logo" 
          :label="social.name"
          class="w-8 h-8"
        />
    </a>
    </div>
  </div>
</template>

<script setup>
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
