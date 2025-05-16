import type { INodeProperties } from 'n8n-workflow';

export const researchLeadFields: INodeProperties[] = [
	{
		displayName: 'Agent',
		name: 'agent',
		type: 'options',
		required: true,
		default: 'r1',
		options: [
			{
				name: 'Research Agent',
				value: 'r1',
			},
			{
				name: 'Research Agent Light',
				value: 'r1-light',
			},
		],
		description: 'The agent to use for the research run',
		displayOptions: {
			show: {
				operation: ['researchLead'],
			},
		},
	},
	{
		displayName: 'Output Schema',
		name: 'outputSchema',
		type: 'json',
		required: false,
		default: {},
		description:
			"If specified, the research agent will add an output with the schema specified here. Useful in case you'd like to extract specific data from the research report.",
		displayOptions: {
			show: {
				operation: ['researchLead'],
			},
		},
	},
];
