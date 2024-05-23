import { ref, Ref, computed } from "vue";
import { useHttp } from "@/Hooks/useHttp";

interface HeaderActionItem {
  up_arrow: string;
  down_arrow: string;
  order_activated: boolean;
  query_name: string;
  query_params: {
    up_arrow: string;
    down_arrow: string;
    deactivate: string;
  };
}

interface HeaderAction {
  [key: string]: HeaderActionItem;
}

export function useTableActions(props: { path_module: string, index_action: string }) {

  const { getPageProgramatically } = useHttp({
    path_module: props.path_module,
    index_action: props.index_action,
    udpate_action: '',
    delete_action: ''
  });

  const currentColors: {
    [key: string]: string;
  } = {
    activate: "#b91c1c",
    deactivate: "currentColor",
  };

  const currentQueryParams: Ref<{ [key: string]: string }> = ref({});

  const addQueryParams = (params: { [key: string]: string }) => {
    currentQueryParams.value = {
      ...currentQueryParams.value,
      ...params
    }
  }

  const arrowIsActive = (arrowState: string) => {
    return arrowState === currentColors.activate;
  }

  const configureQueryParam = (header: HeaderActionItem): void => {

    if (arrowIsActive(header.up_arrow)) {
      addQueryParams({
        [`${header.query_name}`]: header.query_params.up_arrow
      })
    }
    else if (arrowIsActive(header.down_arrow)) {
      addQueryParams({
        [`${header.query_name}`]: header.query_params.down_arrow
      })
    }
    else {
      addQueryParams({
        [`${header.query_name}`]: header.query_params.deactivate
      })
    }

    getPageProgramatically(currentQueryParams.value);
  }

  const headerActions: Ref<HeaderAction> = ref({
    ROUTE: {
      up_arrow: currentColors["deactivate"],
      down_arrow: currentColors["deactivate"],
      order_activated: true,
      query_name: 'route',
      query_params: {
        up_arrow: 'ASC',
        down_arrow: 'DESC',
        deactivate: 'false'
      }
    },
    DESCRIPTION: {
      up_arrow: currentColors["deactivate"],
      down_arrow: currentColors["deactivate"],
      order_activated: true,
      query_name: 'description',
      query_params: {
        up_arrow: 'ASC',
        down_arrow: 'DESC',
        deactivate: 'false'
      }
    },
    // DESCRIPTION: {
    //   up_arrow: currentColors["deactivate"],
    //   down_arrow: currentColors["deactivate"],
    //   order_activated: true,
    // },
  });

  const orderByColumn = (
    index: string,
    arrow_index: "up_arrow" | "down_arrow"
  ) => {

    //switch state of current arrow
    let previousState = headerActions.value[index][arrow_index];
    const arrowState = previousState === currentColors["deactivate"];

    headerActions.value[index][arrow_index] = arrowState
      ? currentColors["activate"]
      : currentColors["deactivate"];

    const currentState = headerActions.value[index][arrow_index];

    //search another arrow of order and swith their state
    const anotherArrow = arrow_index === "up_arrow" ? "down_arrow" : "up_arrow";
    let anotherArrowState = headerActions.value[index][anotherArrow];

    if (currentState === anotherArrowState) {
      headerActions.value[index][anotherArrow] = currentColors["deactivate"];
    }

    console.log('up state', arrowIsActive(headerActions.value[index].up_arrow))
    console.log('down state', arrowIsActive(headerActions.value[index].down_arrow))

    configureQueryParam(headerActions.value[index]);

    console.log('current query params', currentQueryParams.value)
  }

  const getRealHeader = (str: string) => str.toUpperCase();

  return {
    headerActions,
    getRealHeader,
    orderByColumn
  }
}
