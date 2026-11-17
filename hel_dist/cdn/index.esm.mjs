import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/
const LIB_NAME = 'comps-vue3-ele';

/**
 * 将提供给用户的 lib 暴露出去（同时也暴露了类型）
 */
const dtlib = exposeLib(LIB_NAME);
const App = dtlib.App;
const HelloWorld = dtlib.HelloWorld;

export { App, HelloWorld, dtlib as default, dtlib };
