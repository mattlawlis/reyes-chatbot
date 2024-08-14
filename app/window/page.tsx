'use client';

import { OpenAssistantGPTChat, ChatbotConfig } from '@openassistantgpt/ui';

export default function ChatPage() {
  const chatbot: ChatbotConfig = {
    id: '12345',
    name: 'OpenAssistantGPT',

    chatTitle: ' ',
    welcomeMessage:
      "Welcome to the Law Office of George D. Reyes! I am your AI assistant, here to help you with any questions you may have about our legal services. Please note that while I can provide some legal advice, I am not an attorney. If you require specific legal counsel, please schedule a consultation with Mr. Reyes; please call us directly at 713.920.2888.",
    chatMessagePlaceHolder: 'Ask us a question...',

    rightToLeftLanguage: false,

    bubbleColor: 'linear-gradient(to top left, #003366, #336699)',
    bubbleTextColor: '#FFFFFF',

    chatHeaderBackgroundColor: '#FFFFFF',
    chatHeaderTextColor: '#52525b',

    chatbotReplyBackgroundColor: '#e4e4e7',
    chatbotReplyTextColor: '#000000',

    userReplyBackgroundColor: '#e4e4e7',
    userReplyTextColor: '#000000',

    chatbotLogoURL:
      'https://gwetfkan2dovfoiz.public.blob.vercel-storage.com/search-8jZhOvOBPxuTmohrup5TPvSzrjsyog.png',
    chatInputStyle: 'default',

    chatHistoryEnabled: true,
    chatFileAttachementEnabled: true,

    displayFooterText: false,
    footerLink: 'https://www.openassistantgpt.io',
    footerTextName: 'OpenAssistantGPT',
  };

  return (
    <OpenAssistantGPTChat
      chatbot={chatbot}
      path="/api/chat/assistant"
      defaultMessage=""
    />
  );
}
