import { config } from '@vue/test-utils';
import { vi } from 'vitest';
import { route } from 'ziggy-js';

config.global.mocks.__ = (key) => key;

const route = vi.fn(() => ({
    current: vi.fn()
}));

vi.mock('ziggy-js', () => ({
    route: route
}))

vi.stubGlobal('route', route);

config.global.mocks.route = (name) => route(name);
