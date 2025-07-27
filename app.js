import {extractEmails, cleanPhoneNumbers} from './utils.js';

import chalk from 'chalk';

const messyText = `
  Contact us at info@example.com or support@domain.org.
  Call (425) 555-1212 or 1-800-GET-HELP.
`;

console.log(chalk.blueBright("Extracted Emails:"));
console.log(extractEmails(messyText));

console.log(chalk.green("Cleaned Text:"));
console.log(cleanPhoneNumbers(messyText));
