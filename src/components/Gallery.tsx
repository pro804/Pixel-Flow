import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface UnsplashPhoto {
  id: string;
  alt_description?: string;
  urls: {
    regular: string;
  };
}

interface ApiResponse {
  results: UnsplashPhoto[];
}

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&query=cat`;

const Gallery = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images"],
    queryFn: async (): Promise<ApiResponse> => {
      // Type the function return
      const result = await axios.get(url);
      return result.data;
    },
  });
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an Error...</h4>
      </section>
    );
  }

  const results: UnsplashPhoto[] = data?.results || [];
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        console.log(item);
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
