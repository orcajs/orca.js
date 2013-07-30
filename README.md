orca.js
=======

Open Real-Time Communications API

What is orca.js?

Orca.js complements the work done by the WebRTC community in providing a standard way to support real time communication in HTML5 browsers. WebRTC makes it easier to add real-time communication to web applications, but does little to simplify the signaling required to set up high quality communication sessions. Dealing with end-to-end signaling introduces unnecessary complexity for the application developer. Orca.js provides tools and JavaScript libraries that fill the void left by WebRTC.
•	It stands for Open Realtime Communications API.
•	It consists of a set of call control APIs that enable web developers to embed signaling for Real-time Communications in their applications.
•	A JavaScript library.
•	A testing infrastructure.
•	A community dedicated to empowering developers with interoperable RTC solutions for their applications.

Who should use orca.js?

Application developers who want to add real time communication to applications can use orca.js to simplify this process. Developers who want to add complex features, like call forwarding, or who want to enable communication with other applications, would benefit from the capabilities provided by orca.js. The JavaScript libraries in orca.js will also simplify communications between web applications and the PSTN.

High Level Architecture

Orca.js contains JavaScript code that can be easily incorporated into any web application to enable real time communication. At runtime, the generic code for the call control API is downloaded to the browser, along with transport libraries tailored to the individual service provider’s network. This allows applications to be written once, and run in any ORCA-compliant service provider network.

ORCA allows application developers to take advantage of call control and addressing capabilities built into modern service provider networks, without requiring expertise in IMS call control. In fact, the application developer may not even realize that IMS call control functions are being invoked.

ORCA Open Source License Agreement

Please review the Open Source License Agreement for ORCA: http://orcajs.org/license.html.
