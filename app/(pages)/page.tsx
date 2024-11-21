

import { CryptoNews } from "../components/CryptoNews/cryptoNews.server";
import {LatestNews} from "../components/LatestNews/LatestNews";
import Spinner from "../components/Spinner/Spinner";


export default  function IndexPage() {
  
  return (
    <div className="flex jusftify-between">
      <LatestNews/>
      <CryptoNews/>
    </div>
  );
}
