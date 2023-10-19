import { AiOutlineShareAlt } from 'react-icons/ai';

import clipboardCopy from 'clipboard-copy';

const handleCopyToClipboard = () => {
  clipboardCopy(window.location.href);
  alert('URL copied to clipboard');
};

const CopyButton = () => {
  return (
    <div className="">
      <AiOutlineShareAlt
        className="text-3xl  cursor-pointer group"
        onClick={handleCopyToClipboard}
      />
    </div>
  );
};

export default CopyButton;