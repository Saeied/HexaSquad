import { useLayoutEffect } from "react";
import ArticlesMiddleSection from "../../components/articles/MiddleSection";
import Header from "../../components/common/Header";
import AppLayout from "../../layouts/AppLayout";
import articlesHeaderImg from "@/assets/images/articles/Asset.png";

function Articles() {
  useLayoutEffect(() => {
    scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <AppLayout>
      <Header img={articlesHeaderImg} heading="اخبار و مقالات هگزا اسکواد" />
      <ArticlesMiddleSection />
    </AppLayout>
  );
}

export default Articles;
