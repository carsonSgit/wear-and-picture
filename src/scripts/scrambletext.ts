// scrambletext.ts

const spellings = {
    wear: [
        "we4r", "w3ar", "w3@r", "w34r", "v34r", "v3@r", "^3@r", "we@r", "w34®", 
        "w#ar", "v3*r", "^e4r", "v#4r", "w#@r", "^e*r", "^34r", "v34@", "v@4®", 
        "^3*r", "we*4", "v#ar", "v3@®", "w3*r", "^#ar", "we*4", "w3@®", "v34®", 
        "w3*4", "w#4®", "^3*r", "w3*r", "^@ar", "w#4r", "w34@", "v#ar", "we@®", 
        "w@4®"
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
        "pi[ture", "p1<tw4e", "pic}u®e", "p.<t^4e", "d!<:+re", "b|c+ure", 
        ">i<<vre", "p=c+u®e", "p1ctu3e", "p+ct@re", ">i<tvr3", "p_<tu>3", 
        "p!<nu3e", "d8<ture", "p1ct@r3", "p![*ure", "d!<+^re", "p4ctur3", 
        "p!<<u®e", "pr<tw_4", "pj<iu4r", "pi<t<se", "bicz!4e", "p.<t!@3", 
        "pi<+u_3", "bj<+]4r", "p![+u4e"
      ],
      
      ".": [
        ".", "!", "?", "‽", "†", "‡", "ʕ", "ƛ", ",", "-", "‽"
      ]
  };
  
  let interval: number | null = null;
  
  export function initTextScramble(element: HTMLElement) {
    const originalText = element.dataset.value || "";
    const possibleSpellings = spellings[originalText as keyof typeof spellings] || [originalText];
  
    element.onmouseover = () => {
      clearInterval(interval as number);
  
      interval = window.setInterval(() => {
        const target = element;
        target.innerText = possibleSpellings[Math.floor(Math.random() * possibleSpellings.length)];
      }, 50);
    };
  
    element.onmouseout = () => {
      clearInterval(interval as number);
      element.innerText = originalText;
    };
  }
  