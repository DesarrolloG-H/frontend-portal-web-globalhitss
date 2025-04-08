<template>
  <div>
    <h2>SOAP SEARCH</h2>

    <SearchFilters />
    <SearchTable />
  </div>
</template>

<script setup>
import { provide } from 'vue'
import { useSoapSearch } from '../composables/useSoapSearch'
import SearchFilters from '../components/SearchFilters.vue'
import SearchTable from '../components/SearchTable.vue'

const soapSearch = useSoapSearch()
provide('soapSearch', soapSearch)
</script>

<style scoped>
h2 {
  font-size: 3rem;
  margin: 0;
  margin-block-start: 1rem;
  margin-block-end: 2rem;
}
</style>
