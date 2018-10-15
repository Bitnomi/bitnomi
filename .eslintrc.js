module.exports = {
	"plugins": [
		"react"
	],
	"env": {
		"es6": true,
		"node": true
	},
	"extends": [
    "eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": "off",
		"indent": 0,
	}
};