import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { fetchGalleryWithTopic } from "./gallery-api";
import LoadMoreBtn from "./LoadMoreBtn";
import Modal from "react-modal";
import ImageModal from "./ImageModal";

Modal.setAppElement("#root");

const KEY = "xpqP5Qt73Cu7T5diEjSLw0JQUOTvS7JxZKgcQrF6CNQ";

function App() {
  const [gallery, setGallery] = useState([]);
  const [searchImages, setSearchImages] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPageUrl, setCurrentPageUrl] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    async function fetchImages() {
      if (!searchImages) return;
      try {
        setLoading(true);
        const data = await fetchGalleryWithTopic(
          searchImages,
          KEY,
          currentPageUrl
        );
        setGallery((prev) => [...prev, ...data]);
      } catch (e) {
        setGallery([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [searchImages, currentPageUrl]);

  const handleSearchBar = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.input.value.trim() === "") {
      toast.error("Empty search bar!", {
        position: "top-right",
      });
      return;
    }
    setGallery([]);
    setCurrentPageUrl(1);
    setSearchImages(form.elements.input.value);
    form.reset();
  };

  const handleOnClick = () => {
    setCurrentPageUrl(currentPageUrl + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchBar} />
      {error && <ErrorMessage />}
      {gallery && gallery.length > 0 ? (
        <>
          <ImageGallery
            gallery={gallery}
            onImageClick={handleImageClick}
          />
          <LoadMoreBtn onNextPage={handleOnClick} />
        </>
      ) : (
        <p></p>
      )}
      {loading && <Loader />}
      {selectedImage && (
        <ImageModal
          onSelectedImage={selectedImage}
          onCloseModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;