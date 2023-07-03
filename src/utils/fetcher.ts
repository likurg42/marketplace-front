type FetchParameters = Parameters<typeof fetch>;

const fetcher = (...args: FetchParameters) =>
  fetch(...args).then((res) => res.json());

export default fetcher;
