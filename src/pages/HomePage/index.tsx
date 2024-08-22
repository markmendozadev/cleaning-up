import Container from "@/layout/Container";
import { useEffect } from "react";
import axios from "axios";
function HomePage() {
  console.log("rendered");
  useEffect(() => {
    (async () => {
      axios
        .all([
          axios.get(`https://jsonplaceholder.typicode.com/photos`),
          axios.get("https://jsonplaceholder.typicode.com/photos"),
          axios.get("https://jsonplaceholder.typicode.com/photos"),
          axios.get("https://jsonplaceholder.typicode.com/photos"),
          axios.get("https://jsonplaceholder.typicode.com/photos"),
          axios.get("https://jsonplaceholder.typicode.com/photos"),
          axios.get("https://jsonplaceholder.typicode.com/photos"),
        ])
        .then(
          axios.spread((data1, data2) => {
            // output of req.
            console.log("data1", data1, "data2", data2);
          })
        );
    })();
  }, []);
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  );
}

export default HomePage;
