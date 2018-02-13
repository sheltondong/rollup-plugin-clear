import 'jest';
import * as path from 'path';

const workspace = process.cwd();

describe('Test clear plugin', () => {
    const mockExistsSync = jest.fn();
    const mockRmrfSync = jest.fn();
    jest.mock('fs', () => {
        return {
            existsSync: mockExistsSync
        };
    });
    jest.mock('rimraf', () => {
        return {
            sync: mockRmrfSync
        };
    });

    test('Test file system api', () => {
        const clear = require('../src').default;
        const plugin = clear({
            targets: ['lib', 'dist'],
        });

        expect(mockExistsSync).toHaveBeenCalledWith(path.resolve(workspace, 'lib'));

        expect(mockExistsSync).toHaveBeenCalledWith(path.resolve(workspace, 'dist'));
    });

    test('Test rm -r -f api', () => {
        const clear = require('../src').default;
        mockExistsSync.mockReturnValue(true);
        const plugin = clear({
            targets: ['lib', 'dist'],
        });

        expect(mockRmrfSync).toHaveBeenCalledWith(path.resolve(workspace, 'lib'));

        expect(mockRmrfSync).toHaveBeenCalledWith(path.resolve(workspace, 'dist'));
    });
});
