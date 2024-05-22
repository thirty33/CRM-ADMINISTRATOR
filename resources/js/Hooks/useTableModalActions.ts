import { router } from "@inertiajs/vue3";
import { ref, Ref } from "vue";

export function useTableModalActions() {

  const confirmItemDeletion = ref(false);
  const RequestProcessing = ref(false);
  const currentItemId: Ref<number | string | null> = ref(null);

  const closeModal = () => {
    confirmItemDeletion.value = false;
    currentItemId.value = null;
  };

  const openModal = (item_id: number | string) => {
    confirmItemDeletion.value = true;
    currentItemId.value = item_id;
  };

  return {
    confirmItemDeletion,
    RequestProcessing,
    closeModal,
    openModal,
    currentItemId
  }
}
