import {staticPort, serverIp} from '../constants'

export default {
	environments: [
		{
			browserName           : 'chrome',
			version               : '33',
			fixSessionCapabilities: 'no-detect', // improve performance
			chromeOptions         : {
				args: [
					'--no-sandbox',
					'--headless',
					'--incognito',
					`--unsafely-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
					`--unsafety-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
					'--enable-precise-memory-info'
				]
			}
		},
		//		{
		//			"browserName": "chrome", "version": "37",
		//			"fixSessionCapabilities": "no-detect",
		//			"chromeOptions": {
		//				"args": [
		//					"--no-sandbox",
		//					"--headless",
		//					"--incognito",
		//					`--unsafely-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
		//					`--unsafety-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
		//					"--enable-precise-memory-info"
		//				]
		//			}
		//		},
		//		{
		//			"browserName": "chrome", "version": "39",
		//			"fixSessionCapabilities": "no-detect",
		//			"chromeOptions": {
		//				"args": [
		//					"--no-sandbox",
		//					"--headless",
		//					"--incognito",
		//					`--unsafely-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
		//					`--unsafety-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
		//					"--enable-precise-memory-info"
		//				]
		//			}
		//		},
		//		{
		//			"browserName": "chrome", "version": "44",
		//			"fixSessionCapabilities": "no-detect",
		//			"chromeOptions": {
		//				"args": [
		//					"--no-sandbox",
		//					"--headless",
		//					"--incognito",
		//					`--unsafely-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
		//					`--unsafety-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
		//					"--enable-precise-memory-info"
		//				]
		//			}
		//		},
		//		{
		//			"browserName": "chrome", "version": "52",
		//			"fixSessionCapabilities": "no-detect",
		//			"chromeOptions": {
		//				"args": [
		//					"--no-sandbox",
		//					"--headless",
		//					"--incognito",
		//					`--unsafely-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
		//					`--unsafety-treat-insecure-origin-as-secure=http://${serverIp}:${staticPort}`,
		//					"--enable-precise-memory-info"
		//				]
		//			}
		//		},
		//		{
		//			"browserName": "firefox",
		//		},
		//		{
		//			"browserName": "opera",
		//			"operaOptions": {"binary": "/usr/bin/opera"}
		//		}
	],
	serverUrl: `http://${serverIp}:${staticPort}`,
}
