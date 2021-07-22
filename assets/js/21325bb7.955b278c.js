(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[11039],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},i),{},{components:n})):a.createElement(f,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45294:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={id:"manage-alerts",title:"Manage alerts"},c=void 0,s={unversionedId:"product-manuals/cloud-console/manage-clusters/manage-alerts",id:"product-manuals/cloud-console/manage-clusters/manage-alerts",isDocsHomePage:!1,title:"Manage alerts",description:"Camunda Cloud allows you to get notified when Process Instances stop with an error.",source:"@site/docs/product-manuals/cloud-console/manage-clusters/manage-alerts.md",sourceDirName:"product-manuals/cloud-console/manage-clusters",slug:"/product-manuals/cloud-console/manage-clusters/manage-alerts",permalink:"/docs/product-manuals/cloud-console/manage-clusters/manage-alerts",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/cloud-console/manage-clusters/manage-alerts.md",version:"current",frontMatter:{id:"manage-alerts",title:"Manage alerts"},sidebar:"Product Manuals",previous:{title:"Manage API clients",permalink:"/docs/product-manuals/cloud-console/manage-clusters/manage-api-clients"},next:{title:"Available plans",permalink:"/docs/product-manuals/cloud-console/manage-plan/available-plans"}},u=[{value:"Create an alert",id:"create-an-alert",children:[]},{value:"Webhook alerts",id:"webhook-alerts",children:[]}],i={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Camunda Cloud allows you to get notified when Process Instances stop with an error.\nThere are two types of reporting,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By mail to the email address of your user accounts"),(0,o.kt)("li",{parentName:"ul"},"By webhook")),(0,o.kt)("h3",{id:"create-an-alert"},"Create an alert"),(0,o.kt)("p",null,"To create a new alert you have to navigate into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Alert")," tab:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cluster-details",src:n(15147).Z})),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Create")," to create a new alert."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create-alert",src:n(50399).Z})),(0,o.kt)("p",null,"You can choose between ",(0,o.kt)("inlineCode",{parentName:"p"},"Email")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Webhook"),". For ",(0,o.kt)("inlineCode",{parentName:"p"},"Email")," no further information is needed.\nTo create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Webhook")," alert, you need to provide a valid webhook url that excepts ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," requests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create-alert-webhook",src:n(23328).Z})),(0,o.kt)("p",null,"You can only have one ",(0,o.kt)("inlineCode",{parentName:"p"},"Email")," alert per Cluster but you can create multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Webhook")," alerts if needed."),(0,o.kt)("h3",{id:"webhook-alerts"},"Webhook alerts"),(0,o.kt)("p",null,"Webhook alerts contain a JSON body with following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "clusterName": "cluster-name",\n    "clusterId": "88d32bfc-4f8e-4dd3-9ae2-adfee281e223",\n    "operateBaseUrl": "https://console.cloud.camunda.io/org/2b3bc239-ad5b-4eef-80e0-6ef5139ed66a/cluster/88d32bfc-4f8e-4dd3-9ae2-adfee281e223/operate",\n    "clusterUrl": "https://console.cloud.camunda.io/org/2b3bc239-ad5b-4eef-80e0-6ef5139ed66a/cluster/88d32bfc-4f8e-4dd3-9ae2-adfee281e223",\n    "alerts": [\n        {\n            "operateUrl": "https://console.cloud.camunda.io/org/2b3bc239-ad5b-4eef-80e0-6ef5139ed66a/cluster/88d32bfc-4f8e-4dd3-9ae2-adfee281e223/operate/#/instances/2251799829404548",\n            "processInstanceId": "1234567890123456",\n            "errorMessage": "something went wrong",\n            "errorType": "JOB_NO_RETRIES",\n            "flowNodeId": "node-id",\n            "jobKey": 1234567890123456,\n            "creationTime": "2021-07-22T08:00:00.000+0000",\n            "processName": "process-name",\n            "processVersion": 1\n        }\n    ]\n}\n')))}d.isMDXComponent=!0},23328:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-detail-alerts-webhook-bc5ba375677df3a7bb3995d037dbceb6.png"},15147:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-detail-alerts-923b0f697ef86157cc95d7496ab0cdd7.png"},50399:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-detail-create-alert-126e4c7b8766aafa1f4c3cdd7ff5884d.png"}}]);