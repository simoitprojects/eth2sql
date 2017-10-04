# eth2sql
Import Ethereum blockchain transaction data to SQL db 

## Installation 
This tool requires npm, node.js, web3 

1. Install NPM - https://www.npmjs.com/package/npm
2. Pull this code for git 
3. In project folder run 
  npm install web3@^0.20.0
 
## Usage 
node app.js [start block id]  [end block id]
  
EXAMPLE: 
  node app.js 2000000 2000004
  
  This will print INSERT lines for transactions in Ethereum blocks from  2000000 to 2000004
