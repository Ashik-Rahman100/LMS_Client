"use client";
import { FC, useState } from "react";
import Header from "./components/Header";
import Heading from "./utils/Heading";

interface Props {}
const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading
        title="E-Learning"
        description="E-Learning is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,Redux,Machine Learning"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
      {/* <Hero /> */}
    </div>
  );
};

export default Page;
