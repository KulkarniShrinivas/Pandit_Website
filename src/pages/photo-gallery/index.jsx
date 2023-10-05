import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";
import ComingSoon from "../../components/coming-soon/comingSoon";
import {
  btnTextPhoto,
  photoGalleryData,
  vipPhotosData,
} from "../../data/photo-gallery-data";
import "./photoGallery.scss";
import { useEffect, useState } from "react";
import ServicesButton from "../../components/all-services/services-button";
import { btnClickHandler, handleImgClick, srcset } from "./helper";
import { useNavigate, useParams } from "react-router-dom";

const PhotoGallery = () => {
  const [allData, setData] = useState(null);
  const [dialogOpen, setDialogOpen] = useState({
    state: false,
    img: null,
    title: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    if (id === "vip-photos") {
      setData(vipPhotosData);
    } else {
      setData(photoGalleryData);
    }
  }, [id]);

  return (
    <main className="Photo-Gallery">
      <h1 className="heading">
        Photo <span>Gallery</span>
      </h1>

      <div className="btn-container">
        {btnTextPhoto.map((btn) => (
          <ServicesButton
            category={btn.category}
            text={btn.text}
            key={btn.text}
            handleClick={() =>
              btnClickHandler(navigate, isDesktopScreen, btn.category)
            }
          />
        ))}
      </div>

      <ImageList
        sx={{
          maxWidth: 1200,
          maxHeight: 1200,
          width: "100%",
          padding: "0.5rem",
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {allData?.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              onClick={() =>
                handleImgClick(item.img, item.title, setDialogOpen)
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        open={dialogOpen.state}
        onClose={() => setDialogOpen({ img: null, state: false, title: "" })}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <img loading="lazy" src={dialogOpen.img} alt={dialogOpen.title} />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default PhotoGallery;
