function generateSentences() {
    // Get the sentence and repeat count values
    const sentence = document.getElementById('sentence').value;
    const repeatCount = parseInt(document.getElementById('repeatCount').value);
    
    // Get the result element
    const result = document.getElementById('result');
    
    // Clear any previous sentences
    result.innerHTML = '';

    // Generate the sentences
    for (let i = 1; i <= repeatCount; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = sentence;
        result.appendChild(listItem);
    }
}
