import PWABadge from "./PWABadge.tsx";
import "./App.css";
import { useEffect, useState } from "react";
import { database } from "./firebase.ts";
import { get, ref } from "firebase/database";

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
  const [data, setData] = useState<string>("");

  useEffect(() => {
    // searchBooks();
    const fetchFunction = async () => {
      const dataRef = ref(database, `username`);
      const dataSnapshot = await get(dataRef);
      setData(dataSnapshot.val() as string);
    };
    fetchFunction();
  }, []);

  return (
    <>
      <div>{data}</div>
      <h1>vite-project</h1>

      <PWABadge />
    </>
  );
}

export default App;
