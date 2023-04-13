'use strict';

import functions from '@google-cloud/functions-framework';

import {{inputs.gcp_cloud_function_name}} from './src/handlers/{{inputs.gcp_cloud_function_name}}.js';

functions.http('{{inputs.gcp_cloud_function_name}}', {{inputs.gcp_cloud_function_name}});