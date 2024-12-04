const creationDate = new Date();

const day = String(creationDate.getDate()).padStart(2, '0');
const month = String(creationDate.getMonth() + 1).padStart(2, '0');
const year = creationDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

// console.log(`Created on: ${formattedDate}`);
return formattedDate;
