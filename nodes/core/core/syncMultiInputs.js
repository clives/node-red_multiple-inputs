module.exports = function(RED) {
    function executeSyncMultiInputs(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {

          console.log(" About to restet all inputValues" );


           for (var i = 0; i <  node.activeNodes.length; i++) {
              var currentnode = node.activeNodes[i] ;

             for( var j =0; j < currentnode.inputValues.length; j++){
               currentnode.inputValues[j]=undefined;

             }

          }


          node.send(msg);
        });
    }
    RED.nodes.registerType("syncMultiInputs",executeSyncMultiInputs);
}
