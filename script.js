const webcam = document.getElementById('camera');
const capture = document.getElementById('capture');
const result = document.getElementById('Result');
const identify = document.getElementById('Identify');
const object = document.getElementById('Object');
const accuracy = document.getElementById('Accuracy');

webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 100
})
webcam.attach('#camera');
capture.addEventListener('click', function(){
    webcam.snap(function(data_uri){
        const imageElement = document.createElement('img');
        imageElement.src = data_uri;

        result.innerHTML = '';
        result.appendChild(imageElement);
    });
});
async function identifyImage(imageElement) {
    const prediction = await model.predict(imageElement);
    const objectName = prediction[0].className;
    const accuracy = (prediction[0].probability * 100).toFixed(2);
    
    object.textContent = objectName;
    accuracy.textContent = '$(objectAccuracy)%';
}
