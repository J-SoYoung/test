import PWABadge from "./PWABadge.tsx";
import "./App.css";
import { useEffect } from "react";

function App() {
  // const searchBooks = async () => {
  //   try {
  //     const response = await fetch(
  //       "/search/book?query=주식&display=10&start=1&sort=sim",
  //       {
  //         method: "GET",
  //         headers: {
  //           "X-Naver-Client-Id": import.meta.env.VITE_APP_NAVER_CLIENT_ID,
  //           "X-Naver-Client-Secret": import.meta.env
  //             .VITE_APP_NAVER_CLIENT_SECRET
  //         }
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  useEffect(() => {
    // searchBooks();
  }, []);

  return (
    <>
      <div>이야이야</div>
      <h1>vite-project</h1>

      <PWABadge />
    </>
  );
}

export default App;
