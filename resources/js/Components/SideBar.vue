<script setup lang="ts">
import SideBarItemVue from "./SideBarItem.vue";
import { useNavItems } from '@/Hooks/useNavItems';
import { MenuItem } from "@/Interfaces/MenuItem";

const props = defineProps<{
    menuItems: MenuItem[]
}>();

</script>

<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 lg:w-2/12 md:w-3/12 sm:hidden md:block h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 h-full font-medium">
        <SideBarItemVue
          v-for="item in props.menuItems"
          data-test="main-item"
          :key="item.id"
          :title="item.title"
          :isChild="item.isChild"
          :hasChildren="item.hasChildren"
          :path="item.path"
          :child-routes="item.childRoutes"
          :http-method="item.httpMethod"
        >
          <template #icon>
            <component :is="item.iconComponent"></component>
          </template>
          <template #children v-if="item.hasChildren">
            <SideBarItemVue
              v-for="child in item.children"
              data-test="child-item"
              :key="child.id"
              :title="child.title"
              :isChild="child.isChild"
              :hasChildren="child.hasChildren"
              :path="child.path"
              :child-routes="child.childRoutes"
              :http-method="child.httpMethod"
            >
              <template #icon>
                <component :is="child.iconComponent"></component>
              </template>
            </SideBarItemVue>
          </template>
        </SideBarItemVue>
      </ul>
    </div>
  </aside>
</template>


