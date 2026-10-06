import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";

const NotFound = () => {
  return (
    <PageContainer>
      <section className="rounded-xl border border-tertiary/20 bg-secondary p-5 text-center sm:p-10 lg:p-16">
        <p className="font-code text-xs text-tertiary sm:text-sm">404</p>
        <h1 className="mt-2 font-display text-[20px] font-semibold text-headline sm:text-3xl lg:text-4xl">Page not found</h1>
        <Link to="/catalogue" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm text-offwhite hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          Browse Designs
        </Link>
      </section>
    </PageContainer>
  )
}

export default NotFound
