import "@/styles/globals.css";
import "@/styles/icons.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"
import type { AppProps } from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const quickSand = Quicksand({
    subsets:['latin'],
})
const lato = Lato({
    subsets:['latin'],
    weight:['100','300'],
    variable:'--font-lato'
})

export default function App({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient({
        defaultOptions:{
            queries:{
                refetchOnWindowFocus:false,
                refetchIntervalInBackground:false,
                retry:0,
            }
        }
    });

  return(
      <>
          <style jsx global>{`
        html {
            --font-lato: ${lato.style.fontFamily},sans-serif;
          font-family: ${quickSand.style.fontFamily},sans-serif;
        }
      `}</style>
          <QueryClientProvider client={queryClient}>
              <Layout>
                  <Component {...pageProps} />
                  <ToastContainer
                      autoClose={false}
                      hideProgressBar={false}
                      draggable={false}
                      position="top-right"
                      theme="light"
                  />
              </Layout>
          </QueryClientProvider>
      </>
  );
}
