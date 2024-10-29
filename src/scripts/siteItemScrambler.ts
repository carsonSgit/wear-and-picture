
const scrambleData: Record<string, string[]> = {
    BLOG: ["*LO4", "b!^P", "P10G", "G#=8", "B1OG", "&-iG", "B0L8", "B:'G"],
    PICS: ["P!C^", "bI>S", "E!XZ", "P1C5", "%L4A", "B&*s", "P+CS", "G!<3"],
    INSP: ["I/5E", "^F=P", "!^SV", "1O8/", "2N%P", "l^5X", "M4d^", "I*&!"],
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