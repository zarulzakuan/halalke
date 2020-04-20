window.addEventListener('load', function () {
    const codeReader = new ZXing.BrowserMultiFormatReader()
    console.log('Barcode reader initialized')
    codeReader.getVideoInputDevices()
        .then((videoInputDevices) => {
            document.getElementById('startButton').addEventListener('click', () => {
                codeReader.decodeFromVideoDevice(undefined, 'video', (result, err) => {
                    if (result) {
                        //console.log(result)
                        document.getElementById('result').textContent = result.text
                        toggleCameraModal();
                        getEntry("1234567890128");
                        
                    }
                    if (err && !(err instanceof ZXing.NotFoundException)) {
                        console.error(err)
                        document.getElementById('result').textContent = err
                        
                        
                    }
                })
                
            })
            document.getElementById('stopCamera').addEventListener('click', () => {
                codeReader.reset()
                document.getElementById('result').textContent = '';
                console.log('Reset.')
            })
        })
        .catch((err) => {
            console.error(err)
        })
})