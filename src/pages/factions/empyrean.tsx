import React from "react";
import fs from "fs";
import { GetStaticProps } from "next";

type PageProps = { data: string };

export const getStaticProps = (async (context) => {
  const data = fs.readFileSync("src/data/the_empyrean_lol.html", "utf-8");
  console.log(process.cwd());
  console.log(data);
  return { props: { data } };
}) satisfies GetStaticProps<PageProps>;

const lol = (props: PageProps) => {
  return <div dangerouslySetInnerHTML={{ __html: props.data }} />;
};

export default lol;
