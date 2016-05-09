module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {


           // msg.payload =msg.payload



          node.send(msg);
        });
    }
    RED.nodes.registerType("MarketData",LowerCaseNode);
}
