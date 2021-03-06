const { GraphQLList, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');

/**
 * @name exports
 * @summary DeviceMetriccalibration Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceMetriccalibration',
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
		_type: {
			type: require('./element.schema.js'),
			description: 'Describes the type of the calibration method.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-calibration-type
		type: {
			type: CodeScalar,
			description: 'Describes the type of the calibration method.',
		},
		_state: {
			type: require('./element.schema.js'),
			description: 'Describes the state of the calibration.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-calibration-state
		state: {
			type: CodeScalar,
			description: 'Describes the state of the calibration.',
		},
		_time: {
			type: require('./element.schema.js'),
			description: 'Describes the time last calibration has been performed.',
		},
		time: {
			type: InstantScalar,
			description: 'Describes the time last calibration has been performed.',
		},
	}),
});
