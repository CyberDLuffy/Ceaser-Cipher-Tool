function caesarCipher(str, shift) {
    let result = "";
    shift = (shift % 26 + 26) % 26;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
            }
        }

        result += char;
    }

    return result;
}

function encrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value) || 0;

    document.getElementById("result").innerText = caesarCipher(text, shift);
}

function decrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value) || 0;

    document.getElementById("result").innerText = caesarCipher(text, -shift);
}


