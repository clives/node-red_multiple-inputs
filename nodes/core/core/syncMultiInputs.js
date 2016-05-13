module.exports = function(RED) {
    function executeSyncMultiInputs(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {

          console.log(" About to restet all inputValues, nbr nodes:"+node.activeNodes );

          var p=node.activeNodes
          for (var key in p) {
            if (p.hasOwnProperty(key)) {
              var currentnode = p[key]

              if(  currentnode.inputValues ){
                 for( var j =0; j < currentnode.inputValues.length; j++){
                   currentnode.inputValues[j]=undefined;

                 }
              }
            }
          }




          node.send(msg);
        });
    }
    RED.nodes.registerType("syncMultiInputs",executeSyncMultiInputs);
}
