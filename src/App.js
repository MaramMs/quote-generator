import './App.css';
import React, {useState} from 'react';

import { FiFacebook,  FiLinkedin, FiTwitter } from "react-icons/fi";

import { SiWhatsapp } from "react-icons/si";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)
  const IconShareButton = ({ children, onClick }) => (
    <button onClick={onClick} className="icon">
      {children}
    </button>
  );
  
  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.content}-${quote.author}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        quote.content
      )}%0A%0A-${encodeURIComponent(quote.author)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&quote=${encodeURIComponent(
        quote.content
      )}%0A%0A-${encodeURIComponent(quote.author)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}&title=${encodeURIComponent(
        quote.content
      )}&summary=${encodeURIComponent(quote.author)}`,
      "_blank"
    );
  };
  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>

         
              
        </div>

        <IconShareButton onClick={shareOnTwitter}>
            <FiTwitter />
          </IconShareButton>
          <IconShareButton onClick={shareOnWhatsApp}>
            <SiWhatsapp />
          </IconShareButton>
          <IconShareButton onClick={shareOnFacebook}>
            <FiFacebook />
          </IconShareButton>
          <IconShareButton onClick={shareOnLinkedIn}>
            <FiLinkedin />
          </IconShareButton>
      </div>
    </>
  )
}


export default App;
// i try to use react share package but it not work , i don't know why ? and this way not working facebook and linkedin share buttons 