<script setup lang="ts">
import { TablePaginationListDto } from "@/Interfaces/tables";
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";
import { usePagination } from "@/Hooks/usePagination";
import { usePage } from "@inertiajs/vue3";
import { useHttp } from "@/Hooks/useHttp";

const props = defineProps<TablePaginationListDto>();

const page = usePage();

const { last_page, current_page } = props.dataItems.meta;

const { currentPage, pages, totalPages, initPageToShow, totalPagesToShow } =
  usePagination({
    last_page: last_page,
    current_page: current_page,
    default_page_to_show: page?.props?.number_page_pagination ?? 5,
  });

const { path_module, delete_action, udpate_action, index_action } = props;

const { getPage } = useHttp({
  path_module: path_module,
  delete_action: delete_action,
  udpate_action: udpate_action,
  index_action: index_action,
});
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <Link
          v-if="!(currentPage === 1)"
          :href="
            getPage({
              page: currentPage - 1,
            })
          "
          :only="['dataItems']"
          preserve-scroll
          preserve-state
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

      <li
        v-for="page in pages(totalPages).slice(
          initPageToShow,
          totalPagesToShow
        )"
        :key="page.number"
      >
        <Link
          :href="
            getPage({
              page: page.number,
            })
          "
          preserve-scroll
          preserve-state
          :class="{
            'z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white':
              page.active,
            'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
              !page.active,
          }"
          :only="['dataItems']"
          >{{ page.number }}
        </Link>
      </li>

      <li>
        <Link
          v-if="!(currentPage === totalPages)"
          :href="
            getPage({
              page: currentPage + 1,
            })
          "
          preserve-scroll
          preserve-state
          :only="['dataItems']"
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
        </Link>
      </li>
    </ul>
  </nav>
</template>
