import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGlobalContext from "../hooks/useGlobalContext";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface UnsplashPhoto {
  id: string;
  alt_description?: string;
  urls: {
    regular: string;
    small?: string;
    thumb?: string;
  };
  width: number;
  height: number;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

interface ApiResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { data, isLoading, isError, error } = useQuery<ApiResponse, Error>({
    queryKey: ["images", searchTerm],
    queryFn: async (): Promise<ApiResponse> => {
      const result = await axios.get(`${url}&query=${searchTerm}&per_page=30`);
      return result.data;
    },
    staleTime: 5 * 60 * 1000,
  });
  if (isLoading) {
    return (
      <section className="image-container">
        <div className="loading"></div>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>Error:{error?.message || "Failed to fetch images"}</h4>
      </section>
    );
  }

  const results: UnsplashPhoto[] = data?.results || [];
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found for "{searchTerm}"</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {results.map((item) => {
            console.log(item);
            const url = item?.urls?.regular;
            return (
              <div key={item.id} className="masonry-grid-item">
                <img
                  src={url}
                  alt={item.alt_description || `Unsplash image by ${item.id}`}
                  className="img"
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
                <div className="photo-attribution">
                  Photo by{"  "}
                  <a
                    href={item.user.links.html}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.user.name}
                  </a>
                  {"  "}on Unsplash
                </div>
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default Gallery;
