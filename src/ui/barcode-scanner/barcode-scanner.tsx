import React from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import {
  Html5QrcodeCameraScanConfig,
  Html5QrcodeConfigs,
} from 'html5-qrcode/esm/html5-qrcode';
import {
  Html5QrcodeScanType,
  QrcodeErrorCallback,
  QrcodeSuccessCallback,
} from 'html5-qrcode/esm/core';

interface Html5QrcodeScannerConfig
  extends Html5QrcodeCameraScanConfig,
    Html5QrcodeConfigs {
  rememberLastUsedCamera?: boolean | undefined;
  supportedScanTypes: Array<Html5QrcodeScanType> | [];
}

export interface BarcodeScannerProps extends Html5QrcodeScannerConfig {
  readonly onSuccess: QrcodeSuccessCallback;
  readonly onError: QrcodeErrorCallback;
  readonly verbose: boolean;
}

export const BarcodeScanner: React.FC<BarcodeScannerProps> = props => {
  const { onSuccess, onError, verbose, ...config } = props;

  const scannerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scannerRef.current) {
      const scanner = new Html5QrcodeScanner(
        scannerRef.current.id,
        config,
        verbose
      );
      scanner.render(onSuccess, onError);
    }
  }, []);

  return <div id={'scanner'} ref={scannerRef} />;
};
