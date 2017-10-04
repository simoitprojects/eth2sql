var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var args = process.argv.slice(2);

var start_id = parseInt(args[0])
var end_id = parseInt(args[1])
console.log(start_id)
console.log(end_id)
//var start_id = 2000000
//var end_id = 2000005

console.log("--TRANSACTIONS FOR BLOCKS " + start_id + " TO " + end_id );
for (block_id = start_id; block_id <= end_id; block_id++) { 
    var block = web3.eth.getBlock(block_id);
    for (i = 0; i < block.transactions.length; i++) { 
        var transaction = web3.eth.getTransaction(block.transactions[i])
        insert_string = "INSERT INTO transactions VALUES ('" + transaction.hash + "','" + transaction.blockHash + "'," + transaction.blockNumber + ",'" + 
        transaction.from + "'," + transaction.gas + "," + transaction.gasPrice.toNumber() + ",'" + transaction.input + "'," + transaction.nonce + ",'" + 
        transaction.to + "'," + transaction.transactionIndex + ",'" + transaction.v + "'," + transaction.value.toNumber() + ")";
        console.log(insert_string);
    }
}


