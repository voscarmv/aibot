import * as os from 'os';

const platform = os.platform();
const type = os.type();
const release = os.release();
const version = os.version();

export const operatingSystem: object = { platform, type, release, version };
