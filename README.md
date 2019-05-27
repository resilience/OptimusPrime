# OptimusPrime

// Gil Candidate Test
// github repo : https://github.com/resilience/OptimusPrime

// The ASK
// - in the daily bitcoin price for a given period (input from a user but max
//   6 months period), on which days is the total number of the prime numbers in
//   that price, a prime number itself
// - pull the bitcoin price from somewhere, don’t hard code it
// - write the program in some JavaScript based language (react, node, etc)
// - create a basically styled interface, but with some polish

// Breakdown of the ask:
// Build Interface for user to specify period  ( max 6 month period ) in React
// Send selection to App backend on submit
//
// Backend makes API call based on date params & retrieves bitcoin price data from selected source
// for each date, find all prime numbers in returned bitcoin price
// if the total prime numbers in a bitcoin price for a day is a prime, add date to list
// return final date list to React when done
