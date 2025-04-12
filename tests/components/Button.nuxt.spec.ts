import { expect, test } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { Button } from '#components';

test('Button component should accept slot', async () => {
    const wrapper = await mountSuspended(Button, {
        slots: {
            default: () => 'Hello world',
        },
    });

    expect(wrapper.text()).toContain('Hello world');
});
