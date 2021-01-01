<template>
  <div v-on-clickaway="close" class="autocomplete-wrapper">
    <input
      v-model="selected"
      @input="change"
      :placeholder="placeholder"
      class="form-control"
      type="text"
    />
    <ul v-if="open" class="dropdown-menu">
      <li
        v-for="(suggestion, index) in matches"
        :key="index"
        @click="suggestionClick(index)"
      >
        <a href="#">{{ suggestion.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  name: 'Autocomplete',
  mixins: [clickaway],
  props: {
    suggestions: {
      type: Array,
      required: true,
    },
    selection: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      open: false,
      selected: '',
    };
  },
  computed: {
    matches() {
      return this.suggestions.filter((suggestion) => {
        return (
          suggestion.name.toLowerCase().indexOf(this.selected.toLowerCase()) >=
          0
        );
      });
    },
  },
  methods: {
    openSuggestion() {
      return (
        this.selection !== '' && this.matches.length != 0 && this.open === true
      );
    },
    change() {
      if (this.open == false) {
        this.open = true;
      }
      this.$emit('selected', '');
    },

    suggestionClick(index) {
      this.$emit('selected', this.matches[index].id);
      this.selected = this.matches[index].name;
      this.open = false;
    },
    close() {
      this.open = false;
    },
  },
  mounted() {
    const selectedObj = this.suggestions.find(
      (suggestion) => suggestion.id === this.selection
    );
    selectedObj && selectedObj.name
      ? (this.selected = selectedObj.name)
      : (this.selected = '');
  },
};
</script>

<style lang="scss">
.autocomplete-wrapper {
  position: relative;
  .dropdown-menu {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    max-height: 140px;
    overflow: auto;
    padding: 10px;
    background: #fff;
    box-shadow: $main-shadow;
    li {
      padding: 5px 0;
    }
  }
}
</style>
