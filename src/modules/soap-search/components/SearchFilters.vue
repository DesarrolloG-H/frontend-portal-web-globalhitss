<template>
  <div class="capsule">
    <div class="search-content">
      <span class="subtitle-options">¿Qué desea buscar?</span>
      <div class="search">
        <i class="bx bx-search"></i>
        <input v-model="searchTerm" type="text" placeholder="Buscar..." class="input-search" />
      </div>
    </div>

    <div class="select-content">
      <span class="subtitle-options">Grupo</span>
      <select v-model="selectedGroup" class="filter-select">
        <option value="">Todos los equipos</option>
        <option v-for="team in uniqueGroups" :key="team" :value="team">{{ team }}</option>
      </select>
    </div>

    <div class="select-content">
      <span class="subtitle-options">Equipo</span>
      <select v-model="selectedSubteam" class="filter-select" :disabled="!selectedGroup">
        <option value="">Todos los subequipos</option>
        <option v-for="subteam in filteredSubteams" :key="subteam" :value="subteam">
          {{ subteam }}
        </option>
      </select>
    </div>

    <div class="select-content">
      <span class="subtitle-options">Documento</span>
      <select v-model="selectedTypeDocument" class="filter-select" :disabled="!selectedSubteam">
        <option value="">Todos los documentos</option>
        <option v-for="doc in filteredTypeDocuments" :key="doc" :value="doc">
          {{ doc }}
        </option>
      </select>
    </div>

    <div class="content-btn-search">
      <button class="btn-search" @click="applyFilters">Buscar</button>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import { inject } from 'vue'

const {
  searchTerm,
  selectedGroup,
  selectedSubteam,
  selectedTypeDocument,
  uniqueGroups,
  filteredSubteams,
  filteredTypeDocuments,
  applyFilters,
} = inject('soapSearch')
</script>

<style scoped>
.capsule {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(18, 18, 18, 0.2);
  margin-block-end: 2.5rem;
}
.search-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.search {
  position: relative;
  display: flex;
}

.search i {
  position: absolute;
  top: 10px;
  left: 10px;
}

.search .input-search {
  block-size: 2rem;
  padding-inline-start: 2rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  flex: 1;
}

.subtitle-options {
  font-size: 1.2rem;
  font-weight: 600;
  margin-block-end: 0.5rem;
}

.select-content {
  display: flex;
  flex-direction: column;
}

.filter-select {
  block-size: 2.2rem;
  padding-block: 0.5rem;
  padding-inline: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  color: #000;
}

.btn-search {
  block-size: 2.5rem;
  padding-inline: 1.5rem;
  border-radius: 1rem;
  background-color: #171215;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.1s;
}

@media (max-width: 1240px) {
  .capsule:first-of-type {
    /* border: 1px solid red; */
    flex-direction: column;
    align-items: normal;
  }
  .content-btn-search {
    display: flex;
    justify-content: center;
  }
  .btn-search {
    /* border: 1px solid red; */
    inline-size: 200px;
  }
}
</style>
