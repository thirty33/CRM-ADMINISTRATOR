import { ref, Ref, computed } from 'vue';
import { usePage } from "@inertiajs/vue3";
import ProductSvg from "@svg/product.svg?component";
import ServiceSvg from "@svg/services-module.svg?component";
import LoadSvg from "@svg/load.svg?component";
import ListProductSvg from "@svg/list.svg?component";
import ListServiceSvg from "@svg/list-service.svg?component";
import CreateProductSvg from "@svg/create.svg?component";
import CreateServiceSvg from "@svg/create-service.svg?component";
import UserSvg from "@svg/user.svg?component";

import { ItemMenuBuilder } from '@/Classes/ItemMenu';
import { useTranslation } from './useTranslations';

export function useNavItems() {

    const { translate } = useTranslation();

    const menuItems = [
        // (new ItemMenuBuilder())
        //   .setTitle('Products')
        //   .setHasChildren(true)
        //   .setIconComponent(ProductSvg)
        //   .setChildren([
        //     (new ItemMenuBuilder())
        //         .setTitle('Create Product')
        //         .setHasChildren(false)
        //         .setIconComponent(CreateProductSvg)
        //         .setIsChild(true)
        //         .getItem(),
        //     (new ItemMenuBuilder())
        //         .setTitle('List Products')
        //         .setHasChildren(false)
        //         .setIconComponent(ListProductSvg)
        //         .setIsChild(true)
        //         .getItem()
        //   ])
        //   .setIsChild(false)
        //   .getItem(),
        // (new ItemMenuBuilder())
        //   .setTitle('Services')
        //   .setHasChildren(true)
        //   .setIconComponent(ServiceSvg)
        //   .setChildren([
        //     (new ItemMenuBuilder())
        //         .setTitle('Create Service')
        //         .setHasChildren(false)
        //         .setIconComponent(CreateServiceSvg)
        //         .setIsChild(true)
        //         .getItem(),
        //     (new ItemMenuBuilder())
        //         .setTitle('List Services')
        //         .setHasChildren(false)
        //         .setIconComponent(ListServiceSvg)
        //         .setIsChild(true)
        //         .getItem()
        //   ])
        //   .setIsChild(false)
        //   .getItem(),
        (new ItemMenuBuilder())
          .setTitle(translate('Modules'))
          .setHasChildren(true)
          .setIconComponent(ServiceSvg)
          .setChildRoutes(['module-list'])
          .setChildren([
            (new ItemMenuBuilder())
                .setTitle(translate('List Modules'))
                .setHasChildren(false)
                .setIconComponent(ListServiceSvg)
                .setIsChild(true)
                .setRoute('module-list')
                .getItem()
          ])
          .setIsChild(false)
          .getItem(),
        // (new ItemMenuBuilder())
        //   .setTitle('Massive load')
        //   .setHasChildren(false)
        //   .setIconComponent(LoadSvg)
        //   .setIsChild(false)
        //   .getItem(),
    ];

    const secondActionsMenuItems = [
        (new ItemMenuBuilder())
            .setTitle(translate('Profile'))
            .setHasChildren(false)
            .setIconComponent(UserSvg)
            .setIsChild(false)
            .setRoute('profile.edit')
            .getItem()
        ,
        (new ItemMenuBuilder())
            .setTitle(translate('Log Out'))
            .setHasChildren(false)
            .setIconComponent(UserSvg)
            .setIsChild(false)
            .setRoute('logout')
            .setHttpMethod('post')
            .getItem()
    ];

    return {
        menuItems,
        secondActionsMenuItems
    }

}
