export interface TableHeaderItem {
  title: string;
  columnProp: string;
}

export interface TableDataItem {
  [key: string]: string;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface Links {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface TableInterface {
  headers: TableHeaderItem[];
  dataItems: {
    data: TableDataItem[];
    links: Links;
    meta: Meta;
  };
  path_module: string;
  delete_action: string;
  udpate_action: string;
  index_action: string;
}

export interface TableInterfaceHeaderDto extends Pick<TableInterface,
  'headers' | 'path_module' | 'index_action'
>{};

export interface TableInterfaceDataListDto extends Pick<TableInterface,
  'headers' | 'dataItems' | 'path_module' | 'index_action'
>{};

export interface TablePaginationListDto extends Pick<TableInterface,
  'dataItems' | 'delete_action' | 'path_module' | 'udpate_action' | 'index_action'
>{};

