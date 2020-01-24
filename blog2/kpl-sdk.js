const KinesisProducer = require("aws-kinesis-producer");


const options = {
    streamName: "test-stream",
    kinesisClient: null,
    maxDrains: 3,
    maxRecords: 1,
    maxTime: 0,
    chunkSize: 400,
    kinesisOptions: {
        region: "<aws-region>",
        accessKeyId: <"your-access-key",
        secretAccessKey: "your-secret-access-key"
    },
};


let kinesisProducer = new KinesisProducer(options);
let record = {
    "message": JSON.stringify({source: "vendor1", "load": {"vehicle_no": "VHIND12345", "latitude":"22.544", "longitude":"45.44", "gps_timestamp": "2020-01-15 12:00:00"}})
}

kinesisProducer.on('drainError', (errors) => {
    console.log(`error: ${JSON.stringify(errors)}`)
});

kinesisProducer.on('drainSuccess', (records) => {
    console.log(`success records: ${records.length}`)
});

for(let i =0; i < 1; i++) {
    kinesisProducer.putRecords([record]);
}
