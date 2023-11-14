console.log("Задача 3");
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Data {
  id: number;
  email: string;
}
const getData = <T>(COMMENTS_URL: string): Promise<T[]> => {
  return fetch(COMMENTS_URL)
    .then((response) => response.json())
    .then((data) =>
      data.map((d: Data) => ({
        id: d.id,
        email: d.email,
      }))
    );
};
getData<Data>(COMMENTS_URL).then((data) =>
  data.forEach((d) => {
    console.log(`ID: + ${d.id}, email: ${d.email}`);
  })
);
