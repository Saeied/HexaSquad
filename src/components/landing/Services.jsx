import ServicesCard from "./Objects/ServicesCard";
import SectionsTitle from "./Objects/SectionsTitle";
import img1 from "@/components/landing/Objects/ServiceSimple.png";
import img2 from "@/components/landing/Objects/ServiceS.png";
import img3 from "@/components/landing/Objects/ServiceMadrak.png";

const Services = () => {
  return (
    <div className="w-full flex flex-col gap-[20px] items-center px-8 lg:px-0">
      <SectionsTitle name="خدمات ما" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-4 lg:px-16">
        <ServicesCard
          img={img1}
          serviceTitle="سادگی خدمات"
          serviceDescription="سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت"
        />
        <ServicesCard
          img={img2}
          serviceTitle="فرصت های شغلی"
          serviceDescription="
                سهولت دسترسی و دریافت
                خدمات از همه ی نقاط کشور
                با کمترین تعرفه و بدون
                نیاز مراجعه حضوری در کل
                فرایند ثبت"
        />
        <ServicesCard
          img={img3}
          serviceTitle="مدرک معتبر"
          serviceDescription="سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت"
        />
      </div>
    </div>
  );
};

export default Services;
