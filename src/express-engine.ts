const fs: any = require('fs');
const path: any = require('path');
import { renderModuleFactory } from '@angular/platform-server';

const templateCache: any = {};

export function ngExpressEngine(setupOptions: any): any {

      return function (filePath: any, options: any, callback: any): any {
            if (!templateCache[filePath]) {
                  let file: any = fs.readFileSync(filePath);
                  templateCache[filePath] = file.toString();
            }
            renderModuleFactory(setupOptions.bootstrap[0], {
                  document: templateCache[filePath],
                  url: options.req.url
            })
                  .then((item: any) => {
                        callback(null, item);
                  });
      };
};
