import { ref, Ref } from 'vue';

export function usePagination({
  last_page,
  current_page,
  default_page_to_show = 5
}: {
  last_page: number,
  current_page: number,
  default_page_to_show: number
}) {

  const currentPage = current_page;

  const pages = (numberPages: number) => {
    let pagesToReturn = [];
    for (let index = 1; index <= numberPages; index++) {
      pagesToReturn.push({ number: `${index}`, active: index === currentPage });
    }
    return pagesToReturn;
  };

  try {

    const totalPages = last_page;
    const defaultPagestoShow = default_page_to_show;
    const totalPagesToShow = ref(defaultPagestoShow);
    const initPageToShow = ref(0);

    totalPagesToShow.value =
      currentPage <= defaultPagestoShow
        ? defaultPagestoShow
        : currentPage;

    initPageToShow.value =
      totalPages < defaultPagestoShow
        ? 0
        : totalPagesToShow.value - defaultPagestoShow;

    if (
      currentPage >= totalPagesToShow.value &&
      totalPages > totalPagesToShow.value
    ) {
      initPageToShow.value += 1;
      totalPagesToShow.value += 1;
    }

    return {
      currentPage,
      pages,
      totalPages,
      initPageToShow,
      totalPagesToShow
    }

  } catch (error) {
    console.error('usePagination error', error);
    return {
      currentPage: 1,
      pages,
      totalPages: 1,
      initPageToShow: 1,
      totalPagesToShow: 1
    }

  }
}
