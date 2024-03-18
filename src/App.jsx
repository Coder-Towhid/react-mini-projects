import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* ACCORDIAN COMPONENT */}
      <Accordian />

      {/* RANDOM COLOR COMPONENT */}
      <RandomColor />

      {/* STAR RATING COMPONENT */}
      <StarRating />

      {/* IMAGE SLIDER COMPONENT */}

      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />

      {/* LOAD MORE DATA */}
      <LoadMoreData/>

      {/* TREEE VIEW COMPONENT */}
      <TreeView menus={menus}/>


      {/*   QR CODE GENERATOR */}

      <QrCodeGenerator />

      {/* LIGHT AND DARK THEME SWITCH */}

      <LightDarkMode />

      {/* SCROLL INDICATOR */}

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
