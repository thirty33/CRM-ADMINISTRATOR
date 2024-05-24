<script setup lang="ts">
import { TableInterfaceHeaderDto } from "@/Interfaces/tables";
import { ref, Ref, computed } from "vue";
import OrderArrowDownSvg from "@svg/arrow-table-down.vue";
import OrderArrowUpSvg from "@svg/arrow-table-up.vue";
import { useTableActions } from "@/Hooks/useTableActions";

const props = defineProps<TableInterfaceHeaderDto>();

const { headerActions, getRealHeader, orderByColumn } = useTableActions({
  path_module: props.path_module,
  index_action: props.index_action,
  headers: props.headers
});

</script>

<template>
  <thead
    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
  >
    <tr>
      <th
        v-for="header in props.headers"
        :key="header.title"
        scope="col"
        class="px-6 py-3"
      >
        <div class="flex items-center">
          {{ header.title }}
          <div
            class="pl-2"
            v-if="
              headerActions[getRealHeader(header.title)] &&
              headerActions[getRealHeader(header.title)].order_activated
            "
          >
            <div>
              <OrderArrowUpSvg
                class="w-2 h-2"
                :current_color="
                  headerActions[getRealHeader(header.title)].up_arrow
                "
                @click="
                  (event) =>
                    orderByColumn(getRealHeader(header.title), 'up_arrow')
                "
              />
            </div>
            <div>
              <OrderArrowDownSvg
                class="w-2 h-2"
                :current_color="
                  headerActions[getRealHeader(header.title)].down_arrow
                "
                @click="
                  (event) =>
                    orderByColumn(getRealHeader(header.title), 'down_arrow')
                "
              />
            </div>
          </div>
        </div>
      </th>
      <th scope="col" class="px-6 py-3">
        <span class="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
</template>
