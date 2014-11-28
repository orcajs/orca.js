/**
 *@FileOverview This file defines the project Orca Real Time Communication API.
 *For more information visit {@Link http://www.orcajs.org/}.
 *
 */

(function () {
    
    /** 
    * 
    * @summary Provides access to media control functions during a call
    * @constructor
    * @memberOf orca
    * @param {RTCMediaStream} rtcMediaStream the underlying WebRTC runtime MediaStream instance  
    */
    function ManagedStream(rtcMediaStream) {
        
        /**
        * @summary Gets the type of media associated with this instance
        * (Isn't 'type' at track level? Can't media streams contain both audio and video? )
        * @returns {String}
        */
        this.type = function() {
        }; 

        /**
        * @summary Restarts transmission of the media content after it has been stopped
        */
        this.resume = function () {
        };

        /**
        * @summary Halts transmission of the media content during a call
        * 
        */
        this.stop = function () {
        };

        /**
        * Gets the underlying WebRTC MediaStream
        * @returns {RTCMediaStream}
        */
        this.stream = function() {
        };
    }

    /** 
    * @classdesc Session objects are obtained by calling the createSession method of the global {@Link orca} object
    * @description The API supports multiple sessions, but particular API implementations may limit
    * the number of Sessions. Session objects are not considered to be reusable and therefore
    * the application should create a new session object for each session.
    * @summary Manages communications for a given user identity
    * @constructor
    * @memberOf orca
    */
    function Session() {
        /**
        * Activates the communications session with a gateway server
        * @method
        */
        this.connect = function () {
        };

        /**
        * Creates a new call instance for communication with the specified recipient
        * @param {string|string[]} to The user identifier of the call recipient.
        * For a group call, a list of user identifiers may be entered.
        * @param {string} mediatypes Comma separated list of media stream types to be used during the call Eg. "audio,video"
        */
        this.createCall = function (to, mediatypes) {
        };

        /**
        * Ends and active communications session with a gateway server
        *
        */
        this.disconnect = function () {
        };

        /**
        * @summary Retrieves the current status of this session. Possible statuses are:
        *   "unconnected" -
        *        The session has not attempted to connect.
        *   "connecting" - 
        *        The session is in the process of being established.
        *   "connected" 
        *        The session is connected to the server.
        *   "disconnected" 
        *        The session is ended and should no longer be used.
        * @returns String
        */
        this.getStatus = function () {
        };

        /**
        * @summary Adds a listener for a session event
        * @description
        * The listener function is called with a single argument which is an {@Link Event} object.
        * Valid event names are:
        * <ul>
        *   <li>"connected" -<br>
        *        Triggered when the session is connected successfully</li>
        *   <li>"disconnected" -<br>
        *        Triggered when the session is disconnected</li>
        *   <li>"error" -<br>
        *        Triggered when an error condition occurs.
        *        The event.error property indicates the error that caused the event. If an error causes the session to
        *        end or fail to connect, then the "error" event will soon be followed by a
        *        "disconnected" event.</li>
        *   <li>"incomingCall" -<br>
        *        Triggered when an incoming communication is received during an active session.
        *        The event.call property of type {@link orca.Call} is the incoming call object.</li>
        *   <li>"connecting" -<br>
        *        Triggered when a session is in the process of being established</li>
        * </ul>
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Session}
        * @example
        * // Define connected event handler
        * function session_onConnected(event) {
        *   // Application code for session connected event goes here
        * }
        *
        * // Example code to create call
        * session = orca.createSession(userid, password, sessionConfig);
        * // Add listener for Connected event
        * session.on('connected', session_onConnected);
        */
        this.on = function (event, handler) {
        };
        
        /**
        * @summary Adds a listener for a session event that will be called once
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Session} 
        *
        */
        this.once = function (event, handler) {
        };
        
        /**
        * @summary Removes a listener for a session event
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Session} 
        * 
        */
        this.off = function (event, handler) {
        };

    }

    

    /**
    * @summary Provides access to methods for managing an outgoing or incoming call
    * @description The API supports multiple calls, but particular API implementations may limit
    * the number of Calls. Call objects are not considered to be reusable and therefore
    * the application should create a new call object for each call.
    * @classdesc Calls objects are obtained by calling the createCall method or handling the onIncoming event of a connected {@Link orca.Session} instance
    * @Constructor
    * @memberOf orca
    */
    function Call() {

        /**
        * Gets a unique identifier for the call 
        * @type {String}
        */
        this.id = function() {
        };
        
        /**
        * Gets the identities of the remote peers attached to this call
        * @returns {PeerIdentity[]}
        */
        this.remoteIdentities = function() {
        };
        
        /**
        * Adds a local media stream to the call
        * Media stream instances are obtained from the browser's getUserMedia() method.
        * Local media streams should be added using this method before the connect method 
        * is called to either initiate a new call or answer a received call.
        * In addition, it may be used during an active call to change the streams
        * attached to the call. After streams are changed, invoke {@Link orca.Call#connect}.
        * (NOTE: Possible to accept RTCMediaStream as parameter to this method and
        * create ManagedStream internally)
        * @param {(orca.ManagedStream|RTCMediaStream)} stream local media stream 
        */
        this.addStream = function (stream) {
        };

        /**
        * Remove a local media stream from the call.
        * This is used to change the streams attached to a call, either upon initiating a new
        * call, answering a received call, or during an active call to change the streams
        * attached.  After streams are changed, invoke {@Link orca.Call#connect}.
        * @param {(orca.ManagedStream|RTCMediaStream|id)} stream Local media stream to remove, or its associated ID.
        * @returns {boolean} True if a matching stream is found, false if no such stream is found.
        */
        this.removeStream = function (stream) {
        }

        /**
        * Attempts to reach the call recipient and establish a connection
        * For an incoming call, calling this method explicitly joins/accepts the call
        */
        this.connect = function () {
        };

        /**
        * Ends an active call
        *
        */
        this.disconnect = function () {
        };
        
        /**
        * Called when a user does not wish to accept an incoming call
        *
        */
        this.reject = function () {
        };

        /**
        * Add a new participant to a group call.
        * @param {string} target The user identifier of the participant to add.
        * @returns {boolean} True if a participant may be added at this time, otherwise false.
        */
        this.addParticipant = function (target) {
        };

        /**
        * Remove a participant from a group call.
        * @param {string} target The user identifier of the participant to remove.
        * @returns {boolean} True if a participant may be removed at this time, otherwise false.
        */
        this.removeParticipant = function (target) {
        };

        /**
        * Mute participants on a call.
        * @param {string} mediatype Comma separated list of media stream types to mute.
        * Defaults to "audio,video".
        * @param {string|string[]} targets One or more user identifiers of the participants
        * to mute. Defaults to all participants.
        * @returns {boolean} True if mute is possible at this time, otherwise false.
        */
        this.muteParticipants = function (mediatype, targets) {
        };

        /**
        * Unmute participants on a call.
        * @param {string} mediatype Comma separated list of media stream types to unmute.
        * Defaults to "audio,video".
        * @param {string|string[]} targets One or more user identifiers of the participants
        * to unmute. Defaults to all participants.
        * @returns {boolean} True if unmute is possible at this time, otherwise false.
        */
        this.unmuteParticipants = function (mediatype, targets) {
        };

        /**
        * Transfer of the call to another user. The target user will receive an incoming call to connect with the transferee.
        * @param {string} target The user identifier to whom the call will be transferred.
        * @param {boolean} isAttended Preference for the type of transfer, true for attended, false for
        * unattended. Defaults to false. If one type of transfer is unavailable, then fall back to the other.
        * @param {boolean} isTargetProtected Whether to hide the target's identity from the transferee,
        * true to protect identity, false to expose identity. Defaults to false. If set to true but target
        * protection is unavailable, then the function will return false and no transfer attempt will be made.
        * @returns {boolean} True if it is possible to initiate a transfer at this time, false otherwise.
        */
        this.transfer = function (target, isAttended, isTargetProtected) {
        };

        /**
        * Send DTMF in an active call.
        * @param {string} dtmf The tones to send. Allowed tones are letters A through D (case-insensitive),
        * numbers 0 through 9, pound # and star *. A comma (,) will be treated as a 2 second pause. All other
        * characters will be ignored. For a string with no allowed tones, or a non-string, nothing will be sent.
        * @returns {boolean} True if it is possible to send DTMF, even if nothing is sent. False if it is not
        * possible to send DTMF at this time.
        */
        this.sendDTMF = function (dtmf) {
        };

        /**
        * Place the call on hold.
        * @param {string} isSendonly Preference for the type of hold, true for sendonly, false for inactive.
        * Defaults to false.
        * @returns {boolean} True if hold is possible at this time, false otherwise.
        */
        this.hold = function (isSendonly) {
        };

        /**
        * Take the call off of hold.
        * @returns {boolean} True if unhold is possible at this time, false otherwise.
        */
        this.unhold = function () {
        };

        /**
        * Retrieves a list of streams associated with this call.
        * The return value is an array of ManagedStream instances with undefined order
        * When no selector parameter is provided all local and remote streams are included
        * in the returned array.
        * <br>The keywords *local* and *remote* can be specified to limit the results to local or 
        * remote streams respectively.
        * <br>The *.* (period) symbol is used to prefix a keyword used to limit the results by the
        * stream type.  E.g. ".video" would be used to return a list of video streams only.
        * <br>The *#* (pound) symbol is used to prefix label text used to limit the results to a 
        * to a single stream with a label matching the specified text.
        * 
        * @param {string} selector optional query to filter the result list
        * @returns {orca.ManagedStream[]}
        * @example
        * // Get list of all local streams
        * var localStreams = call.streams("local");
        *
        * // Get list of all audio streams
        * var audioStreams = call.streams(".audio");
        * 
        * // Get stream with by its label name
        * // If successful only one match should be
        * // returned
        * var stream0 = call.streams("#stream_0");
        * if (stream0 && stream0.length == 1) {
        * ...
        * }
        * 
        * // Possible to support combined selections?
        * // Get list of local audio streams
        * var localAudio = call.streams("local.audio");
        */
        this.streams = function(selector) {
        };

        /**
        * Retrieves the current status of this call. Possible statuses are:
        *   "unconnected" -
        *        The call has not attempted to connect.
        *   "connecting" -
        *        The call is attempting to connect to the remote party.
        *   "connected" -
        *        The call is connected to the remote party.
        *   "hold:remote" -
        *        The call is placed on hold by the remote party.
        *        The local user must wait for the other party to unhold.
        *   "hold:local" -
        *        The call is placed on hold by the local party.
        *        The local user can unhold to resume the call.
        *   "disconnected" -
        *        The call is ended and should no longer be used.
        * @returns {String}
        */
        this.getStatus = function () {
        };
        
        /**
        * @summary Adds a listener for a call event
        * @description
        * The listener function is called with a single argument which is an {@Link Event} object.
        * Valid event names are:
        * <ul>
        *   <li>"connected" -</br>
        *        Triggered when a call is connected</li>
        *   <li>"disconnected" -</br>
        *        Triggered when a call is disconnected</li>
        *   <li>"error" -</br>
        *        Triggered when an error condition occurs.
        *        The event.error property indicates the error that caused the event. If an error causes the call to
        *        end or fail to connect, then the "error" event will soon be followed by a 
        *        "disconnected" event.</li>
        *   <li>"stream:add" -</br>
        *        Triggered when a remote stream is added to the call. The event.stream property is the remote media stream.
        *        </li>
        *   <li>"stream:remove" -</br>
        *        Triggered when a remote stream is removed from the call. The event.stream property is the remote media stream.</li>
        *   <li>"participant:add" -</br>
        *        Triggered when a user is connected to a multiparty call. The event.user
        *        property indicates the identity of the user that was added.</li>
        *   <li>"participant:remove" -</br>
        *        Triggered when a user is disconnected from a multiparty call. The event.user
        *        property indicates the identity of the user that was removed.</li>
        *   <li>"connecting" -</br> 
        *        Triggered when a call has initiated an attempt to connect to a remote party</li> 
        *   <li>"dtmf" -</br>
        *        Triggered when a DTMF tone is received. The event.dtmf property indicates
        *        the tone received.</li>
        *   <li>"hold:remote" -</br>
        *        Triggered when the call is placed on hold by the remote party.</li>
        *   <li>"hold:local" -</br>
        *        Triggered when the call is placed on hold by the local party.</li>
        *   <li>"unhold" -</br> 
        *        Triggered when a call is taken off hold</li>
        *   <li>"rejected" -</br> 
        *        Triggered when an attempt to connect a call is explicitly rejected by the
        *        remote party. This results in the call failing to connect, but it will not
        *        be accompanied by a "disconnected" event.</li>
        * </ul>
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Call}
        * @example
        * // Define connected event handler
        * function call_onConnected(event) {
        *   // Application code for call connected event goes here
        * }
        *
        * // Example code to create call
        * call = session.createCall(toList, mediatypes);
        * // Add listener for Connected event
        * call.on('connected', call_onConnected);
        */
        this.on = function (event, handler) {
        };
        
        /**
        * @summary Adds a listener for a call event that will be called once
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Call} 
        *
        */
        this.once = function (event, handler) {
        };
        
        /**
        * @summary Removes a listener for a call event
        * @param {String} event name of the event
        * @param {Function} handler function to be called when event is raised
        * @return {orca.Call} 
        * 
        */
        this.off = function (event, handler) {
        };

    }

    /**
    *
    * @summary Possible errors associated with a orca.Call
    * @typedef CallError
    * @type enum
    * @memberOf orca
    * @property {String} NETWORK_ERROR An error has occured
    * 
    */
    var CallError = {
        NETWORK_ERROR: 'NETWORK_ERROR'
    };
    
    /**
    *
    * @summary Provides information about an event
    * @typedef Event
    * @type object 
    * @property {String} name Gets the name/type indicator of the event
    * @property {String} [error] An {@link orca.CallError} or {@link orca.SessionError}
    * @property {orca.Call} [call] The object representing an incoming call.
    * @property {orca.ManagedStream} [stream] The object representing a remote stream.
    * @property {String} [user] The identity of a user related to the event, for example the
    * user added to a multiparty call.
    * @property {String} [dtmf] The value of a DTMF tone received.
    */
    
    /**
    *
    * @summary Provides information about the identity of a communications peer
    * @typedef PeerIdentity
    * @type object 
    * @property {String} id the unique identifier or address string of the associated user
    * 
    */

    /**
    *
    * @summary Possible errors associated with a orca.Session
    * @typedef SessionError
    * @type enum
    * @memberOf orca
    * @property {String} AUTHENTICATION_FAILED User credentials are invalid
    * @property {String} NETWORK_ERROR No response recieved within maximum expected time
    * 
    */
    var SessionError = {
        AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
        NETWORK_ERROR: 'NETWORK_ERROR'
    };

    /**
    *
    * @summary Configuration properties for a orca.Session
    * @typedef SessionConfig
    * @type object 
    * @property {String} uri The address of the gateway server
    * @property {Object} provider Reference to implementation providing actual functionality
    * @property {String} mediatypes The types of media streams that the created session will support; defaults if not provided. Recognized media types
    * include 'audio' and 'video'.
    * 
    */

    /** 
    * @summary root namespace of the call control SDK
    * @global
    * @namespace 
    */
    var orca = {
        /**
        * allow creation of multiple sessions in a single page; 
        * possibly limit repeated registrations using the same identity
        * @param {userid} userid The user's unique identifier
        * @param {token} token An authorization token associated with the provided userid
        * @param {SessionConfig} sessionConfig session initialization parameters
        * @returns {orca.Session}
        */
        createSession: function (userid, token, sessionConfig) {
        },

        /**
        * Create a reference to a WebRTC media stream that can be attached 
        * to a call
        * @param {RTCMediaStream} rtcMediaStream Browser media stream
        * @returns {orca.ManagedStream}
        */
        createManagedStream: function(rtcMediaStream) {
        }

    };

    orca.SessionError = SessionError;
    orca.CallError = CallError

    this.orca = orca;

})();
