import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';

interface Options {
    targets: string[];
    watch?: boolean;
}

const clear = (options: Options) => {
    const targets = options.targets || [];
    // 在rollup watch模式下，当recompile的时候是否clear，默认true
    const watch = options.watch === false ? false : true;
    const workspace = process.cwd();

    /**
     * 清楚目标路径
     *
     * @param {array} targets
     */
    const clear = (targets: string[]) => {
        for (let index = 0; index < targets.length; index++) {
            const e = targets[index];
            const target = path.resolve(workspace, e);
            if (fs.existsSync(target)) {
                rimraf.sync(target);
                console.log('cleared: ', target);
            }
        }
    };
    clear(targets);

    return {
        name: 'clear',
        load: (id: string) => {
            if (watch) {
                clear(targets);
            }
            return null;
        }
    };
};

export default clear;
