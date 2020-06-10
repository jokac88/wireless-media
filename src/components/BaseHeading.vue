<template>
  <section class="heading">
    <div v-if="isFeatured > 0" class="promo">
      <h5 class="promo-text">{{ promoText }}</h5>
      <hr />
    </div>
    <div class="heading-flex" :style="{ height : height + 'px' }">
      <h1 class="heading-text" ref="headingHeight">
        <slot></slot>
      </h1>
    </div>
    <hr />
  </section>
</template>

<script>
import { mapState } from "vuex";
import { heightMixin } from "@/mixins/heightMixin.js";

export default {
  mixins: [heightMixin],
  props: ["isFeatured", "promoText"],
  computed: {
    ...mapState(["headingMaxHeight"]),
    getHeight() {
      return this.$refs.headingHeight.clientHeight;
    },
    height() {
      if (this.isActive) {
        return this.headingMaxHeight;
      }
    }
  },
  mounted() {
    const payload = { section: "headingMaxHeight", height: this.getHeight };
    this.maxHeight(payload).then(() => (this.isActive = true));
  }
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_mixins.scss";

// Style

.promo {
  &-text {
    margin: 12px 0 14px;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    font-style: italic;

    @include for-tablet-only {
      margin: 14px 0 12px;
    }

    @include for-mobile-only {
      margin: 12px 0 14px;
    }
  }
}

.heading {
  &-flex {
    @include d-flex-center;
    margin: 30px auto 22px;

    @include for-tablet-only {
      margin-bottom: 30px;
    }

    @include for-mobile-only {
      margin-bottom: 21px;
    }
  }

  &-text {
    width: 210px;
    font-size: 48px;
    line-height: 47px;
    text-align: center;
    font-style: italic;

    @include for-tablet-only {
      margin: 0 auto;
    }
  }
}
</style>