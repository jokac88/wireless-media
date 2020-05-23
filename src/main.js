import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  // The relative path of the components folder
  "./components",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

// Filter for bolder text
Vue.filter("bolderText", (text, value) => {
  return text.replace(value, `<strong>${value}</strong>`);
});

// Filter for currency format
Vue.filter("currencyFormatter", (num) => {
  return parseInt(num)
    .toLocaleString()
    .replace(",", ".");
});

// Directive for outside click
Vue.directive("out", {
  bind: (el, binding, vNode) => {
    const handler = (e) => {
      if (!el.contains(e.target) && el !== e.target) {
        //and here is you toggle var. thats it
        vNode.context[binding.expression] = false;
      }
    };
    el.out = handler;
    document.addEventListener("click", handler);
  },

  unbind: (el, binding) => {
    document.removeEventListener("click", el.out);
    el.out = null;
  },
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
