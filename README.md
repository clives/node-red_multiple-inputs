
url: http://127.0.0.1:1880/

**to use it with Nodeclipse (Enide):**
npm install -g nodeclipse
nodeclipse -p

dev mode:
>grunt dev
you can use full debug (got to install node-debug)
>node-debug red.js


### Node

new fields:
activeNodes  : object, contains a field for each nodes { idNode1 : value, idNode2 : value , ....}

inputValues:  array , contains actual value at the input ( only available when nbrInputs > 0)

used fields:
inputWires : Array of Array , not sure why, contains only the inputIdNodes [[idNode ]]

how to access node id:
```
var arrayLength = this.inputWires.length;
var inputIndex=-1;
for (var i = 0; i < arrayLength; i++) {
    if( this.inputWires[i][0]==msg.idSender ){
      inputIndex = i;
    }
}
```


full node ( missing activeNodes ):
```
:{"id":"aee3c5b8.511c38","type":"function","z":"99bba521.664458","_closeCallbacks":[null],"inputWires":[["88b73430.7748c8"]],"wires":[["d6bc2096.2943e"]],"_wireCount":1,"_wire":"d6bc2096.2943e","name":"","func":"var date = new Date(msg.payload);\n// Change the payload to be a formatted Date string\nmsg.payload = date.toString();\n// Return the message so it can be sent on\nreturn msg;","outstandingTimers":[],"outstandingIntervals":[],"script":{},"_events":{}}

```




If you want to run the latest code from git, here's how to get started:

1. Install grunt, the build tool

        npm install -g grunt-cli

2. Clone the code:

        git clone https://github.com/node-red/node-red.git
        cd node-red

3. Install the node-red dependencies

        npm install

4. Build the code

        grunt build

5. Run

        node red.js



## Authors Node-RED

Node-RED is a creation of [IBM Emerging Technology](http://ibm.com/blogs/et).

* Nick O'Leary [@knolleary](http://twitter.com/knolleary)
* Dave Conway-Jones [@ceejay](http://twitter.com/ceejay)

For more open-source projects from IBM, head over [here](http://ibm.github.io).

## Copyright and license

Copyright 2013, 2016 IBM Corp. under [the Apache 2.0 license](LICENSE).
