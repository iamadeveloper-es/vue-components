<template>
  <div 
  class="app-accordion">
    <div 
    class="app-accordion-header" 
    @click="toggle">
      <span 
      class="fas fa-chevron-down" 
      :class="show ? 'app-collapse-open' : 'app-collapse-close'"
      ></span>
      <span 
      name="header" 
      class="app-accordion-header-title">{{ title }}</span>
    </div>
    <transition
    name="accordion"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    >
      <div 
      class="app-accordion-body" 
      v-show="show">
        <div 
        class="app-accordion-body-inner"
        >
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
    name: 'app-accordion',
    props: {
        title: String,
    },
    data() {
        return {
        show: false,
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
        beforeEnter(el) {
            el.style.height = '0';
        },
        enter(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        beforeLeave(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        leave(el) {
            el.style.height = '0';
        },
    },
};
</script>
<style lang="scss">
    .app-accordion {
        .app-accordion-header {
            padding: 10px;
            margin-bottom: 10px;
            background-color: var(--primary-grey);
            line-height: 40px;
            position: relative;
            cursor: pointer;
        }
        .app-accordion-body {
            overflow: hidden;
            transition: .3s ease-out;
        }
        .app-accordion-body-inner {
            padding: 8px;
            overflow-wrap: break-word;
        }
    }
    .app-collapse-open{
        transform: rotate(-180deg);
        transition: transform .2s ease-in-out;
    }
    .app-collapse-close{
        transform: rotate(0deg);
        transition: transform .2s ease-in-out;
    }

</style>
