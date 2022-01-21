function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zPAR-TpK1/model.json", modelLoaded)
}

function modelLoaded() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        document.getElementById("result_label").style.color = "rgb(" + r + " , " + g + "," + b + ")"
        document.getElementById("result_confidence").style.color = "rgb(" + r + " , " + g + "," + b + ")"
        document.getElementById("result_label").innerHTML = " I can hear " + results[0].label
        document.getElementById("result_confidence").innerHTML = "Accuracy " + (results[0].confidence * 100).toFixed(2) + "%"

        img1 = document.getElementById("Alien1")
        img2 = document.getElementById("Alien2")
        img3 = document.getElementById("Alien3")
        img4 = document.getElementById("Alien4")

        if(results[0].label == "clapping" ){
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(results[0].label == "snapping"){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(results[0].label == "knocking" ){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        }
        else {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }
}
