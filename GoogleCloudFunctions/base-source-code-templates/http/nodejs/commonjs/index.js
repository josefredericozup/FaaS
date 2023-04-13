'use strict';

const functions = require('@google-cloud/functions-framework');
const {{inputs.gcp_cloud_function_name}} = require('./src/handlers/{{inputs.gcp_cloud_function_name}}.js');

functions.http('{{inputs.gcp_cloud_function_name}}', {{inputs.gcp_cloud_function_name}});