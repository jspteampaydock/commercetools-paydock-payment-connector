# Integration Guide

**Table of Contents**

 - [How it works](#how-it-works)
    - [Step 1: Setting up the connector using the Commercetools Paydock Custom Aplication](#step-1-configuration-connector)
    - [Step 2: Get payment methods](#step-2-get-payment-methods)
    - [Step 3: Make a payment](#step-3-make-a-payment)
    - [Step 4: Update Payment Status](#step-4-update-payment-status)
        - [Manual Capture](#manual-capture)
        - [Refund](#adyen-payment-refusals)
        - [Cancel Payment](#cancel-payment)
  - [Test](#test)
  - [Additional information](#additional-information)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Integration guide

## How it works

- [Step 1](#step-1-configuration-connector) : Setting up the connector using the [Commercetools Paydock Custom Aplication](https://github.com/PayDock/e-commerce-commercetools-app)
- [Step 2](#step-2-get-payment-methods): Set PaymentExtensionRequest  custom field with parameter `getPaymentMethodsRequest` to commercetools payment to get the list of payment methods available for the checkout.
- [Step 3](#step-3-make-a-payment): Set makePaymentRequest custom field to  submit a payment request to commercetools.
- [Step 4](#step-4-update-payment-status): Set PaymentExtensionRequest  custom field with parameter `updatePaymentStatus` to update payment and order status via extension.
- [Test](#test-and-go-live):  Instruction how to run end2end, unit and integration tests
- [Additional information](#additional-information)

