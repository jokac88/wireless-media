<template>
  <section class="dropdown">
    <div :class="{ active: isShow }" class="isSelected">
      <div class="d-flex">
        <button class="btn btn-dropdown" @click="isShow = !isShow" v-out="isShow">{{ isSelected }}</button>
        <Arrow :class="{ active : isShow } " class="icon icon-arrow" />
      </div>
    </div>
    <transition name="fade">
      <ul class="dropdown-menu" v-if="isShow">
        <li
          v-for="item in contracts.slice().reverse()"
          @click="preselectedContract(item), isShow = !isShow"
          :key="item"
          :class="{ active : isSelected === item }"
          class="list-item"
        >{{ item }}</li>
      </ul>
    </transition>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import Arrow from "../../public/arrow.svg";

export default {
  data: () => ({
    isShow: false
  }),
  props: {
    contracts: Array,
    isSelected: String
  },
  methods: mapActions(["preselectedContract"]),
  components: {
    Arrow
  }
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
// Import scss files

@import "@/scss/_colors.scss";
@import "@/scss/_transitions.scss";
@import "@/scss/_mixins.scss";

// Style

.dropdown {
  min-width: 180px;
  position: absolute;
  top: 18px;
  right: 173px;

  @include for-tablet-only {
    top: 41px;
    right: 44px;
  }

  @include for-mobile-only {
    min-width: 200px;
    top: 40px;
    right: 50%;
    transform: translate(50%, 0);
  }

  .isSelected {
    background-color: $merino;
    border-radius: 10px;
    margin-bottom: 2px;
    transition: $transition-3;

    @include for-tablet-only {
      border: 1px solid $alto;
    }

    @include for-mobile-only {
      border: none;
    }

    &.active {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    .d {
      &-flex {
        @include d-flex-between;
      }
    }

    .btn {
      &-dropdown {
        width: 100%;
        position: relative;
        z-index: 2;
        text-align: left;
        color: $tundora;
        font-size: 15px;
        padding: 13px 30px 12px 16px;
      }
    }

    .icon {
      &-arrow {
        width: 18px;
        height: 16px;
        position: absolute;
        right: 10px;
        z-index: 0;
        fill: $gray;
        transition: $transition-3;

        &.active {
          transform: rotate(-90deg);
        }
      }
    }
  }

  &-menu {
    @include ul-li-none;
    position: absolute;
    left: 0;
    z-index: 1;
    right: 0;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.75);

    .list {
      &-item {
        background-color: $merino;
        color: $tundora;
        font-size: 16px;
        padding: 13px 16px 12px;
        cursor: pointer;
        transition: $transition-3;

        &:hover:not(.active),
        &.active {
          background-color: $plum;
          color: $white;
        }

        &:last-child {
          border-radius: 0 0 10px 10px;
        }
      }
    }
  }
}
</style>