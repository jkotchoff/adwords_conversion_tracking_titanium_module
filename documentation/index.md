# AdwordsConversionTrackingTitaniumModule Module

## Description

This Titanium module wraps the Google mobile Ads Conversion tracking for iOS SDK from:  
[https://developers.google.com/mobile-ads-sdk/docs/admob/conversion-tracking](https://developers.google.com/mobile-ads-sdk/docs/admob/conversion-tracking)

It was created as per the Appcelerator Titanium iOS Module Development Guide:  
[https://wiki.appcelerator.org/display/guides/iOS+Module+Development+Guide](https://wiki.appcelerator.org/display/guides/iOS+Module+Development+Guide)

using Titanium sdk version 3.0.2

## Installing this module

As per:  
[http://docs.appcelerator.com/titanium/latest/#!/guide/Using_Titanium_Modules](http://docs.appcelerator.com/titanium/latest/#!/guide/Using_Titanium_Modules),

download and unzip this module into your Titanium project:  
[https://raw.github.com/cornflakesuperstar/adwords_conversion_tracking_titanium_module/master/com.geoplus.adwordsconversiontracking-iphone-0.1.zip](https://raw.github.com/cornflakesuperstar/adwords_conversion_tracking_titanium_module/master/com.geoplus.adwordsconversiontracking-iphone-0.1.zip)

## Using this module

    var adwords_tracker = require('com.geoplus.adwordsconversiontracking');
    if(!Ti.Android) {
      // A non-repeatable conversion event
      adwords_tracker.pingGoogle({
        conversionId: '< your id here >', 
        label:        '< your label here >',
        value:        '< your value here >',
        isRepeatable: false
      });

      // A repeatable conversion event
      adwords_tracker.pingGoogle({
        conversionId: '< your id here >', 
        label:        '< your label here >',
        value:        '< your value here >',
        isRepeatable: true
      });
    }

## Author

Jason Kotchoff  
[http://www.geoplus.com.au](http://www.geoplus.com.au)

## License

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
