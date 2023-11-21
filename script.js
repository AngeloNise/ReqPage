function showForm() {
    document.getElementById("request-forms").style.display = "block";
    document.getElementById("procedure-steps-content").style.display = "none";
    document.getElementById("IDreplacement-price").style.display = "none";
    document.getElementById("Req-ID-LSL").style.display = "none";
    document.getElementById("new-request").style.color = "red";
    document.getElementById("new-request").style.textDecoration = "underline";
    document.getElementById("procedure-steps").style.color = "";
    document.getElementById("procedure-steps").style.textDecoration = "";
}

function showSteps() {
    document.getElementById("procedure-steps-content").style.display = "block";
    document.getElementById("request-forms").style.display = "none";
    document.getElementById("IDreplacement-price").style.display = "none";
    document.getElementById("Req-ID-LSL").style.display = "none";
    document.getElementById("procedure-steps").style.color = "red";
    document.getElementById("procedure-steps").style.textDecoration = "underline";
    document.getElementById("new-request").style.color = "";
    document.getElementById("new-request").style.textDecoration = "";
}

function showLostStolenForm() {
    document.getElementById("Req-ID-LSL").style.display = "block";
    document.getElementById("request-forms").style.display = "none";
    document.getElementById("procedure-steps-content").style.display = "none";
    document.getElementById("IDreplacement-price").style.display = "none";
    document.getElementById("new-request").style.color = "red";
    document.getElementById("new-request").style.textDecoration = "underline";
    document.getElementById("procedure-steps").style.color = "";
    document.getElementById("procedure-steps").style.textDecoration = "";
}

function idPrice() {
    document.getElementById("IDreplacement-price").style.display = "block";
    document.getElementById("request-forms").style.display = "none";
    document.getElementById("procedure-steps-content").style.display = "none";
    document.getElementById("procedure-steps").style.color = "red";
    document.getElementById("procedure-steps").style.textDecoration = "underline";
}

document.addEventListener("DOMContentLoaded", function() {
    var Step1 = document.getElementById("Step1");
    var Step2 = document.getElementById("Step2");
    var Step3 = document.getElementById("Step3");
    var Step4 = document.getElementById("Step4");

    var Next1 = document.getElementById("Next1");
    var Next2 = document.getElementById("Next2");
    var Next3 = document.getElementById("Next3");
    var Back1 = document.getElementById("Back1");
    var Back2 = document.getElementById("Back2");
    var Back3 = document.getElementById("Back3");

    var Submit = document.getElementById("Submit");
    var progress2 = document.getElementById("progress2");

    Submit.onclick = function () {
        if (validateForm()) {
            var uploadCoR = document.getElementById("uploadCoR").files[0];
            var uploadSignature = document.getElementById("uploadSignature").files[0];
            var uploadParentSignature = document.getElementById("uploadParentSignature").files[0];

            if (!uploadCoR || !uploadSignature || !uploadParentSignature) {
                alert("Please fill in all required fields before submitting the form.");
            } else {
                console.log("File selected:", uploadCoR.name);
                console.log("File selected:", uploadSignature.name);
                console.log("File selected:", uploadParentSignature.name);

                Form4.style.left = "-450px";
                Form5.style.left = "43px";
                progress1.style.width = "450px";
            }
        }
    };

    Next1.onclick = function () {
        Step1.style.left = "-450px";
        Step2.style.left = "25px";
        progress2.style.width = "220px";
    };

    Back1.onclick = function () {
        Step1.style.left = "25px";
        Step2.style.left = "450px";
        progress2.style.width = "90px";
    };

    Next2.onclick = function () {
        Step2.style.left = "-450px";
        Step3.style.left = "25px";
        progress2.style.width = "330px";
    };

    Back2.onclick = function () {
        Step2.style.left = "25px";
        Step3.style.left = "450px";
        progress2.style.width = "220px";
    };
    Next3.onclick = function () {
        Step3.style.left = "-450px";
        Step4.style.left = "25px";
        progress2.style.width = "450px";
    };

    Back3.onclick = function () {
        Step3.style.left = "25px";
        Step4.style.left = "450px";
        progress2.style.width = "330px";
    };
});


