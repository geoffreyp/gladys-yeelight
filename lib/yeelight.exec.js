var Yeelight = require('./Yeelight.js');
var shared = require('./yeelight.shared.js');

module.exports = function exec(params) {
    
    var value = params.state.value;

    switch (params.deviceType.type) {
        
        case 'binary':
            var cmd = value == 1 ? 'on' : 'off';
            return shared.instances[params.deviceType.device].set_power(cmd);
            break;
            
        case 'brightness':
            return shared.instances[params.deviceType.device].set_bright(value);
            break;
            
        case 'hue':
            return shared.instances[params.deviceType.device].set_hsv({hue: value});
            break;
            
        case 'saturation':
            return shared.instances[params.deviceType.device].set_hsv({sat: value});
            break;
    };

};