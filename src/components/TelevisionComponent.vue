<template>
  <div class="television">
    <div class="television-flex">
      <img
        :class="classes"
        class="icon"
        :src="data.assets.tv_category"
        :alt="data.assets.tv_category"
      />
      <ul>
        <li
          v-for="item in television"
          v-if="item.product_category === 'tv'"
          v-html="$options.filters.bolderText(item.long_name, item.attributes.attribute_value)"
          :key="item.id"
          class="list-item"
        ></li>
      </ul>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    classes: Array,
    data: Object,
    television: Array
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_mixins.scss";

.television {
  &-flex {
    @include d-flex-align;
  }
}
</style>