import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../../images/frame.png",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "../../images/crai-center.png",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "../../images/crai-right.png",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
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
