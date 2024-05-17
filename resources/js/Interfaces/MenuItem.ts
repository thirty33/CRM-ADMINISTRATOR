import { FunctionalComponent } from "vue";

export type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface MenuItem {
    title: string;
    hasChildren: boolean;
    iconComponent?: FunctionalComponent | null;
    isChild: boolean;
    children?: MenuItem[];
    id: string;
    path: string;
    childRoutes?: string[];
    httpMethod: Method;
}

export interface SideBarSingleItem extends Pick<MenuItem,
    'title' |
    'hasChildren' |
    'isChild' |
    'path' |
    'childRoutes' |
    'children' |
    'httpMethod'
>{};

export interface MenuItemBuilder {
    setTitle(title: string): MenuItemBuilder;
    setHasChildren(hasChildren: boolean): MenuItemBuilder;
    setIconComponent(iconComponent: FunctionalComponent): MenuItemBuilder;
    setChildren(children: MenuItem[]): MenuItemBuilder;
    setIsChild(isChild: boolean): MenuItemBuilder;
    setRoute(path: string): MenuItemBuilder;
    setChildRoutes(paths: string[]): MenuItemBuilder;
    setHttpMethod(httpMethod: Method): MenuItemBuilder;
    getItem(): MenuItem;
}
