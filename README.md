# Google Adwords Conversion Tracking Titanium Module

This Titanium module wraps the Google mobile Ads Conversion tracking for iOS SDK from:  
[https://developers.google.com/mobile-ads-sdk/docs/admob/conversion-tracking](https://developers.google.com/mobile-ads-sdk/docs/admob/conversion-tracking)

It was created as per the Appcelerator Titanium iOS Module Development Guide:  
[https://wiki.appcelerator.org/display/guides/iOS+Module+Development+Guide](https://wiki.appcelerator.org/display/guides/iOS+Module+Development+Guide)

using Titanium sdk version 3.0.2

## Installing this module

As per:  
[https://wiki.appcelerator.org/display/tis/Using+Titanium+Modules](https://wiki.appcelerator.org/display/tis/Using+Titanium+Modules),

download and unzip this module into your Titanium project:  
[github/...](http://github.com)

and then reference it in your tiapp.xml:

    <ti:app>
      <modules>
        <module version="0.1" platform="iphone">com.geoplus.adwordsconversiontracking</module>
      </modules>
    </ti:app>
    </code>

## Using this module

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