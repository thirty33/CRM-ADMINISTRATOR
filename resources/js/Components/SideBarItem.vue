<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import { SideBarSingleItem } from "@/Interfaces/MenuItem";
import { Link } from "@inertiajs/vue3";

const props = defineProps<SideBarSingleItem>();

let itemIsOpen: Ref<boolean> = ref(false);

const toggleItem = (): void => {
  itemIsOpen.value = !itemIsOpen.value;
};

onMounted(() => {
  const currentRoute = route().current() as string;
  if (props.childRoutes && props.childRoutes.length > 0 && currentRoute) {
    if (props.childRoutes.includes(currentRoute)) {
      itemIsOpen.value = true;
    }
  }
});
</script>

<template>
  <li
    data-test="side-bar-item"
    class="text-gray-900 rounded-lg dark:text-white"
    :class="{
      'font-black border-solid border-2 border-black-800': route().current(
        `${props.path}`
      ),
    }"
  >
    <div
      class="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <Link
        class="flex items-center p-2"
        :href="route(`${props.path}`, { page: 1})"
        :method="props.httpMethod"
        :as="props.httpMethod == 'post' ? 'button' : undefined"
      >
        <slot name="icon"></slot>
        <span class="ms-3">{{ props.title }}</span>
      </Link>
      <div class="flex-1 pd-4" v-if="props.hasChildren">
        <svg
          @click.stop="toggleItem"
          v-if="!itemIsOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 float-right"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          @click.stop="toggleItem"
          v-if="itemIsOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 float-right"
        >
          <path
            fill-rule="evenodd"
            d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div
      class="w-full pl-5 transition ease-in-out delay-150"
      :class="{
        'opacity-0 h-0 overflow-y-hidden': !itemIsOpen,
        'opacity-100 h-auto': itemIsOpen,
      }"
    >
      <slot name="children"></slot>
    </div>
  </li>
</template>
