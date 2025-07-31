import {OpenAPIV3} from 'openapi-types';
import * as lodash from 'lodash';
import { DefaultResourceParser } from '@umairabubakkar/n8n-openapi-node';

export class WAHAResourceParser extends DefaultResourceParser {
	value(tag: OpenAPIV3.TagObject): string {
		return lodash.startCase(tag.name.replace(/[^a-zA-Z0-9_-]/g, ''));
	}
}
