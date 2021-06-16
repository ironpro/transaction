<template>
  <div>
    <div>
      <h4 class="text-2xl font-bold pb-4">Transaction Details</h4>
      <transactions-filter />
      <transaction-methods />
      <transactions />
    </div>
  </div>
</template>

<script>
import TransactionsFilter from './TransactionsFilter.vue'
import Transactions from './Transactions.vue'
import TransactionMethods from './TransactionMethods.vue'
export default {
  components: { TransactionsFilter, Transactions, TransactionMethods },
  name: 'TransactionDetails',
  data() {
    return {
    
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
</style>
