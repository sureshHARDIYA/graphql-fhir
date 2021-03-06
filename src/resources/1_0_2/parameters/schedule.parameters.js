const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the schedule query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Schedule-actor
	actor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Schedule.actor',
		description:
			'The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for',
	},
	// http://hl7.org/fhir/SearchParameter/Schedule-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Schedule.planningHorizon',
		description:
			'Search for Schedule resources that have a period that contains this date specified',
	},
	// http://hl7.org/fhir/SearchParameter/Schedule-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Schedule.identifier',
		description: 'A Schedule Identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Schedule-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Schedule.type',
		description:
			'The type of appointments that can be booked into associated slot(s)',
	},
};
