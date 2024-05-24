import { ref, Ref, computed, onMounted } from "vue";
import { useHttp } from "@/Hooks/useHttp";
import { TableHeaderItem, HeaderActionItem, HeaderAction } from "@/Interfaces/tables";

const currentColors: {
  [key: string]: string;
} = {
  activate: "#b91c1c",
  deactivate: "currentColor",
};

const transformQueryParamsFromRoute = (): { [key: string]: string } => {
  let currentParams = {}
  Object.keys(route().params).map(key => {
    currentParams = {
      ...currentParams,
      ...{ [`${key.toUpperCase()}`]: route().params[key] }
    }
  });
  return currentParams;
}

const headerArrowIsActivated = (key: string, typeOrder: string = 'ASC'): boolean => {
  const currentParams = transformQueryParamsFromRoute();
  return currentParams.hasOwnProperty(key) && currentParams[key] === typeOrder;
}

const assignCorrectColorToArrow = (key: string, typeOrder: string = 'ASC'): string => {
  return headerArrowIsActivated(key, typeOrder)
    ? currentColors["activate"]
    : currentColors["deactivate"]
}

const getRealHeader = (str: string) => str.toUpperCase();


export function useTableActions(
  props: {
    path_module: string,
    index_action: string,
    headers: TableHeaderItem[]
  }
) {

  const { getPageProgramatically } = useHttp({
    path_module: props.path_module,
    index_action: props.index_action,
    udpate_action: '',
    delete_action: ''
  });



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

  const headerActions: Ref<HeaderAction> = ref({});


  onMounted(() => {

    let transform: HeaderAction = {};

    props.headers.map((header: TableHeaderItem) => {

      const {title, ...bodyHeader} = header;

      transform = {
        ...transform,
        [`${getRealHeader(header.title)}`]: {
          up_arrow: assignCorrectColorToArrow(getRealHeader(header.title), 'ASC'),
          down_arrow: assignCorrectColorToArrow(getRealHeader(header.title), 'DESC'),
          ...bodyHeader
        }
      }
    });

    headerActions.value = transform;

  })

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

    configureQueryParam(headerActions.value[index]);

  }

  return {
    headerActions,
    getRealHeader,
    orderByColumn
  }
}
