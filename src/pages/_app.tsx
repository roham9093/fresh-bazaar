import "@/styles/globals.css";
import "@/styles/icons.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"
import type { AppProps } from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";

const quickSand = Quicksand({
    subsets:['latin'],
})
const lato = Lato({
    subsets:['latin'],
    weight:['100','300'],
    variable:'--font-lato'
})

export default function App({ Component, pageProps }: AppProps) {

  return(
      <>
          <style jsx global>{`
        html {
            --font-lato: ${lato.style.fontFamily},sans-serif;
          font-family: ${quickSand.style.fontFamily},sans-serif;
        }
      `}</style>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  );
}
