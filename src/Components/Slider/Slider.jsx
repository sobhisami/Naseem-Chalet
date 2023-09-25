import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../images/frame.png",
    thumbnail: "../../images/frame.png",
  },
  {
    original: "../../images/crai-center.png",
    thumbnail: "../../images/crai-center.png",
  },
  {
    original: "../../images/crai-right.png",
    thumbnail: "../../images/crai-right.png",
  },
];
const Slider = () => {
  return (
    <div style={{background:"var(--bg)" ,paddingBottom:"20px"}}>
      <ImageGallery items={images} />
    </div>
  )
}

export default Slider
