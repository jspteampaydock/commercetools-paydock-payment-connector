# Paydock Payment Connector

## Overview

Integrate your commercetools with Paydock using the Paydock Payment Connector and efficiently manage your payment processes. This repository is divided into two main modules:

- **Extension Module**: Serves as middleware, linking commercetools with Paydock. This is configured to trigger on payment creation and updates within commercetools, ensuring efficient event handling by Paydock. Follow [How to run](extension/docs/HowToRun.md) the extension module.
- **Notification Module**: Handles asynchronous notifications from Paydock regarding payment status changes such as authorization, charge, refund, and so on. This module updates the corresponding payment status in commercetools.Follow [How to run](notification/docs/HowToRun.md) the notification module.

You must have both modules to integrate your commercetools and Paydock.
