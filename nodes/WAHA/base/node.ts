import {INodeTypeBaseDescription, NodeConnectionType} from "n8n-workflow";

export const BASE_DESCRIPTION: INodeTypeBaseDescription = {
	name: 'WhatsApp',
	displayName: 'WhatsApp',
	icon: 'file:waha.svg',
	description: 'Connect with Whatsapp HTTP API',
	group: ['transform'],
};


export const NODE_DESCRIPTION = {
	subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
	inputs: [NodeConnectionType.Main],
	outputs: [NodeConnectionType.Main],
	defaults: {
		name: 'WhatsApp',
	},
	credentials: [
		{
			name: 'wahaApi',
			required: true,
		},
	],
	requestDefaults: {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		baseURL: '={{$credentials.url}}',
	},
}
