---
id: model-your-first-process
title: Model your first process
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

In Camunda Cloud, you have two options to design and deploy a process: Console Modeler and [Camunda Modeler](https://camunda.com/download/modeler/).

<Tabs groupId="modeler" defaultValue="console" values={
[
{label: 'Console Modeler', value: 'console', },
{label: 'Camunda Modeler', value: 'desktop', },
]
}>

<TabItem value='console'>

Using Cloud Modeler, processes are designed and deployed, and new instances are created directly from the console. Take the following steps:

1. Find your saved models under the **Diagrams** tab.

2. Click **Create New Diagram**.

![console-modeler](../../components/modeler/cloud-modeler/img/bpmn-diagrams-overview.png)

3. Add an **EndEvent** to create a valid BPMN diagram.

![console-modeler-new-diagram-with-end-event](../../components/modeler/cloud-modeler/img/cloud-modeler-new-diagram-with-end-event.png)
![console-modeler-new-diagram-with-end-event](../../components/modeler/cloud-modeler/img/cloud-modeler-new-diagram-with-end-event2.png)

4. To save your diagram, click **Save**.

![console-modeler-new-diagram](../../components/modeler/cloud-modeler/img/cloud-modeler-new-diagram-with-name.png)

</TabItem>

<TabItem value='desktop'>

Using Camunda Modeler, processes are designed and deployed, and new instances are created.

Design a simple process with one start event and one end event, or download this [BPMN model](./bpmn/gettingstarted_quickstart.bpmn).

![zeebe-modeler](./img/zeebe-modeler.png)
</TabItem>
</Tabs>
