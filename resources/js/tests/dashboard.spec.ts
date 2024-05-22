import { mount } from "@vue/test-utils";
import SideBar  from "@/Components/SideBar.vue";
import { ItemMenuBuilder } from '@/Classes/ItemMenu';
import ServiceSvg from "@svg/services-module.svg?component";
import ListServiceSvg from "@svg/list-service.svg?component";
import { describe, it, expect, vi } from "vitest";

describe("SideBar.vue renders SideBarItems", () => {

    it('test', () => {
        expect(typeof window).not.toBe('undefined');
    })

    it("can render SideBarItems", () => {

        const menuItems = [
            (new ItemMenuBuilder())
              .setTitle('Modules')
              .setHasChildren(true)
              .setIconComponent(ServiceSvg)
              .setChildRoutes(['module.index'])
              .setChildren([
                (new ItemMenuBuilder())
                    .setTitle('List Modules')
                    .setHasChildren(false)
                    .setIconComponent(ListServiceSvg)
                    .setIsChild(true)
                    .setRoute('module.index')
                    .getItem()
              ])
              .setIsChild(false)
              .getItem(),
        ];

        const wrapper = mount(SideBar, {
            props: {
                menuItems: menuItems
            },
            global: {
            }
        });

        expect(wrapper.findAll('[data-test="main-item"]')).toHaveLength(1);

        expect(wrapper.findAll('[data-test="child-item"]')).toHaveLength(1);

        const childItem = wrapper.get('[data-test="child-item"]');

        expect(childItem.text()).toBe('List Modules');

    });

    it("can render SideBarItems 2", () => {

        const menuItems = [
            (new ItemMenuBuilder())
              .setTitle('Modules')
              .setHasChildren(true)
              .setIconComponent(ServiceSvg)
              .setChildRoutes(['module.index'])
              .setChildren([
                (new ItemMenuBuilder())
                    .setTitle('List Modules')
                    .setHasChildren(false)
                    .setIconComponent(ListServiceSvg)
                    .setIsChild(true)
                    .setRoute('module.index')
                    .getItem(),
                (new ItemMenuBuilder())
                    .setTitle('Create Modules')
                    .setHasChildren(false)
                    .setIconComponent(ListServiceSvg)
                    .setIsChild(true)
                    .setRoute('module.index')
                    .getItem()
              ])
              .setIsChild(false)
              .getItem(),
            (new ItemMenuBuilder())
              .setTitle('Products')
              .setHasChildren(true)
              .setIconComponent(ServiceSvg)
              .setChildRoutes(['module.index'])
              .setChildren([
                (new ItemMenuBuilder())
                    .setTitle('List Products')
                    .setHasChildren(false)
                    .setIconComponent(ListServiceSvg)
                    .setIsChild(true)
                    .setRoute('module.index')
                    .getItem(),
                (new ItemMenuBuilder())
                    .setTitle('Create Products')
                    .setHasChildren(false)
                    .setIconComponent(ListServiceSvg)
                    .setIsChild(true)
                    .setRoute('module.index')
                    .getItem()
              ])
              .setIsChild(false)
              .getItem(),
        ];

        const wrapper = mount(SideBar, {
            props: {
                menuItems: menuItems
            },
            global: {
                plugins: [ route ]
            }
        });

        expect(wrapper.findAll('[data-test="main-item"]')).toHaveLength(2);

        expect(wrapper.findAll('[data-test="child-item"]')).toHaveLength(4);


    });
});
