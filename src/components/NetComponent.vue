<template>
  <section class="net">
    <div
      class="net-flex"
      ref="netHeight"
      :class="{ active : active !== 'Ugovor 24 meseca' }"
      :style="{ height : height + 'px' }"
    >
      <img
        :class="classes"
        class="icon"
        :src="data.assets.net_category"
        :alt="data.assets.net_category"
      />
      <ul>
        <li
          v-for="item in net"
          v-if="item.product_category === 'net'"
          v-html="$options.filters.bolder(item.long_name, item.attributes.attribute_value)"
          :key="item.id"
          class="list-item"
        ></li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { heightMixin } from "@/mixins/heightMixin.js";

export default {
  mixins: [heightMixin],
  props: {
    classes: Array,
    data: Object,
    net: Array,
    active: String
  },
  computed: {
    ...mapState(["netMaxHeight"]),
    getHeight() {
      return this.$refs.netHeight.clientHeight;
    },
    height() {
      if (this.isActive) {
        return this.netMaxHeight;
      }
    }
  },
  mounted() {
    const payload = { section: "netMaxHeight", height: this.getHeight };
    this.maxHeight(payload).then(() => (this.isActive = true));
  }
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
// Import scss files

@import "@/scss/_mixins.scss";

// Style

.net {
  &-flex {
    @include d-flex-align;
    margin: 30px 0 24px;

    @include for-tablet-only {
      margin-bottom: 22px;
    }

    @include for-mobile-only {
      margin-bottom: 35px;
    }

    &.active {
      @include for-tablet-only {
        margin: 30px 0;
      }

      @include for-mobile-only {
        margin-bottom: 48px;
      }
    }

    ul {
      @include ul-li;
    }

    .icon {
      margin-right: 42px;
    }
  }
}
</style>