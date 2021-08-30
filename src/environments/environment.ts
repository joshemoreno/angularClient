// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // url's
  api:'https://xgqvakimy5.execute-api.us-west-1.amazonaws.com/dev/AWSTallerDos/dev',
  localUri: 'http://localhost',
  
  // endPoints POST
  userEndPoint:'/userRegister',
  topicEndPoint:'/topicsRegister',
  assistanceEndPoint:'/assistanceRegister',
  
  // endPoints GET
  getTopics: '/getTopic',
  getParams: '/getParams',
  
  // others
  idAppAzure: '9e601498-f99c-4bc6-9491-9ca457d16621',
  port: '4200',
  portBack: '3000',
  endpointSMAL: '/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
