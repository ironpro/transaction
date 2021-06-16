<template>
  <div>
    <div style="background-color: #745FFE;" class="text-gray-100 flex justify-between md:hidden">
      <!-- logo -->
      <a href="#" class="block p-4 text-white font-bold">{{ account.user.name }}</a>

      <!-- mobile menu button -->
      <button @click="openSideBarForSmallScreens" class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- sidebar -->
    <div style="background: #F9FAFC;height: 100%;" class="z-30 sidebar text-black-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

      <!-- logo -->
      <a href="#" class="text-black flex flex-col items-center space-x-2 px-4">
        <img :src="account.user.avatarUrl" class="rounded-full h-12 w-12" alt="User Avatar">
        <span class="text-base font-extrabold flex items-center">
          <span>{{ account.user.name }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
        <div><b class="text-sm">{{ account.number }}</b></div>
      </a>

      <div class="flex items-center justify-center">
        <div class="text-xs mr-1 font-semibold">Current Balance :</div>
        <div class="text-xs font-bold"> € <span :class="balanceColorClass">{{ account.currentBalance | amountFormat}}</span></div>
      </div>

      <!-- nav -->
      <nav>
        <a href="#" class="block py-2 px-4 rounded transition duration-200 hover-bg-custom-color bg-custom-color-selected hover:text-white">
          Transactions
        </a>
        <a href="" class="block py-2 px-4 rounded transition duration-200 hover-bg-custom-color hover:text-white">
          Dashboard
        </a>
        <a href="" class="block py-2 px-4 rounded transition duration-200 hover-bg-custom-color hover:text-white">
          Payments
        </a>
        <a href="" class="block py-2 px-4 rounded transition duration-200 hover-bg-custom-color hover:text-white">
          Cards
        </a>
        <a href="" class="block py-2 px-4 rounded transition duration-200 hover-bg-custom-color hover:text-white">
          Accounts
        </a>
        <a href="" class="block py-2 px-4 rounded transition duration-200 hover-bg-custom-color hover:text-white">
          Cards
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
    }
  },
  computed: {
    account() {
      return this.$store.state.account
    },
    balanceColorClass() {
      if (this.account.currentBalance < 0) {
        return 'current__balance--low'
      } else {
        return 'current__balance--normal'
      }
    },
  },
  methods: {
    formatNumber(value) {
      return parseFloat(Math.round(value * 100) / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    openSideBarForSmallScreens() {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("-translate-x-full");
    }
  }
}
</script>

<style scoped>
.hover-bg-custom-color:hover {
  background-color: #745FFE;
}
.bg-custom-color-selected {
  background-color: #745FFE;
  color: white;
}
.current__balance--low {
  color: #f00
}

.current__balance--normal {
  color: black
}
</style>
