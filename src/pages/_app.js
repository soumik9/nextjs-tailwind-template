import AppComponent from "@/components/Layout/AppCompoent";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import { dashboardLayoutUrls } from "@/utils/constant/constant";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux-rtk/app/store";

export default function App({ Component, pageProps }) {
  // *global
  const router = useRouter();

  // *states
  const [laoding, setLoading] = useState(true);

  // *checking the window
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoading(false);
    }
  }, []);

  // *loading
  if (laoding) return <>Loading...</>

  // *main component
  if (dashboardLayoutUrls.includes(router.pathname)) {
    return (<>
      <Provider store={store}>
        {/* <CustomHead /> */}
        <AppComponent Component={Component} pageProps={pageProps} dashboard />
      </Provider>
    </>

    )
  } else {
    return (
      <>
        <Provider store={store}>
          {/* <CustomHead /> */}
          <AppComponent Component={Component} pageProps={pageProps} />
        </Provider>
      </>
    )
  }
}
