<template>
  <section class="television">
    <div class="television-flex" ref="tvHeight" :style="{ height : height + 'px' }">
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
          v-html="$options.filters.bolder(item.long_name, item.attributes.attribute_value)"
          :key="item.id"
          class="list-item"
        ></li>
      </ul>
    </div>
    <hr />
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
    television: Array
  },
  computed: {
    ...mapState(["tvMaxHeight"]),
    getHeight() {
      return this.$refs.tvHeight.clientHeight;
    },
    height() {
      if (this.isActive) {
        return this.tvMaxHeight;
      }
    }
  },
  mounted() {
    const payload = { section: "tvMaxHeight", height: this.getHeight };
    this.maxHeight(payload).then(() => (this.isActive = true));
  }
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
// Import scss files

@import "@/scss/_mixins.scss";

// Style

.television {
  &-flex {
    @include d-flex-align;
    margin: 39px 0 34px;

    @include for-tablet-only {
      margin: 40px 0;
    }

    @include for-tablet-only {
      margin: 37px 0 41px;
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