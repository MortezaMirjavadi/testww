import React, {useState, useEffect} from "react";
import { BrowserQRCodeReader } from "@zxing/library";
import {css} from "emotion";

const style = {
    barcodeContainer: css`
        display: flex;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        label: barcode-container;
    `,
    footer: css`
        width: 100%;
        height: 50px;
        background-color: black;
        text-align: center;
        color: white;
        label: footer-barcode-container;
    `,
    barCodeMainContainer: css`
        // width: 100%;
        // max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        label: barcode-main-container;
    `
};

const Barcode = props => {

  const codeReader = new BrowserQRCodeReader();

  useEffect(() => {
        codeReader
            .listVideoInputDevices()
            .then(videoInputDevices => {
                videoInputDevices.forEach(device => {
                    console.log(`${device.label}, ${device.deviceId}`);

                    const secondDeviceId = videoInputDevices[0].deviceId;

                    codeReader
                        .decodeFromInputVideoDevice(undefined, 'video')
                        .then(result => alert(result.text))
                        .catch(err => console.error(err));
                });
            })
            .catch(err => console.error(err));
    }, []);

  return(
    <div className={style.barcodeContainer}>
            <div className={style.footer}>

            </div>
            <div className={style.barCodeMainContainer}>
                <video
                    id="video"
                    width="90%"
                    height="100%"
                    style={{border: '1px solid gray'}}
                />
            </div>
            <div className={style.footer}>
                <h3> اسکن بار کد </h3>
            </div>
        </div>
  )
};

export default Barcode;