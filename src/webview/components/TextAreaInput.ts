// src/webview/components/TextAreaInput.ts

export interface TextAreaInputOptions {
    placeholder?: string;
    value?: string;
    rows?: number;
    cols?: number;
    onChange?: (event: Event) => void;
  }
  
  export function TextAreaInput(options: TextAreaInputOptions = {}) {
    const {
      placeholder = '',
      value = '',
      onChange,
    } = options;
  
    const textArea = document.createElement('textarea');
    textArea.className = 'text-area-input';
    textArea.placeholder = placeholder;
    textArea.value = value;
  
    if (onChange) {
      textArea.addEventListener('input', onChange);
    }
  
    return textArea;
  }
  