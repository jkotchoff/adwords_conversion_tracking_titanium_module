// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var adwords_tracker = require('com.geoplus.adwordsconversiontracking');
Ti.API.info("module is => " + adwords_tracker);

label.text = adwords_tracker.example();

Ti.API.info("module exampleProp is => " + adwords_tracker.exampleProp);
adwords_tracker.exampleProp = "This is a test value";


// This class provides a way to make easy asynchronous requests to Google for
// conversion pings. Use the code as follows:
//   conversionId:@"your id here"
//          label:@"your label here"
//          value:@"your app's price here"
//          isRepeatable:true/false
adwords_tracker.pingGoogle({
    conversionId: 'aaa', 
    label:        'bbb',
    value:        'ccc',
    isRepeatable: false
});
