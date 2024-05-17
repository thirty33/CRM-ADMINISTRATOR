<script setup lang="ts">
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import SideBarVue from "@/Components/SideBar.vue";
import SideBarItemVue from "@/Components/SideBarItem.vue";

import { useNavItems } from "@/Hooks/useNavItems";
import { useTranslation } from "@/Hooks/useTranslations";

const { menuItems, secondActionsMenuItems } = useNavItems();
const { translate } = useTranslation();

const showingNavigationDropdown = ref(false);
</script>

<template>
  <div>
    <div class="min-h-screen bg-gray-100">
      <nav class="border-b border-gray-100">
        <div
          class="min-w-max px-4 sm:px-6 lg:px-8 flex md:justify-end lg:justify-end"
        >
          <div
            class="w-10/12 flex justify-between h-16 md:w-9/12 lg:w-10/12 sm:w-full"
          >
            <div class="flex">
              <div class="shrink-0 flex items-center">
                <Link :href="route('dashboard')">
                  <ApplicationLogo
                    class="block h-9 w-auto fill-current text-gray-800"
                  />
                </Link>
              </div>

              <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink
                  :href="route('dashboard')"
                  :active="route().current('dashboard')"
                  v-show="false"
                >
                  Dashboard
                </NavLink>
              </div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ms-6">
              <div class="ms-3 relative">
                <Dropdown align="right" width="48">
                  <template #trigger>
                    <span class="inline-flex rounded-md">
                      <button
                        type="button"
                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                      >
                        {{ $page.props.auth.user.name }}

                        <svg
                          class="ms-2 -me-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </template>

                  <template #content>
                    <DropdownLink :href="route('profile.edit')">
                      {{ translate("Profile") }}
                    </DropdownLink>
                    <DropdownLink
                      :href="route('logout')"
                      method="post"
                      as="button"
                    >
                      {{ translate("Log Out") }}
                    </DropdownLink>
                  </template>
                </Dropdown>
              </div>
            </div>

            <div class="-me-2 flex items-center sm:hidden">
              <button
                @click="showingNavigationDropdown = !showingNavigationDropdown"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    :class="{
                      hidden: showingNavigationDropdown,
                      'inline-flex': !showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="{
                      hidden: !showingNavigationDropdown,
                      'inline-flex': showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          :class="{
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          }"
          class="sm:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <ul class="space-y-2 h-full font-medium w-3/5">
              <SideBarItemVue
                v-for="item in menuItems"
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

            <!-- <ResponsiveNavLink
              :href="route('dashboard')"
              :active="route().current('dashboard')"
            >
              Dashboard
            </ResponsiveNavLink> -->
          </div>

          <div class="pt-4 pb-1 border-t border-gray-200">
            <div class="px-4">
              <div class="font-medium text-base text-gray-800">
                {{ $page.props.auth.user.name }}
              </div>
              <div class="font-medium text-sm text-gray-500">
                {{ $page.props.auth.user.email }}
              </div>
            </div>

            <div class="mt-3 space-y-1">
              <!-- <ResponsiveNavLink :href="route('profile.edit')">
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink
                :href="route('logout')"
                method="post"
                as="button"
              >
                Log Out
              </ResponsiveNavLink> -->
              <ul class="space-y-2 h-full font-medium">
                <SideBarItemVue
                  v-for="item in secondActionsMenuItems"
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
          </div>
        </div>
      </nav>

      <header class="shadow" v-if="$slots.header">
        <div
          class="min-w-max py-6 px-4 sm:px-6 lg:px-8 flex md:justify-end lg:justify-end"
        >
          <div class="w-fullmd:w-9/12 lg:w-10/12">
            <slot name="header" />
          </div>
        </div>
      </header>

      <div class="h-full w-full flex">
        <div class="lg:w-2/12 md:w-3/12 sm:hidden md:block">
          <SideBarVue :menuItems="menuItems" />
        </div>

        <div class="lg:w-10/12 md:w-9/12 h-full">
          <!-- Page Content -->
          <main>
            <slot />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
