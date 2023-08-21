import { useState } from "react";

export default function Card() {
  const [country, setCountry] = useState("in");
  const [data, setData] = useState([]);

  function api() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=` +
        country +
        `&apiKey=295abd87da954878ad529b04525b5891`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data["articles"]);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type Your City"
        onChange={(e) => setCountry(e.target.value)}
      />

      <button onClick={api}>Cheak News</button>

      <div className="card">
        {data.map((Curr_article, i) => (
          <div key={i}>
            <div>{Curr_article.author}</div>

            <div>{Curr_article.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
