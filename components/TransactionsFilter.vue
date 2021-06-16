<template>
  <div class="flex items-center justify-between flex-wrap">
    <div class="relative w-56 py-2">
      <input type="text" class="rounded z-0 bg-gray-100 pl-2 pt-1 pb-1 focus:shadow focus:outline-none" v-model="searchQuery" placeholder="Search ...">
      <div class="absolute top-4 right-1 text-gray-400 z-20 hover:text-gray-500 cursor-pointer"> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> </div>
    </div>
    <div class="flex items-center py-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
      <button class="btn-bg-custom-color text-white text-sm font-bold py-1 px-2 rounded inline-flex justify-around items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span>Export</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionsFilter',
  data() {
    return {
      
    }
  },
  computed: {
    searchQuery: {
      set(value) {
        this.$store.commit('setSearchQuery', value)
      },
      get() {
        return this.$store.state.searchQuery
      }
    }
  }
}
</script>

<style scoped>
.btn-bg-custom-color {
  background-color: #745FFE;
}
.btn-bg-custom-color:hover {
  opacity: 0.8;
}
</style>
