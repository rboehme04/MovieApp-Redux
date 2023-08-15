const processMovieData = (movie, streaming) => ({
  id: movie.imdbID,
  title: movie.Title,
  poster: movie.Poster,
  year: movie.Year,
  actors: movie.Actors,
  description: movie.Plot,
  rating: movie.imdbRating,
  streaming: streaming,
});

const checkStreamingData = streamingObj => {
  for (const key in streamingObj) {
    if (streamingObj[key] !== undefined) {
      return streamingObj
    }
  }
  return undefined
};

const processStreamingData = streaming => ({
  netflix: processStreamingSubsciption(streaming.netflix),
  disney: processStreamingSubsciption(streaming.disney),
  prime: processPrimeData(streaming.prime),
});

processStreamingSubsciption = subscription => {
  if (subscription != undefined) {
    return "sub";
  } else {
    return undefined;
  }
};

const processPrimeData = prime => {
  if (prime) {
    //with subscription
    for (const item in prime) {
      if (item.type === "subscription") {
        return "sub";
      }
    }

    // get lowest price
    let pricePrime = undefined;
    for (const item in prime) {
      if (pricePrime === undefined || prime[item].price !== null && prime[item].price.amount < pricePrime) {
        pricePrime = prime[item].price.amount;
      }
    }
    formattedPricePrime = `${pricePrime} €`;
    return formattedPricePrime;
  } else {
    return undefined;
  }
};

export const fetchMovies = async title => {
  const response =
    title != null
      ? await fetch(
          `http://www.omdbapi.com/?apikey=YOUR_KEY&type=movie&s=${title}`
        )
      : await fetch(
          `http://www.omdbapi.com/?apikey=YOUR_KEY&type=movie&s=Star%20Wars`
        );

  //get key {Search}
  const { Search } = await response.json();

  if (Search != undefined) {
    return Search.map(processMovieData);
  }
  return null;
};

export const fetchMovieDetail = async (title, imdb_id) => {
  const newtitle = title.replace(/ /g, "+");

  const propsPromise = fetchMovieDetailProps(newtitle);
  const streamingPromise = fetchMovieDetailStreaming(imdb_id);
  const [Title, streamingInfo] = await Promise.all([
    propsPromise,
    streamingPromise,
  ]);

  // if no error
  if (!Title.Error) {
    const erg = processMovieData(Title, streamingInfo);
    return erg;
  }
  return null;
};

const fetchMovieDetailProps = async title => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=b86e0541&t=${title}&plot=full`
    );
    return await response.json();
  } catch {
    console.warn("Movie not found");
  }
};

const fetchMovieDetailStreaming = async imdbID => {
  const url = `https://streaming-availability.p.rapidapi.com/v2/get/basic?country=de&imdb_id=${imdbID}&output_language=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "YOUR_KEY",
      "X-RapidAPI-Host": "YOUR_HOST",
    },
  };

  try {
    const response = await fetch(url, options)
    const {
      result: {
        streamingInfo: { de },
      },
    } = await response.json()
    checkUndefined = checkStreamingData(processStreamingData(de))
    return checkUndefined
  } catch (error){
    console.warn(error)
  }
  return undefined
};
