// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiUrl: 'http://localhost:8080',
  
};

export const apiKeyConfig = {
  weatherApiKey: 'https://api.openweathermap.org/data/2.5/weather?lat=35.798670&lon=-86.907341&appid=1f3fb906496b5ab8d9a99ae6e017557e&units=imperial',
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
