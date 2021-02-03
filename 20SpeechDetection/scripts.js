window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.interimResults = true;
recognition.lang = 'tr-TR'


let p = document.createElement('p')
const words = document.querySelector(".words")
words.appendChild(p)

recognition.addEventListener("result",e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        const poopScript = transcript.replace(/bok|sıçtık|sıç|kabız/gi, '💩');
        p.textContent = poopScript;

        if(e.results[0].isFinal){
            p = document.createElement('p');
            words.appendChild(p)
        }

        if(transcript === "temizle"){
            words.innerHTML = ''
        }
})

recognition.addEventListener('end',recognition.start)

recognition.start()