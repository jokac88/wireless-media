<template>
  <section class="home">
    <!-- Loader Component -->
    <Loader v-if="loading" />
    <div class="items" v-else>
      <!-- BaseDropdown Component -->
      <BaseDropdown
        :contracts="typeof data.contract_length !== 'undefined' ? data.contract_length.contract_length_options : []"
        :isSelected="typeof data.contract_length !== 'undefined' ? data.contract_length.preselected_contract_length : ''"
      />
      <!-- BaseItem Component -->
      <BaseItem
        v-for="item in data.items"
        :isFeatured="item.is_featured"
        :promoText="data.promo_text"
        :items="item"
        :key="item.id"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LoaderComponent from "@/components/LoaderComponent.vue";

export default {
  data: () => ({
    loading: true
  }),
  components: {
    Loader: LoaderComponent
  },
  methods: mapActions(["fetchData"]),
  computed: mapState(["data"]),
  mounted() {
    this.fetchData();
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }
};
</script>

<style lang="scss">
// Import scss files

@import "@/scss/main.scss";

// Style

.home {
  .items {
    position: relative;
    max-width: 1366px;
    margin: 0 auto;
    padding-top: 80px;
    @include d-flex-end;

    @include for-tablet-only {
      display: block;
      max-width: 768px;
      padding-top: 118px;
    }

    @include for-mobile-only {
      max-width: 320px;
      padding-top: 103px;
    }
  }
}
</style>
