'use strict';

/**
 * 
 *
 * @param {Object} eventData An object representing the event data payload. Its format depends on the event type
 * @param {Object} context An object containing metadata about the event.
 * @param {Function} callback An optional function you can call to signal completion. The first argument to this callback is interpreted as signaling an error. Pass no arguments or a null first argument to signal success.
 */
export default function {{inputs.gcp_cloud_function_name}}(eventData, context, callback) {
    // Your code here

    // Optionally signal function completion:
    callback();
};  