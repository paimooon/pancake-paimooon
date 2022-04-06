// File reading
const fs = require("fs");
const protobuf = require("protobufjs");

// Util
const dataUtil = require("./util/dataUtil");

var protoname = "GetGachaInfoRsp"

var moreSliced = fs.readFileSync("./bin/"+protoname+".bin");
var protoName = dataUtil.getProtoNameByPacketID(dataUtil.getPacketIDByProtoName(protoname));


protobuf.load("./proto/" + protoName + ".proto", function(err, root) {
    const testMessage = root.lookup(protoName);
    const message = testMessage.decode(moreSliced);
    console.log(message)
    
});


