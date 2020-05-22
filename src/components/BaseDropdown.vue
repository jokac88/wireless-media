<template>
  <div class="dropdown">
    <div class="isSelected">
      <div class="wrapper">
        <button class="btn btn-dropdown">{{ isSelected }}</button>
        <!-- <Arrow /> -->
      </div>
    </div>
    <ul class="dropdown-menu">
      <li
        v-for="item in contracts"
        @click="preselectedContract(item)"
        :key="item"
        :class="{ active : isSelected === item }"
        class="list-item"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Arrow from "../../public/arrow.svg";

export default {
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

<style scoped lang="scss">
@import "@/scss/_colors.scss";
@import "@/scss/_transition.scss";
@import "@/scss/_mixins.scss";

.dropdown {
  width: 180px;

  .isSelected {
    // margin: 20px;
    background-color: $merino;
    border-radius: 10px 10px 0 0;
    margin-bottom: 2px;

    .wrapper {
      @include d-flex-between;
    }

    .btn {
      &-dropdown {
        text-align: left;
        color: $tundora;
        font-size: 15px;
        padding: 13px 10px 12px 16px;
      }
    }

    .icon {
      width: 15px;
      height: 8px;
      path {
        width: 15px;
        height: 8px;
      }
    }
  }

  &-menu {
    @include ul;

    .list {
      &-item {
        background-color: $merino;
        color: $tundora;
        font-size: 16px;
        padding: 13px 16px 12px;
        cursor: pointer;
        transition: $transition;

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