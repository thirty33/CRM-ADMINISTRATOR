import { MenuItem, MenuItemBuilder, Method } from "@/Interfaces/MenuItem";
import { FunctionalComponent } from "vue";
import { v4 as uuidv4 } from 'uuid';

export class ItemMenu implements MenuItem {

    public title = '';
    public hasChildren = false;
    public iconComponent: FunctionalComponent | null = null;
    public isChild: boolean = false;
    public children?: MenuItem[];
    public id: string;

    constructor(
        id: string,
        public path: string = 'page404',
        public childRoutes: string[] = [],
        public httpMethod: Method = 'get',
    ) {
        this.id = id;
        this.path = path;
        this.childRoutes = [...childRoutes];
        this.httpMethod = httpMethod;
    }

    public addChildren(children: MenuItem[]): void {
        this.children = [...children];
    }

}

export class ItemMenuBuilder implements MenuItemBuilder {

    public itemMenu: ItemMenu = new ItemMenu(uuidv4());

    constructor() {
        this.reset();
    }

    public reset(): ItemMenuBuilder {
        this.itemMenu = new ItemMenu(uuidv4());
        return this;
    }

    public setTitle(title: string): ItemMenuBuilder {
        this.itemMenu.title = title;
        return this;
    }

    setHasChildren(hasChildren: boolean): ItemMenuBuilder {
        this.itemMenu.hasChildren = hasChildren;
        return this;
    }

    setIconComponent(iconComponent: FunctionalComponent<{}, {}, any, {}>): ItemMenuBuilder {
        this.itemMenu.iconComponent = iconComponent;
        return this;
    }

    setChildren(children: MenuItem[]): ItemMenuBuilder {
        this.itemMenu.addChildren(children);
        return this;
    }

    setIsChild(isChild: boolean): MenuItemBuilder {
        this.itemMenu.isChild = isChild;
        return this;
    }

    setRoute(path: string): MenuItemBuilder {
        this.itemMenu.path = path;
        return this;
    }

    setChildRoutes(paths: string[]): MenuItemBuilder {
        this.itemMenu.childRoutes = [...paths];
        return this;
    }

    setHttpMethod(httpMethod: Method): MenuItemBuilder {
        this.itemMenu.httpMethod = httpMethod;
        return this;
    }

    public getItem(): MenuItem {
        const result = this.itemMenu;
        this.reset();
        return result;
    }
}







