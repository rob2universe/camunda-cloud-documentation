---
id: tutorial-setup
title: "Tutorial setup"
---

Welcome to our tutorial for Zeebe and Operate.

In this tutorial, we'll walk you through how to:

- Model a process using Camunda Modeler
- Deploy the process to Zeebe
- Create process instances
- Use workers to complete jobs created by those process instances
- Correlate messages to process instances
- Monitor what's happening and get detail about running process instances in Operate

If this is your first time working with Zeebe, we expect this entire guide to take you 30-45 minutes to complete.

If you're looking for a very fast (but less comprehensive) "first contact" experience, you might prefer the [Quickstart](../local/quickstart.md).

The tutorial assumes you have some basic knowledge of what Zeebe is and what it's used for. If you're completely new to Zeebe, you might find it helpful to read through [What is Camunda Cloud?](/components/concepts/what-is-camunda-cloud.md) docs article first.

Below are the components you'll use in the tutorial. The easiest way to run them is to download [Camunda Modeler](https://docs.camunda.io/docs/components/modeler/camunda-modeler/install-the-modeler) and use the `operate` docker-compose profile in the [zeebe-docker-compose](https://github.com/zeebe-io/zeebe-docker-compose) repository. Further instructions for using Zeebe with Docker can be found in the README.md file in that repository.

You can also download the full distributions for these components, instead of running them with Docker.

1.  [Camunda Modeler](https://docs.camunda.io/docs/components/modeler/camunda-modeler/install-the-modeler): A desktop modeling tool we'll use to create and configure our process before we deploy it to Zeebe.
1.  [Zeebe Distribution](https://github.com/camunda-cloud/zeebe/releases): The Zeebe distribution contains the workflow engine where we'll deploy our process model; the engine is also responsible for managing the state of active process instances. Included in the distro is the Zeebe CLI, which we'll use throughout the tutorial. Use the [latest release](https://github.com/camunda-cloud/zeebe/releases).
1.  [Camunda Operate](https://github.com/camunda-cloud/zeebe/releases): An operations tool for monitoring and troubleshooting live process instances in Zeebe. Operate is currently available for free and unrestricted _non-production use_.
1.  [Elasticsearch 7.x](https://www.elastic.co/guide/en/elasticsearch/reference/7.x/index.html): An open-source distributed datastore that can connect to Zeebe to store process data for auditing, visualization, analysis, etc. Camunda Operate uses Elasticsearch as its underlying datastore, which is why you need to download Elasticsearch to complete this tutorial. Currently, 7.x is the minimum mandatory version with Zeebe 1.x. With version 0.20.0 (currently used in our tutorial,) you may use 6.x.

If you're already familiar with BPMN and how to create a BPMN model in Camunda Modeler, you can find the finished model we create during the tutorial here: [Zeebe Getting Started Tutorial Process Model](assets/order-process.bpmn).

If you're using the finished model we provide rather than building your own, you can also move ahead to [section 3.3: Deploy a Process](deploy-a-process.md).

If you have questions or feedback about the tutorial, we encourage you to visit the [Camunda Cloud user forum](https://forum.camunda.io) and ask a question.

There's a "Getting Started" category for topics you can use when you ask your question or give feedback.
