import { router } from "@inertiajs/vue3";

export function useHttp(
  props: {
    path_module: string,
    delete_action: string,
    udpate_action: string,
    index_action: string
  }
) {

  const destroy = (params: { [key: string]: string | number }) => {
    router.delete(route(`${props.path_module}.${props.delete_action}`, {
      ...params,
      ...route().params
    }));
  }

  const getPage = (params: { [key: string]: string | number }): string => {
    return route(`${props.path_module}.${props.index_action}`, {
      ...route().params,
      ...params,
    })
  }

  const getPageProgramatically = (params: { [key: string]: string | number }): void => {
    router.visit(route(`${props.path_module}.${props.index_action}`, {
      ...route().params,
      ...params,
    }))
  }

  return {
    destroy,
    getPage,
    getPageProgramatically
  }
}
