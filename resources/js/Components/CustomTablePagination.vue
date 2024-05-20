<script setup lang="ts">
import { TablePaginationListDto } from "@/Interfaces/tables";
import { Link } from "@inertiajs/vue3";

const props = defineProps<TablePaginationListDto>();

// console.log("props", props.dataItems.links);
console.log("props meta", props.dataItems.meta);

const pages2 = [
  { number: "1", active: false },
  { number: "2", active: false },
  { number: "3", active: true },
  { number: "4", active: false },
  { number: "5", active: false },
];

const totalPages = props.dataItems.meta.last_page;
const currentPage = props.dataItems.meta.current_page;
const defaultPagestoShow = 5;

const totalPagesToShow =
  totalPages <= defaultPagestoShow ? totalPages : defaultPagestoShow;

console.log("totalPagesToShow", totalPagesToShow);

const pages = (numberPages: number) => {
  let pagesToReturn = [];
  for (let index = 1; index <= numberPages; index++) {
    pagesToReturn.push({ number: `${index}`, active: index === currentPage });
  }
  return pagesToReturn;
};
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <Link
          v-if="!(currentPage === 1)"
          :href="
            route('module-list', {
              page: currentPage - 1,
            })
          "
          class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :class="{ 'opacity-75': currentPage === 1 }"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </Link>
      </li>

      <li v-for="page in pages(totalPagesToShow)" :key="page.number">
        <Link
          :href="route('module-list', { page: page.number })"
          :class="{
            'z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white':
              page.active,
            'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
              !page.active,
          }"
          >{{ page.number }}
        </Link>
      </li>

      <li>
        <a
          v-if="!(currentPage === totalPages)"
          :href="
            route('module-list', {
              page: currentPage + 1,
            })
          "
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-3 h-3 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>
