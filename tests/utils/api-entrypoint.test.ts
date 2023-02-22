import { describe, expect, it } from 'vitest';

import getApiEntrypoint from '../../utils/api-entrypoint';

describe('apiEntrypoint', () => {
    it('should return the API entrypoint', () => {
        expect(getApiEntrypoint()).toBe('https://api.example.com');
    });
});