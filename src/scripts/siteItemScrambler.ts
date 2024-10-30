
const scrambleData = {
  BLOG: [
      "B!OG", "B*O*", "B+1G", "8L0#", "B=OG", "B/OG", "P=1G", "BL>G", 
      "B-1*", "BL+G", "B*L1", "BL*G", "B:1G", "B!<G", "B1<G", "B0O8", 
      "B^OG", "P*OG", "B!O3", "B-1G", "P10G", "B:'G", "B*!G", "P^1G"
  ],
  PICS: [
      "P1C^", "P!X*", "P%IC", "P*4S", "P&=C", "PI4S", "P^CS", "P>C-", 
      "PL^S", "P!C*", "P1CZ", "P%#S", "PI+S", "P&^S", "P+IC", "PI<S", 
      "P*CS", "B!*S", "P3CS", "P:C^", "P/IC", "PIXS", "P*^S", "P!C5"
  ],
  INSP: [
      "IN^5", "I*5E", "I>S8", "IN+P", "I^8X", "I=SP", "I/&X", "IN*3", 
      "I4SP", "I%=X", "I-8P", "IN<P", "I!^8", "I/XP", "I<SP", "IM^P", 
      "IP#P", "I<%P", "I#=8", "IP5X", "INSP", "I&SX", "I*5%", "IM&X"
  ]
};

let interval: number | null = null;

export function initTextScramble(element: HTMLElement) {
    const originalText = element.dataset.value || "";
    const possibleSpellings = scrambleData[originalText as keyof typeof scrambleData] || [originalText];
  
    element.onmouseover = () => {
      clearInterval(interval as number);
      interval = window.setInterval(() => {
        element.innerText = possibleSpellings[Math.floor(Math.random() * possibleSpellings.length)];
      }, 50);
    };
  
    element.onmouseout = () => {
      clearInterval(interval as number);
      element.innerText = originalText;
    };
  }