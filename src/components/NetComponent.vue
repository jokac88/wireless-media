<template>
  <div class="net">
    <div class="net-flex">
      <img
        :class="classes"
        class="icon"
        :src="data.assets.net_category"
        :alt="data.assets.net_category"
      />
      <NetIcon class="icon" />
      <ul>
        <li
          v-for="item in net"
          v-if="item.product_category === 'net'"
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
import NetIcon from "../../public/iphone.svg";
export default {
  props: {
    classes: Array,
    data: Object,
    net: Array
  },
  components: {
    NetIcon
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_mixins.scss";

.net {
  &-flex {
    @include d-flex-align;
  }
}
</style>