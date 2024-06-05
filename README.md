# Paydock Payment Connector

## Overview

Integrate your commercetools with Paydock using the Paydock Payment Connector and efficiently manage your payment processes. This repository is divided into two main modules:

- **Extension Module**: Serves as middleware, linking commercetools with Paydock. This is configured to trigger on payment creation and updates within commercetools, ensuring efficient event handling by Paydock.

- **Notification Module**: Handles asynchronous notifications from Paydock regarding payment status changes such as authorization, charge, refund, and so on. This module updates the corresponding payment status in commercetools.

You must have both modules to integrate your commercetools and Paydock.

## Prerequisites

Ensure you have the following prerequisites before proceeding with installation:

- Docker and docker-compose installed on your machine.
- An active commercetools account with API credentials.
- Git installed on your machine.


## Install the Modules 

 You can install the modules using either `docker run...` or `docker-compose`. The following subsections detail both methods.


---
### Install with `docker run...`
---

The following steps describe how to install using `docker run...`.

1. Clone the Repository.

```
git clone https://github.com/PayDock/e-commerce-commercetools-payment-connector
```

2. Navigate to the project-directory.
```
cd e-commerce-commercetools-payment-connector
```

3. Configure the environment variables for your Extension Module and your Notification Module. 

* **Extension Module**

Navigate to the extension directory and set up the following environment variables:

```
echo 'PAYDOCK_INTEGRATION_CONFIG={
   "clientId":"[YOUR_CLIENT_ID]",
   "clientSecret":"[YOUR_CLIENT_SECRET]",
   "projectKey":"[YOUR_PROJECT_KEY]",
   "apiUrl":"https://api.[REGION_ID].gcp.commercetools.com",
   "authUrl":"https://auth.[REGION_ID].gcp.commercetools.com"
}' > ./extension/.env
```


Replace the placeholder values with your Commercetools API credentials.


* **Notification Module**

Navigate to the notification directory and set up the environment variables:

```
echo 'PAYDOCK_INTEGRATION_CONFIG={
   "clientId":"[YOUR_CLIENT_ID]",
   "clientSecret":"[YOUR_CLIENT_SECRET]",
   "projectKey":"[YOUR_PROJECT_KEY]",
   "apiUrl":"https://api.[REGION_ID].gcp.commercetools.com",
   "authUrl":"https://auth.[REGION_ID].gcp.commercetools.com"
}' > ./notification/.env
```

Replace the placeholder values with your Commercetools API credentials.

4. Build the docker images and run the application.

Build the following docker images:

- `docker build -t commercetools-payment-connector-extention -f cnf/extension/Dockerfile .`

- `docker build -t commercetools-payment-connector-notification -f cnf/notification/Dockerfile .`

5. Launch the Docker container with the following command:

- `docker run -e PAYDOCK_INTEGRATION_CONFIG=xxxxxx -p 8082:8082 commercetools-payment-connector-extention`
 
- `docker run -e PAYDOCK_INTEGRATION_CONFIG=xxxxxx -p 8443:8443 commercetools-payment-connector-notification`

6. Replace the placeholder `xxxxxx` for PAYDOCK_INTEGRATION_CONFIG variable  with your Json-escapes string.
###
The Extension Module is accessible at: http://your_domain:8082.

The Notification Module is accessible at: http://your_domain:8443.



---
### Install with `docker-compose`
---

The following steps describe how to install the modules using `docker compose...`.

1. Clone the Repository.

```
git clone https://github.com/PayDock/e-commerce-commercetools-payment-connector
```

2. Navigate to the project-directory.

```
cd e-commerce-commercetools-payment-connector
```

3. Configure Environment Variables.

* **Extension Module**

Navigate to the extension directory and set up the environment variables.

```
echo 'PAYDOCK_INTEGRATION_CONFIG={
   "clientId":"[YOUR_CLIENT_ID]",
   "clientSecret":"[YOUR_CLIENT_SECRET]",
   "projectKey":"[YOUR_PROJECT_KEY]",
   "apiUrl":"https://api.[REGION_ID].gcp.commercetools.com",
   "authUrl":"https://auth.[REGION_ID].gcp.commercetools.com"
}' > ./extension/.env
```

Replace the placeholder values with your Commercetools API credentials.

* **Notification Module**

Navigate to the notification directory and set up the environment variables.

```
echo 'PAYDOCK_INTEGRATION_CONFIG={
   "clientId":"[YOUR_CLIENT_ID]",
   "clientSecret":"[YOUR_CLIENT_SECRET]",
   "projectKey":"[YOUR_PROJECT_KEY]",
   "apiUrl":"https://api.[REGION_ID].gcp.commercetools.com",
   "authUrl":"https://auth.[REGION_ID].gcp.commercetools.com"
}' > ./notification/.env
```

Replace the placeholder values with your Commercetools API credentials.
 

4. Build the docker images and run the application.

* Replace the placeholder `xxxxxx` for PAYDOCK_INTEGRATION_CONFIG variable in **./docker-compose.yml** with your Json-escapes string.


* Launch docker-compose. The docker images will be built automatically:

```
    docker-compose up -d
```



The Extension Module is accessible at: http://your_domain:8082.

The Notification Module is accessible at: http://your_domain:8443.

