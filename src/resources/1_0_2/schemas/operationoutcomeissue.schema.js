const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary OperationOutcomeissue Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationOutcomeissue',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_severity: {
			type: require('./element.schema.js'),
			description:
				'Indicates whether the issue indicates a variation from successful processing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/issue-severity
		severity: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates whether the issue indicates a variation from successful processing.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/issue-type
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/operation-outcome
		details: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Additional details about the error. This may be a text description of the error, or a system code that identifies the error.',
		},
		_diagnostics: {
			type: require('./element.schema.js'),
			description:
				'Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.',
		},
		diagnostics: {
			type: GraphQLString,
			description:
				'Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.',
		},
		_location: {
			type: require('./element.schema.js'),
			description:
				'A simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.',
		},
		location: {
			type: new GraphQLList(GraphQLString),
			description:
				'A simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.',
		},
	}),
});
