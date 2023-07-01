<template>
  <header class="w-screen h-40 bg-mobileBg md:bg-bgHeader">
    <div class="w-[80vw] mx-auto pt-10 flex justify-between">
      <router-link to="/">
        <h1 class="text-white font-bold text-4xl">devjobs</h1>
      </router-link>
      <div class="flex justify-items-center items-center gap-3">
        <img src="@/assets/sunlight.svg" />
        <div class="w-12 h-6 bg-white rounded-xl pt-1 pl-1">
          <div
            :class="{ 'bg-violet hover:bg-hoverViolet cursor-pointer w-4 h-4 rounded-full': !isDarkMode, 'bg-violet hover:bg-hoverViolet cursor-pointer w-4 h-4 rounded-full ml-6': isDarkMode }"
            @click="toggleDarkMode">
          </div>
        </div>
        <img src="@/assets/crescent.svg" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'JobsHeader',
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark');

      if (this.isDarkMode) {
        document.documentElement.style.backgroundColor = '#121721'; // Dark mode background color
      } else {
        document.documentElement.style.backgroundColor = '#F4F6F8'; // Light mode background color
      }
    }
  }
}
</script>