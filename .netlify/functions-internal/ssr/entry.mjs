import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_bStDKXRz.mjs';

const _page0  = () => import('./chunks/generic_DuwnR6uh.mjs');
const _page1  = () => import('./chunks/index_SsdwX1qO.mjs');
const _page2  = () => import('./chunks/index_la_Fo3JM.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/en/index.astro", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
