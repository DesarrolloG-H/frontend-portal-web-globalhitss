<template>
  <div class="base-multiSelect">
    <label class="name-multiSelect" for="">Responsable RCA</label>
    <multiselect
      v-model="selectedItems"
      :options="options"
      :multiple="true"
      :taggable="true"
      placeholder="Selecciona una o más opciones"
      label="name"
      track-by="name"
    />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data() {
    return {
      selectedItems: [],
      options: [
        { name: 'Servidor 1' },
        { name: 'Servidor 2' },
        { name: 'Servidor 3' },
        { name: 'Servidor 3' },
        { name: 'Servidor 3' },
      ],
    }
  },
}
</script>

<style>
@import 'vue-multiselect/dist/vue-multiselect.min.css';
.multiselect {
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
}
.multiselect__tag-icon::after {
  color: #ffffff;
}

.multiselect__tag {
  background-color: #222222;
  color: white;
  border-radius: 12px;
}
.name-multiSelect {
  font-size: 0.8rem;
  font-weight: 700;
  display: block;
  margin-block-end: 0.5rem;
}
.base-multiSelect {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}
</style>
