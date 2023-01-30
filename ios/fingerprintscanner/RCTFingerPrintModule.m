// RCTFingerPrintModule.m
#import "RCTFingerPrintModule.h"

@implementation RCTFingerPrintModule

// To export a module named RCTFingerPrintModule
RCT_EXPORT_MODULE(FingerPrintScannerIOS);
RCT_EXPORT_METHOD(testMethod: (RCTResponseSenderBlock)callback)
{
callback(@[true])
}

@end
