const sampleTexts = [
 
];

let startTime, endTime;
let selectedText;

function startTest() {
  selectedText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
  document.getElementById("sampleText").innerText = selectedText;
  document.getElementById("inputArea").disabled = false;
  document.getElementById("inputArea").value = "";
  document.getElementById("inputArea").focus();
  document.getElementById("result").innerText = "";
  startTime = new Date();
}

document.getElementById("inputArea").addEventListener("input", function () {
  const typedText = this.value;
  if (typedText.length === selectedText.length) {
    endTest();
  }
});

function endTest() {
  endTime = new Date();
  let totalTime = (endTime - startTime) / 1000; // seconds
  let totalWords = selectedText.split(" ").length;
  let typedText = document.getElementById("inputArea").value;

  // Word Per Minute
  let speed = Math.round((typedText.split(" ").length / totalTime) * 60);

  // Accuracy
  let correctChars = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === selectedText[i]) correctChars++;
  }
  let accuracy = ((correctChars / selectedText.length) * 100).toFixed(2);

  // Display
  document.getElementById("result").innerHTML = `
    🕒 Time: ${totalTime.toFixed(1)} sec<br/>
    💨 Speed: ${speed} WPM<br/>
    🎯 Accuracy: ${accuracy}%<br/>
  `;

  document.getElementById("inputArea").disabled = true;
}
