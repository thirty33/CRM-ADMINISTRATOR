## CRM ADMINISTRATOR

The following project is built with: Php, javascript and typescript.

The frameworks used are: Laravel, inertia.js and vue.js.

The purpose of this project is to build a multi-purpose crm with reusable components such as:

- Navigation
- Tables
- Pagination
- Forms

## Navigation:

- You can customise your sidebar menu easily, inside the hook useNavItems.ts, you can create your menuItems and even their corresponding child menuItems.

- Make sure that the path that each item points to exists within the web.php file.

- The development uses a builder pattern, to facilitate the creation and configuration of each item.

## Tables:

- Inside resources\js\Pages\Modules\Index.vue exists an example of how to use CustomTableComponent.

## Pagination:

- Inside resources\js\Pages\Modules\Index.vue exists an example of how to use CustomTablePagination.


## For testing:

unit/integration tests: phpUnit, vitest.
e2e testing: laravel dusk

## command to run tests:

phpUnit (unit/feature): php artisan test.
vitest (unit/feature): npm run test.
laravel dusk (e2e): php artisan dusk.
