# Paydock Payment Connector

## Overview

Integrate your commercetools with Paydock using the Paydock Payment Connector and efficiently manage your payment processes. This repository is divided into two main modules:

- **Extension Module**: Serves as middleware, linking commercetools with Paydock. This is configured to trigger on payment creation and updates within commercetools, ensuring efficient event handling by Paydock. 
  - [Integration Guide](extension/docs/IntegrationGuide.md)  for information how to integrate extension to commercetools.
  - Instruction [How to run](extension/docs/HowToRun.md)  the extension module.
- **Notification Module**: Handles asynchronous notifications from Paydock regarding payment status changes such as authorization, charge, refund, and so on. This module updates the corresponding payment status in commercetools.
    - [Integration Guide](notification/docs/IntegrationGuide.md)  for information how to integrate extension to commercetools.
    - Instruction [How to run](notification/docs/HowToRun.md)  the extension module.

Follow Integration Guide for information how to integrate your shop with this module. For advanced integration flow follow the advanced integration guide.
Follow How to run the extension module.

You must have both modules to integrate your commercetools and Paydock.

## See also
- [Paydock Commercetools Widget](https://github.com/PayDock/e-commerce-commercetools-npm)
- [Paydock Commercetools Custom Application](https://github.com/PayDock/e-commerce-commercetools-app/)
- [Paydock website](https://paydock.com/)

## License

This repository is available under the [MIT license](LICENSE).
[README.md](..%2F..%2Fpaydock-prod%2Fe-commerce-commercetools-app%2FREADME.md)