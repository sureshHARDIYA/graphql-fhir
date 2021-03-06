const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ContracttermvaluedItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContracttermvaluedItem',
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
		entityCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Specific type of Contract Provision Valued Item that may be priced.',
		},
		entityReference: {
			type: new GraphQLUnionType({
				name: 'ContracttermvaluedItementityReference_entityReference_Union',
				description:
					'Specific type of Contract Provision Valued Item that may be priced.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Specific type of Contract Provision Valued Item that may be priced.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description: 'Identifies a Contract Provision Valued Item instance.',
		},
		_effectiveTime: {
			type: require('./element.schema.js'),
			description:
				'Indicates the time during which this Contract Term ValuedItem information is effective.',
		},
		effectiveTime: {
			type: DateTimeScalar,
			description:
				'Indicates the time during which this Contract Term ValuedItem information is effective.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'Specifies the units by which the Contract Provision Valued Item is measured or counted, and quantifies the countable or measurable Contract Term Valued Item instances.',
		},
		unitPrice: {
			type: require('./money.schema.js'),
			description: 'A Contract Provision Valued Item unit valuation measure.',
		},
		_factor: {
			type: require('./element.schema.js'),
			description:
				'A real number that represents a multiplier used in determining the overall value of the Contract Provision Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		factor: {
			type: GraphQLFloat,
			description:
				'A real number that represents a multiplier used in determining the overall value of the Contract Provision Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		_points: {
			type: require('./element.schema.js'),
			description:
				'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Provision Valued Item delivered. The concept of Points allows for assignment of point values for a Contract ProvisionValued Item, such that a monetary amount can be assigned to each point.',
		},
		points: {
			type: GraphQLFloat,
			description:
				'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Provision Valued Item delivered. The concept of Points allows for assignment of point values for a Contract ProvisionValued Item, such that a monetary amount can be assigned to each point.',
		},
		net: {
			type: require('./money.schema.js'),
			description:
				'Expresses the product of the Contract Provision Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.',
		},
	}),
});
