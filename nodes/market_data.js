module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.path = config.path;
        console.log("Path:"+config.path);

        this.on('input', function(msg) {


           // msg.payload =msg.payload



          node.send(msg);
        });
    }
    RED.nodes.registerType("MarketData",LowerCaseNode);
}
