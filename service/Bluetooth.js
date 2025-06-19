import { BluetoothEscposPrinter } from "react-native-bluetooth-escpos-printer";

export default class Bluetooth {
  static running = false;
  static devices = [];
  static timer = null;

  static startScan(callback) {
    this.running = true;
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      if (this.running) {
        BluetoothEscposPrinter.scanDevices()
          .then((devices) => {
            console.log(devices);
            callback && callback(devices);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, 300);
  }

  static stopScan() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
