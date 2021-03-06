const { GraphQLList, GraphQLInputObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Organizationcontact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Organizationcontact_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contactentity-type
		purpose: {
			type: require('./codeableconcept.input.js'),
			description: 'Indicates a purpose for which the contact can be reached.',
		},
		name: {
			type: require('./humanname.input.js'),
			description: 'A name associated with the contact.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input.js')),
			description:
				'A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.',
		},
		address: {
			type: require('./address.input.js'),
			description: 'Visiting or postal addresses for the contact.',
		},
	}),
});
