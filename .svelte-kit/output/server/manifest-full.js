export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0d3d214a.js","app":"_app/immutable/entry/app.cadd5eb7.js","imports":["_app/immutable/entry/start.0d3d214a.js","_app/immutable/chunks/index.ccd4248b.js","_app/immutable/chunks/singletons.261a9764.js","_app/immutable/entry/app.cadd5eb7.js","_app/immutable/chunks/index.ccd4248b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
