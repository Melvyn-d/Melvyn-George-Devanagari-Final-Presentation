const input = document.getElementById('devanagariInput');
const preview = document.getElementById('livePreview');
const clearBtn = document.getElementById('clearBtn');


const transliterationMap = {
    'a': 'अ', 'A': 'आ', 'i': 'इ', 'I': 'ई', 'u': 'उ', 'U': 'ऊ',
    'e': 'ए', 'E': 'ऐ', 'o': 'ओ', 'O': 'औ',
    'k': 'क', 'K': 'ख', 'g': 'ग', 'G': 'घ',
    'c': 'च', 'C': 'छ', 'j': 'ज', 'J': 'झ',
    't': 'त', 'T': 'ट', 'd': 'द', 'D': 'ड',
    'n': 'न', 'N': 'ण', 'p': 'प', 'P': 'फ',
    'b': 'ब', 'B': 'भ', 'm': 'म', 'y': 'य',
    'r': 'र', 'l': 'ल', 'v': 'व', 's': 'स',
    'S': 'श', 'h': 'ह'
};


const matraMap = {
    'a': '',    
    'A': 'ा',   
    'i': 'ि',  
    'I': 'ी',   
    'u': 'ु',   
    'U': 'ू',   
    'e': 'े',   
    'E': 'ै',  
    'o': 'ो',   
    'O': 'ौ'    
};

const consonants = ['k','K','g','G','c','C','j','J','t','T','d','D','n','N','p','P','b','B','m','y','r','l','v','s','S','h'];

input.addEventListener('input', () => {
    const englishText = input.value;
    let devanagariResult = "";

    for (let i = 0; i < englishText.length; i++) {
        let char = englishText[i];
        let prevChar = englishText[i - 1];

        if (matraMap[char] !== undefined && consonants.includes(prevChar)) {
            devanagariResult += matraMap[char];
        } else {
           
            devanagariResult += transliterationMap[char] || char;
        }
    }

    preview.textContent = devanagariResult;
});

clearBtn.addEventListener('click', () => {
    input.value = '';
    preview.textContent = '';
});