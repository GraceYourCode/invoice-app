import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./invoice-layout.module.scss";
import { Header } from "../../components";
import { ErrorView, LoadingView } from "../../../../components";

export const InvoiceLayout = () => {
  return (
    <div className={styles.wrapper}>
      <ErrorBoundary
        FallbackComponent={(props) => <ErrorView fullscreen {...props} />}
      >
        <Suspense fallback={<LoadingView text="Loading..." fullscreen />}>
          <Header />
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
