import {BasicLayout} from "../layouts/BasicLayout/BasicLayout";
import Script from "next/script";

export default function Home() {
  return (
      <>
          {/*<Script*/}
          {/*    src="/js/custom.js"*/}
          {/*    type='module'*/}
          {/*/>*/}

          {/*<Script src="../assets/js/vendor/jquery-3.5.1.min.js" />*/}
          <Script src="../assets/js/vendor/modernizr-3.7.1.min.js" />
          <Script src="../assets/js/popper.min.js"/>
          <Script src="../assets/js/plugins/jquery-ui.min.js"/>

          <Script src="../assets/js/bootstrap.min.js"/>
          <Script src="../assets/js/plugins/plugins.js"/>
          <Script src="../assets/js/main.js"/>


              <BasicLayout>

              </BasicLayout>

      </>
  )
}
