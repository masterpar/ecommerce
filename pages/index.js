import {BasicLayout} from "../layouts/BasicLayout/BasicLayout";
import Script from "next/script";



export default function Home() {
  return (
      <>
          {/*<Script*/}
          {/*    src="/js/jquery-main.js"*/}
          {/*    // strategy="lazyOnload"*/}
          {/*/>*/}
          {/*<Script*/}
          {/*    src="/js/custom.js"*/}
          {/*    // strategy="lazyOnload"*/}
          {/*/>*/}
          {/*<Script*/}
          {/*    src="../assets/js/slicknav.js"*/}
          {/*/>*/}
      <BasicLayout>
          <>Home</>
      </BasicLayout>
      </>
  )
}
