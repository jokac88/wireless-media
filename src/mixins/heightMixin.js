import { mapActions } from "vuex";

export const heightMixin = {
  data: () => ({
    isActive: false,
  }),
  methods: mapActions(["maxHeight"]),
};
