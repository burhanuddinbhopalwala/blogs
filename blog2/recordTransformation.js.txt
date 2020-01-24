'use strict';
console.log('Loading function');

exports.handler = (event, context, callback) => {
    let success = 0; // Number of valid entries found
    let failure = 0; // Number of invalid entries found
   
    /* Process the list of records and transform them */
    const output = event.records.map((record) => {

        const entry = (new Buffer(record.data, 'base64')).toString('utf8');
        let match = parser.exec(entry);
        if (match) {
            let parsed_match = JSON.parse(match); 
            var milliseconds = new Date().getTime();
            const result = `${milliseconds},${parsed_match.TICKER_SYMBOL},${parsed_match.SECTOR},${parsed_match.CHANGE},${parsed_match.PRICE}`+"\n";
            const payload = (new Buffer(result, 'utf8')).toString('base64');
     
                /* Transformed event */
                success++;  
                return {
                    recordId: record.recordId,
                    result: 'Ok',
                    data: payload
            }
        }
        else {
            /* Failed event, notify the error and leave the record intact */
            console.log("Failed event : "+ record.data);
            failure++;
            return {
                recordId: record.recordId,
                result: 'ProcessingFailed',
                data: record.data,
            };
        }
}