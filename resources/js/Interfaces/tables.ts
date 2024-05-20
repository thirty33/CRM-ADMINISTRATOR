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

// interface ModuleListResponse {
//   links: Links;
//   meta: Meta;
// }

export interface TableInterface {
  headers: TableHeaderItem[];
  dataItems: {
    data: TableDataItem[];
    links: Links;
    meta: Meta;
  };
}

export interface TableInterfaceHeaderDto extends Pick<TableInterface,
  'headers'
>{};

export interface TableInterfaceDataListDto extends Pick<TableInterface,
  'headers' | 'dataItems'
>{};

export interface TablePaginationListDto extends Pick<TableInterface,
  'dataItems'
>{};

