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
        basic.showString("fwd")
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 180)
    } else {
        if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
            basic.showString("bwd")
            pins.servoWritePin(AnalogPin.P0, 0)
            pins.servoWritePin(AnalogPin.P1, 0)
        } else {
            if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
                basic.showString("lft")
                pins.servoWritePin(AnalogPin.P0, 180)
                pins.servoWritePin(AnalogPin.P1, 90)
            } else {
                if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
                    basic.showString("rht")
                    pins.servoWritePin(AnalogPin.P0, 90)
                    pins.servoWritePin(AnalogPin.P1, 180)
                } else {
                    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
                        basic.showString("stp")
                        pins.servoWritePin(AnalogPin.P0, 90)
                        pins.servoWritePin(AnalogPin.P1, 90)
                    } else {
                        if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
                            basic.showString("hlt")
                            pins.servoWritePin(AnalogPin.P0, 180)
                            pins.servoWritePin(AnalogPin.P1, 0)
                        } else {
                            if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
                                basic.showString("hrt")
                                pins.servoWritePin(AnalogPin.P0, 0)
                                pins.servoWritePin(AnalogPin.P1, 180)
                            } else {
                                if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
                                    basic.showString("4up")
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
