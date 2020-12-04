let pin0 = 0
let pin8 = 0
let pin12 = 0
let pin16 = 0
let drive = 0
bluetooth.onBluetoothConnected(function () {
    pin0 = 0
    pin8 = 0
    pin12 = 0
    pin16 = 0
    drive = 0
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    drive = 0
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P0, 8)
    pins.digitalWritePin(DigitalPin.P0, 12)
    pins.digitalWritePin(DigitalPin.P0, 16)
    basic.showString("D")
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showString("B1D")
    } else {
        if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
            basic.showString("B1U")
        } else {
            if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
                basic.showString("B2D")
            } else {
                if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
                    basic.showString("B2U")
                } else {
                    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
                        basic.showString("B3D")
                    } else {
                        if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
                            basic.showString("B3D")
                        } else {
                            if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
                                basic.showString("B4D")
                            } else {
                                if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
                                	
                                } else {
                                    basic.showString("other")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
