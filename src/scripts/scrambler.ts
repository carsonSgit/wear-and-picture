const scrambleData = {
  wear: [ "w34r", "v34r", "v3Lr", "^3*r", "weFr", "w34®", 
    "w#ar", "v3*r", "^e4r", "v#4r", "w#Or", "^e*r", "^34r", "v34^", "v>4®", 
    "^3*r", "we*4", "v#ar", "v3L®", "w3*r", "^#ar", "we*4", "w3S®", "v34®", 
    "w3*4", "w#4®", "^3*r", "w3*r", "^Mar", "w#4r", "w34Z", "v#ar", "we<®", 
    "w!4®"
  ],
  
  "%20": [
    "%28", "%21", "F20", "%29", "%26", "%7B", "E3D", "%5C", "Z3A", "Y21", 
    "%3E", "%3C", "A2B", "%2B", "%2o", "%60", "%3F", "%20", "%40", "%5E", 
    "%3A", "F2o", "%26", "%3D", "D5E", "%7E", "%5B", "%2O", "%3B", "D2A", 
    "%24", "E2D", "%5D", "%23", "%22", "%2A", "%2C", "%25", "Z25", "E2O", 
    "%2D", "Y2C", "%7D", "F7D", "D3E"
  ],
  
  "&": [
    "&", "+", "†", "‡", "ʕ", "ƛ", ",", "?", "-", "!", "‽"
  ],

  picture: [
    "pi[ture", "pj<tw4e", "pic}u®e", "p.<t^4e", "d!<:+re", "b|c+ure", 
    ">i<<vre", "p=c+u®e", "p1ctu3e", "p+ct@re", ">i<tvr3", "p_<tu>3", 
    "p!<nu3e", "d8<ture", "pjct@r3", "p![*ure", "d!<+^re", "p4ctur3", 
    "p!<<u®e", "pr<tw_4", "pj<iu4r", "pi<t<se", "bicz!4e", "p.<t!@3", 
    "pi<+u_3", "bj<+]4r", "pj[+u4e"
  ],
  
  ".": [
    ".", "!", "?", "‽", "†", "‡", "ʕ", "ƛ", ",", "-", "‽"
  ]
};

let interval: number | null = null;

export function initTextScramble(element: HTMLElement) {
  const originalText = element.dataset.value || "";
  const possibleSpellings = scrambleData[originalText as keyof typeof scrambleData] || [originalText];

  const scrambleInterval = window.setInterval(() => {
    element.innerText = possibleSpellings[Math.floor(Math.random() * possibleSpellings.length)];
  }, 50);

  setTimeout(() => {
    clearInterval(scrambleInterval);
    startReverseScramble(element, originalText);
  }, 1100);

  element.onmouseover = () => {
    clearInterval(interval as number);
    interval = window.setInterval(() => {
      element.innerText = possibleSpellings[Math.floor(Math.random() * possibleSpellings.length)];
    }, 60);
  };

  element.onmouseout = () => {
    clearInterval(interval as number);
    startReverseScramble(element, originalText);
  };
}

function startReverseScramble(element: HTMLElement, originalText: string) {
  let currentText = element.innerText;
  let i = originalText.length - 1; 

  const reverseInterval = window.setInterval(() => {
    if (i < 0) {
      clearInterval(reverseInterval);
    } else {
      currentText = currentText.slice(0, i) + originalText[i] + currentText.slice(i + 1);
      element.innerText = currentText;
      i--;
    }
  }, 30);
}