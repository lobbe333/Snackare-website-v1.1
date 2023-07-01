import { useEffect } from 'react';

const TidioChat = ({ tidioKey, visitor }) => {
  useEffect(() => {
    if (!window.tidioChatApi) {
      document.tidioIdentify = visitor;
      const script = document.createElement('script');
      script.src = `//code.tidio.co/${tidioKey}.js`;
      script.async = true;
      document.body.appendChild(script);

      script.addEventListener('load', () => {
        if (window.tidioChatApi) {
          window.tidioChatApi.setVisitorData(visitor);
        }
      });
    }
  }, [tidioKey, visitor]);

  return null;
};

export default TidioChat;
