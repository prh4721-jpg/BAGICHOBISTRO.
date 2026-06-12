GmsBarcodeScannerOptions options = new GmsBarcodeScannerOptions.Builder()
   .setBarcodeFormats(
       Barcode.FORMAT_QR_CODE,
       Barcode.FORMAT_AZTEC)
   .build();
   GmsBarcodeScanner scanner = GmsBarcodeScanning.getClient(this);
// Or with a configured options
// GmsBarcodeScanner scanner = GmsBarcodeScanning.getClient(context, options);
scanner
   .startScan()
   .addOnSuccessListener(
       barcode -> {
         // Task completed successfully
       })
   .addOnCanceledListener(
       () -> {
         // Task canceled
       })
   .addOnFailureListener(
       e -> {
         // Task failed with an exception
       });
       String rawValue = barcode.getRawValue();
