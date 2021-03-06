const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Communication Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Communication_Input',
	description: 'Base StructureDefinition for Communication Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Communication_Enum_input',
					values: { Communication: { value: 'Communication' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		definition: {
			type: new GraphQLList(GraphQLString),
			description:
				'A protocol, guideline, or other definition that was adhered to in whole or in part by this communication event.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				'An order, proposal or plan fulfilled in whole or in part by this Communication.',
		},
		partOf: {
			type: new GraphQLList(GraphQLString),
			description: 'Part of this action.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the transmission.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/event-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the transmission.',
		},
		_notDone: {
			type: require('./element.input.js'),
			description:
				'If true, indicates that the described communication event did not actually occur.',
		},
		notDone: {
			type: GraphQLBoolean,
			description:
				'If true, indicates that the described communication event did not actually occur.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/communication-not-done-reason
		notDoneReason: {
			type: require('./codeableconcept.input.js'),
			description:
				'Describes why the communication event did not occur in coded and/or textual form.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/communication-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The type of message conveyed such as alert, notification, reminder, instruction, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ParticipationMode
		medium: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A channel that was used for this communication (e.g. email, fax).',
		},
		subject: {
			type: GraphQLString,
			description:
				'The patient or group that was the focus of this communication.',
		},
		recipient: {
			type: new GraphQLList(GraphQLString),
			description:
				'The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).',
		},
		topic: {
			type: new GraphQLList(GraphQLString),
			description:
				'The resources which were responsible for or related to producing this communication.',
		},
		context: {
			type: GraphQLString,
			description: 'The encounter within which the communication was sent.',
		},
		_sent: {
			type: require('./element.input.js'),
			description: 'The time when this communication was sent.',
		},
		sent: {
			type: DateTimeScalar,
			description: 'The time when this communication was sent.',
		},
		_received: {
			type: require('./element.input.js'),
			description:
				'The time when this communication arrived at the destination.',
		},
		received: {
			type: DateTimeScalar,
			description:
				'The time when this communication arrived at the destination.',
		},
		sender: {
			type: GraphQLString,
			description:
				'The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'The reason or justification for the communication.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates another resource whose existence justifies this communication.',
		},
		payload: {
			type: new GraphQLList(require('./communicationpayload.input.js')),
			description:
				'Text, attachment(s), or resource(s) that was communicated to the recipient.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Additional notes or commentary about the communication by the sender, receiver or other interested parties.',
		},
	}),
});
