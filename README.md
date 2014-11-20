orca.js
=======

Open Real-Time Communications API

What is orca.js?

ORCA defines a set of client binding APIs for javascript developers. It provides an abstraction to the signaling protocols used in order to establish WebRTC communications, and it exposes a simplified object and eventing model for RTC oriented applications. In order to run a application using the orca.js API you must have: (1) an orca.js wrapping library, commonly called the "transport library", implementing a signaling protocol (e.g. SIP over websockets) to the server; and (2) a signaling server supporting the protocol. These components should be available to you from orca.js-compatible service providers and may be bound to special license agreements, terms, and conditions specific to each provider. The [Orca reflector](https://github.com/orcajs/reflector) is available for testing and prototyping on a local network. We welcome any contributions using popular signaling protocols like SIP or Jingle.

Who should use orca.js?

Application developers who want to add real time communication to applications can use orca.js to simplify this process. Developers who want to add complex features, like call forwarding, or who want to enable communication with other applications, would benefit from the capabilities provided by orca.js. The JavaScript libraries in orca.js will also simplify communications between web applications and the PSTN.

High Level Architecture:

Orca.js contains JavaScript code that defines and API which can be easily incorporated into any web application to enable real time communication. At runtime, the generic code for the call control API is downloaded to the browser, along with transport libraries tailored to the individual service provider’s network. This allows applications to be written once, and run in any ORCA-compatible service provider network.

ORCA allows application developers to take advantage of call control and addressing capabilities built into modern service provider networks, without requiring expertise in call control. In fact, the application developer may not be aware of the specific call control system, eg IMS, being used.

ORCA Open Source License Agreement:

Please review the Open Source License Agreement for ORCA: http://orcajs.org/license.html.

More Information:

For more information please visit: http://www.orcajs.org/
