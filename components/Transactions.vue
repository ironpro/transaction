<template>
  <div>
    <div class="py-4">
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div
          class="inline-block min-w-full shadow-md overflow-hidden"
        >
          <table class="min-w-full leading-normal" v-if="filteredTransactions.length > 0">
            <thead>
              <tr>
                <th class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                  Details
                </th>
                <th class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                  Amount
                </th>
                <th class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                  Transaction Id
                </th>
                <th class="px-5 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                  Date
                </th>
                 <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                   Mark Spam
                 </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in filteredTransactions" :key="transaction.transaction_id">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-6 h-4">
                      <svg v-if="transaction.payment_meta.payment_method==='Credit Card'" style="color: #4b616e" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                      </svg>
                      <svg v-if="transaction.payment_meta.payment_method==='Debit Card'" style="color: #ff9966" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <svg v-if="transaction.payment_meta.payment_method==='Transfer'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <svg v-if="transaction.payment_meta.payment_method==='UPI'" style="color: #77aaff" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                    <div class="ml-2">
                      <p class="text-gray-900 font-semibold whitespace-no-wrap">
                        {{transaction.name}}
                      </p>
                      <p class="text-gray-400 text-xs whitespace-no-wrap">{{ transaction.description}}</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-400 whitespace-no-wrap">€ <span :style="`color: ${transaction.transaction_type === 'debit' ? '#cc3300' : '#99cc33' }`">{{ transaction.amount | amountFormat }}</span></p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-400 whitespace-no-wrap">{{ transaction.transaction_id }}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-400 whitespace-no-wrap">{{ transaction.date | utcTimestamp }}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap cursor-pointer" @click="confirmMarkSpam(transaction)">
                    <svg v-if="!transaction.mark_spam" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon w-5 h-5 mx-2">
                      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 mx-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                    </svg>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center" v-else>No data for your search query</div>
        </div>
      </div>
    </div>
    <v-dialog />
  </div>
</template>

<script>
export default {
  name: 'Transactions',
  data() {
    return {
    }
  },
  computed: {
    transactions() {
      return this.$store.state.transactions;
    },
    filteredTransactions() {
      return this.transactions.filter(a=>(a.name.toLowerCase()).includes(this.searchQuery.toLowerCase()))
    },
    searchQuery() {
      return this.$store.state.searchQuery;
    }
  },
  methods: {
    confirmMarkSpam(transaction) {
      this.$modal.show("dialog", {
        title: "Mark Spam",
        text: `Are you sure you want to mark transaction with id ${transaction.transaction_id}?`,
        buttons: [
          {
            title: "Yes",
            handler: async () => {
              try {
                this.working = true;
                await this.$axios.$post(`/api/transaction/report-spam/${transaction.transaction_id}`);
                this.$notify({
                  type: "success",
                  title: "Transaction has been marked as fake, we will soon reach out to you."
                });
                this.$modal.hide("dialog");
                this.$store.commit("markTransactionSpam", transaction);
                this.$emit('refresh');
              }
              catch(error) {
                const errorMessage = error.response.data.message;
                this.$notify({
                  type: "error",
                  title: errorMessage || "Failed to mark transaction."
                });
              } finally {
                this.working = false;
              }
            }
          },
          {
            title: "No",
            handler: () => this.$modal.hide("dialog")
          }
        ]
      });
    }
  }
}
</script>

<style scoped>
</style>