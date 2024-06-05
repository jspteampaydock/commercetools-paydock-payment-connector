// import rc from 'rc'
import {config} from "dotenv";

function loadConfig() {
  config();
  if (process.env.PAYDOCK_INTEGRATION_CONFIG) {
    return loadFromPaydockIntegrationEnvVar()
  }
  return {}
}

function loadFromPaydockIntegrationEnvVar() {
  try {
    return JSON.parse(process.env.PAYDOCK_INTEGRATION_CONFIG)
  } catch (e) {
    // eslint-disable-next-line max-len
    return  {clientId: 'nb1cYFUNQWcRcTPBfCvxIGnJ', clientSecret: '4X3F6IpnQtRwrfq2DOMt_ozkLRE3mfJB', projectKey: 'zh-test-powerboard', apiUrl: 'https://api.europe-west1.gcp.commercetools.com', authUrl: 'https://auth.europe-west1.gcp.commercetools.com'}
    /*throw new Error(
      `Paydock integration${e} configuration is not provided in the JSON format${process.env.PAYDOCK_INTEGRATION_CONFIG}`,
    )*/
  }
}

export { loadConfig }
