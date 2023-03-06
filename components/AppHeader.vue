<template>
  <header class="py-4 sticky top-0 z-50">
    <div class="container px-4 mx-auto flex justify-between items-center">
      <h1>
        <span>
          <a href="/" class="font-bold text-xl text-[#b8bee0]">amit sharma</a>
        </span>
      </h1>

      <div id="navbar-collapse" class="flex flex-row gap-4">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          class="block cursor-pointer focus:scale-110 hover:scale-110 transition duration-200"
          target="_blank"
        >
          <Logo
            :logo="social.logo"
            :name="social.name"
            :show-tooltip="false"
            class="w-7 h-7"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const socials = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/amit-ksh',
    logo: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/amit__ksh',
    logo: 'twitter',
  },
  {
    name: 'CodePen.io',
    url: 'https://codepen.io/amit-ksh',
    logo: 'codepen',
  },
  {
    name: 'Github',
    url: 'https://github.com/amit-ksh',
    logo: 'github',
  },
]
</script>

<style scoped>
header {
  background: linear-gradient(
    -90deg,
    hsla(320, 100%, 50%, 0.2) 10%,
    hsla(320, 100%, 60%, 0.3) 30%,
    hsla(40, 100%, 60%, 0.2) 60%,
    hsla(200, 100%, 60%, 0.4) 100%
  );
  background: #020314;
}
</style>
