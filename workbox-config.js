module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{ico,png,svg,jpg,db,css,html,js,webmanifest,md}'
	],
	swDest: 'service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};