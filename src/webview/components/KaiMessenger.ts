// src/webview/components/KaiMessenger.ts

export function KaiMessenger() {
  const container = document.createElement('div');
  container.className = 'kai-messenger';

  // Messages container pinned to bottom, grows upward
  const messagesContainer = document.createElement('div');
  messagesContainer.className = 'kai-messages-container';

  // Input bar at bottom
  const inputBar = document.createElement('div');
  inputBar.className = 'kai-input-bar';

  // We'll wrap the icon and textarea together in one element,
  // so it appears as a single input-like container.
  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'kai-input-wrapper';

  // Kai icon
  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'kai-icon-wrapper';
  iconWrapper.innerHTML = `
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_164_156)">
      <path d="M200 61H56C42.7452 61 32 71.7452 32 85V207C32 220.255 42.7452 231 56 231H200C213.255 231 224 220.255 224 207V85C224 71.7452 213.255 61 200 61Z" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M181 180C181 168.954 177.214 160 162.071 160C146.929 160 154.5 172.5 128.946 172.5C103.393 172.5 109.545 160 93.9286 160C78.3125 160 75 168.954 75 180C75 191.046 83.4746 200 93.9286 200H162.071C172.525 200 181 191.046 181 180Z" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M148 170V200" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M108 170V200" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M171.011 60.0799L181.364 21.4429" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M74.9885 60.0799L64.6357 21.4429" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.0005 95.0001L233.5 95M233.5 95L247.5 109M233.5 95L242 86.5" stroke="black" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M84 140C90.6274 140 96 134.627 96 128C96 121.373 90.6274 116 84 116C77.3726 116 72 121.373 72 128C72 134.627 77.3726 140 84 140Z" fill="black"/>
      <path d="M172 140C178.627 140 184 134.627 184 128C184 121.373 178.627 116 172 116C165.373 116 160 121.373 160 128C160 134.627 165.373 140 172 140Z" fill="black"/>
      <path d="M177.741 34.966C185.209 36.9672 192.886 32.535 194.887 25.0665C196.888 17.598 192.456 9.92128 184.988 7.9201C177.519 5.91891 169.843 10.3511 167.841 17.8196C165.84 25.2881 170.272 32.9648 177.741 34.966Z" fill="black"/>
      <path d="M68.2592 34.9659C75.7277 32.9647 80.1598 25.288 78.1586 17.8195C76.1575 10.351 68.4807 5.91881 61.0122 7.91999C53.5437 9.92118 49.1115 17.5979 51.1127 25.0664C53.1139 32.5349 60.7906 36.9671 68.2592 34.9659Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_164_156">
      <rect width="256" height="256" fill="white"/>
      </clipPath>
      </defs>
    </svg>
    `;

  // Text area for user input
  const textArea = document.createElement('textarea');
  textArea.className = 'kai-input';
  textArea.placeholder = 'Ask Kai';

  // Put icon + textarea in the same wrapper
  inputWrapper.appendChild(iconWrapper);
  inputWrapper.appendChild(textArea);

  // Append the wrapper to the input bar
  inputBar.appendChild(inputWrapper);

  // Put everything in the main container
  container.appendChild(messagesContainer);
  container.appendChild(inputBar);

  // Kai's introduction messages array (with updated dialogue)
  const kaiMessages = [
    `
      <p>Greetings, builder. I am Kai—your AI mentor inside the Edupunk OS dojo. 
      Here, we train AI the way it should be—without corporate gatekeeping.</p>
    `,
    `
      <p>Before we begin, let’s check if your system is battle-ready.</p>
      <p><button class="kai-check-btn">Run System Check</button></p>
    `
  ];

  let currentIndex = 0;

  function showNextMessage() {
    if (currentIndex < kaiMessages.length) {
      addKaiMessage(kaiMessages[currentIndex]);
      currentIndex++;
      // Wait 2 seconds, then show the next message
      setTimeout(showNextMessage, 2000);
    }
  }

  function addKaiMessage(messageHtml: string) {
    // Temporarily hide scrollbar during animation
    messagesContainer.style.overflowY = 'hidden';

    const messageContainer = document.createElement('div');
    messageContainer.className = 'kai-chat-message';

    const bubble = document.createElement('div');
    bubble.className = 'kai-chat-bubble';
    bubble.innerHTML = messageHtml;

    messageContainer.appendChild(bubble);
    messagesContainer.appendChild(messageContainer);

    // After ~0.4s slide-up, re-enable scroll & scroll to bottom
    setTimeout(() => {
      messagesContainer.style.overflowY = 'auto';
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 400);
  }

  // Kick off Kai’s messages after a short delay
  setTimeout(showNextMessage, 1000);

  return container;
}
