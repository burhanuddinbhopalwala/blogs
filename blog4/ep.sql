-- Source config 
Endpoint ARN
<>

Endpoint engine
MySQL

Endpoint type
Source

User name
dms_rep_instance

KMS ARN / ID
arn:aws:kms:<>
Status
Active
Server name
<source-ip/dns>

Port
3306

SSL mode
true

Extra connection attributes
BCPPacketSize=5000

- Destination config
Endpoint ARN
<>

Endpoint engine
MySQL

Endpoint type
Target

User name
cloud_user

KMS ARN / ID
arn:aws:kms:<>

Status
Active

Server name
<host-ip/dns>

Port
3306

SSL mode
true

Extra connection attributes
parallelLoadThreads=1
controlTablesFileGroup=
safeguardpolicy=EXCLUSIVE_AUTOMATIC_TRUNCATION