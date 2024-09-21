<template>
  <div class="bg-white rounded-lg py-3 px-6 z-50">
    <h3 class="mb-2 text-lg text-blue-700 font-bold font-exo italic">
      Connect with me!
    </h3>

    <div class="grid grid-cols-3 gap-2">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        class="block cursor-pointer focus:scale-110 hover:scale-110 transition duration-200"
        target="_blank"
      >
        <Logo :logo="social.logo" :name="social.name" class="w-7 h-7" />
      </a>
    </div>
  </div>
</template>

<script setup>
const socials = [
  {
    name: 'Github',
    url: 'https://github.com/amit-ksh',
    logo: 'github',
  },
  {
    name: 'CodePen.io',
    url: 'https://codepen.io/amit-ksh',
    logo: 'codepen',
  }, 
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/amit-ksh',
      logo: 'linkedin',
    },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/amit__ksh',
    logo: 'instagram',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/amit__ksh',
    logo: 'twitter',
  },
]
</script>
