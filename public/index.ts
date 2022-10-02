import './index.scss';

import { KibanaFloatingToolbarPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new KibanaFloatingToolbarPlugin();
}
export { KibanaFloatingToolbarPluginSetup, KibanaFloatingToolbarPluginStart } from './types';
