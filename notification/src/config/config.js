import { loadConfig } from './config-loader.js'
import ctpClientBuilder from '../utils/ctp.js'

let config
let paydockConfig
let ctpClient;


function getNotificationUrl() {
  return  process.env.CONNECT_SERVICE_URL ?? 'https://notification.paydock-commercetools-app.jetsoftpro.dev'
}

async function getCtpClient() {
  if(!ctpClient){
    ctpClient = await ctpClientBuilder.get(getNotificationConfig())
  }
  return ctpClient;
}

function getModuleConfig() {

  return {
    removeSensitiveData: true,
    port: config.port,
    logLevel: config.logLevel,
    apiNotificationnBaseUrl: getNotificationUrl(),
    basicAuth: false,
    projectKey: config.projectKey,
    keepAliveTimeout: 30,
    addCommercetoolsLineIteprojectKey: false,
    generateIdempotencyKey: false
  }
}

async function getPaydockApiUrl(){
  const paydockC = await getPaydockConfig('connection');
  return paydockC.api_url;
}

function getNotificationConfig() {
  return {
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    projectKey: config.projectKey,
    apiUrl: config.apiUrl,
    authUrl: config.authUrl
  }
}

async function getPaydockConfig(type = 'all') {
  if (!paydockConfig) {
    ctpClient = await getCtpClient();
    const responsePaydockConfig = await ctpClient.fetchById(
      ctpClient.builder.customObjects,
      'paydockConfigContainer'
    )
    if (responsePaydockConfig.body.results) {
      paydockConfig = {}
      const {results} = responsePaydockConfig.body
      results.forEach((element) => {
        paydockConfig[element.key] = element.value
      })
    }
  }
  switch (type) {
    case 'connection':
      // eslint-disable-next-line no-case-declarations
      if (paydockConfig['sandbox']?.sandbox_mode) {
        paydockConfig['sandbox'].api_url = 'https://api-sandbox.paydock.com'
        return paydockConfig['sandbox'] ?? {}
      }
      paydockConfig['live'].api_url = 'https://api.paydock.com'
      return paydockConfig['live'] ?? {}

    case 'widget:':
      return paydockConfig['live'] ?? {}
    default:
      return paydockConfig
  }

}

function loadAndValidateConfig() {
  config = loadConfig()
  if (!config.clientId || !config.clientSecret) {
    throw new Error(
      `[ CTP project credentials are missing. ` +
      'Please verify that all projects have projectKey, clientId and clientSecret'
    )
  }
}

loadAndValidateConfig()

// Using default, because the file needs to be exported as object.
export default {
  getModuleConfig,
  getPaydockConfig,
  getNotificationUrl,
  getPaydockApiUrl,
  getCtpClient,
  getNotificationConfig
}
