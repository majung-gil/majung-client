/* eslint import/newline-after-import: "off" */
import { useEffect } from 'react';
declare global {
  interface Window {
    kakao: any;
  }
}

function Home() {
  return <div className="main">하이염</div>;
}

export default Home;
