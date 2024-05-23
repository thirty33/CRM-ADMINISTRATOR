<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import CustomTableComponent from "@/Components/CustomTableComponent.vue";
import CustomTablePagination from "@/Components/CustomTablePagination.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Modal from "@/Components/Modal.vue";
import { Head, Link, router, usePage } from "@inertiajs/vue3";
import { ref, Ref } from "vue";
import { TableInterface } from "@/Interfaces/tables";
import { useTranslation } from "@/Hooks/useTranslations";
import { useTableModalActions } from "@/Hooks/useTableModalActions";
import { useHttp } from "@/Hooks/useHttp";

const props = defineProps<TableInterface>();

const { translate } = useTranslation();
const page = usePage();

const {
  path_module,
  delete_action,
  udpate_action,
  index_action
} = props;

const { destroy, getPage } = useHttp({
  path_module: path_module,
  delete_action: delete_action,
  udpate_action: udpate_action,
  index_action: index_action
});

const {
  confirmItemDeletion,
  RequestProcessing,
  closeModal,
  openModal,
  currentItemId,
} = useTableModalActions();

const deleteItem = () => {
  if (currentItemId.value) {
    destroy({
      item: currentItemId.value
    });
    currentItemId.value = null;
    confirmItemDeletion.value = false;
  }
};
</script>

<template>
  <Head title="Module - List" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ translate("Module List") }}
      </h2>
    </template>
    <div class="shadow-md my-2 overflow-x-hidden">
      <div class="h-2/3">
        <CustomTableComponent
          :headers="props.headers"
          :data-items="props.dataItems"
          @delete-item="openModal"
          :path_module="path_module"
          :index_action="index_action"
        >
        </CustomTableComponent>
      </div>
      <div class="h-1/3 flex justify-center mt-4 pb-4">
        <CustomTablePagination
          @get-page="(params) => getPage(params)"
          :data-items="props.dataItems"
          :path_module="path_module"
          :delete_action="delete_action"
          :udpate_action="udpate_action"
          :index_action="index_action"
        />
      </div>
    </div>
    <Modal :show="confirmItemDeletion">
      <div class="p-6">
        <h2 class="text-lg font-medium text-gray-900">
          {{ translate("Are you sure you want to delete this item?") }}
        </h2>
        <div class="mt-6">
          <div class="mt-6 flex justify-end">
            <SecondaryButton @click="closeModal">
              {{ translate("Cancel") }}
            </SecondaryButton>

            <DangerButton
              class="ms-3"
              :class="{ 'opacity-25': RequestProcessing }"
              :disabled="RequestProcessing"
              @click="deleteItem"
            >
              {{ translate("Delete Item") }}
            </DangerButton>
          </div>
        </div>
      </div>
    </Modal>
  </AuthenticatedLayout>
</template>
