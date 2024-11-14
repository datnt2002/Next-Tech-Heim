import ImgAndTitleCard from "@/components/molecules/Card/ImgAndTitleCard";
import CarouselWithButton from "@/components/molecules/Carousel";
import React from "react";

type Props = {};

const CategoryList = (props: Props) => {
  // const listCategory = [];
  return (
    <section className="py-6 md:py-12 my-3">
      {/* <CarouselWithButton slideToShow={6}>
        {listCategory?.map((item) => {
          return (
            <ImgAndTitleCard
              key={item.id}
              name={item.categoryName}
              img={item.image}
              className="my-3"
            />
          );
        })}
      </CarouselWithButton> */}
    </section>
  );
};

export default CategoryList;
