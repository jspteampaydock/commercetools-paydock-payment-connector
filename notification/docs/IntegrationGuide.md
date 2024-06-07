# Integration Guide

**Table of Contents**

 - [How it works](#how-it-works)
    - [Update Payment Status](#update-payment-status)
        - [Manual Capture](#manual-capture)
        - [Refund](#adyen-payment-refusals)
        - [Cancel Payment](#cancel-payment)
  - [Test](#test)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Integration guide

## How it works

- [Update Payment Status](#update-payment-status): Set PaymentExtensionRequest  custom field with parameter `updatePaymentStatus` to update payment and order status via extension.
- [Test](#test-and-go-live):  Instruction how to run end2end, unit and integration tests
