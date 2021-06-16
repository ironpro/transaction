<template>
  <div class="relative min-h-screen md:flex">
    <side-bar />
    <div class="flex-1 p-10 ">
      <transaction-details />
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import TransactionDetails from '../components/TransactionDetails.vue'
export default {
  components: {
    SideBar,
    TransactionDetails
  },
  data() {
    return {

    }
  },
  async mounted() {
    const user = await this.$axios.$get(`/api/account/fetch-user-details/${this.$store.state.userId}`)
    // this.$store.commit("setAccountDetails", user)
    const transactions = await this.$axios.$get(`/api/account/fetch-transactions/${user.account_id}`)
    // this.$store.commit("setTransactions", transactions)
  }
}
</script>

<style>
/* Sa
SideBarmple `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
