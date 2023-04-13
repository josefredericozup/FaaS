'use strict';

/**
 * Responds to an HTTP call.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
module.exports = function {{inputs.gcp_cloud_function_name}}(req, res) {
    res.send('Hello World!');
};