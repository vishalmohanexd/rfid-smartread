import GlobalHero from "../../../../components/global/hero";
import GlobalFeatures from "../../../../components/global/features";
import CreatingDesign from "../../../../components/global/design";
import TalkUs from "../../../../components/global/TalkUs";
import Layout from "../../../../hoc/Layout";
import { easFaqData } from "../../../../components/common/Helper";
import Faq from "../../../../components/Home/Faq";
import PageSEO from "../../../../components/common/PageSEO";

const SmartTray = ({ data }) => {
  const datas = JSON.parse(data);
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}${datas.title}`;
  return (
    <>
    <PageSEO
        title={datas.metadata.title}
        canonicalTag={canonicalTag}
        metatitleTag={datas.metadata.titleTag}
        metaDes={datas.metadata.metaDescription}
      />
      <Layout>
        <GlobalHero data={datas.Hero} />
        <GlobalFeatures data={datas.GlobalFeatures} />
        <CreatingDesign data={datas.creatingdesign} />
        <TalkUs pageName={datas.metadata.pageName} />
        <Faq feqData={easFaqData} />
      </Layout>
    </>
  );
};
export async function getStaticProps() {
  const data = await import("./smart-tray.mdx");
  return {
    props: {
      data: JSON.stringify(data),
    },
  };
}
export default SmartTray;
