import React from 'react';
import ReactDOM from 'react-dom';
import { CoreSetup, CoreStart, Plugin } from '../../../src/core/public';
import { TopnavToggleBtn } from './topnav_toggle_btn';
import {
  KibanaFloatingToolbarPluginSetup,
  KibanaFloatingToolbarPluginStart,
} from './types';

export class KibanaFloatingToolbarPlugin
  implements Plugin<KibanaFloatingToolbarPluginSetup, KibanaFloatingToolbarPluginStart>
{
  public setup(core: CoreSetup): KibanaFloatingToolbarPluginSetup {
    console.log("Loaded KibanaFloatingToolbar plugin");

    // Return methods that should be available to other plugins
    return {};
  }

  public start(core: CoreStart): KibanaFloatingToolbarPluginStart {
    core.chrome.navControls.registerRight({
      order: 10,
      mount: (el: HTMLElement) => {
        ReactDOM.render(
          <TopnavToggleBtn
            mode={window.localStorage.getItem('kibana-floating-toolbar') === 'true' ? true : false}
            onClick={(active: boolean) => {
              window.localStorage.setItem('kibana-floating-toolbar', active ? 'true' : 'false');
              this.toggleBodyClass(active);
              
            }}
          />,
          el
        );

        return () => ReactDOM.unmountComponentAtNode(el);
      },
    });

    return {};
  }

  public stop() {}

  // Sets a unique class to the body for each application
  private toggleBodyClass(active: boolean) {
    if (active) {
      document.body.classList.add('floating-toolbar');
    } else {
      document.body.classList.remove('floating-toolbar');
      
    }
  }
}
