const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Sequencerepository Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Sequencerepository',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
			description:
				'Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/repository-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'URI of an external repository which contains further details about the genetics data.',
		},
		url: {
			type: UriScalar,
			description:
				'URI of an external repository which contains further details about the genetics data.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'URI of an external repository which contains further details about the genetics data.',
		},
		name: {
			type: GraphQLString,
			description:
				'URI of an external repository which contains further details about the genetics data.',
		},
		_datasetId: {
			type: require('./element.schema.js'),
			description:
				'Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.',
		},
		datasetId: {
			type: GraphQLString,
			description:
				'Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.',
		},
		_variantsetId: {
			type: require('./element.schema.js'),
			description:
				'Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.',
		},
		variantsetId: {
			type: GraphQLString,
			description:
				'Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.',
		},
		_readsetId: {
			type: require('./element.schema.js'),
			description: 'Id of the read in this external repository.',
		},
		readsetId: {
			type: GraphQLString,
			description: 'Id of the read in this external repository.',
		},
	}),
});
