import { NavBar } from "../components/navbar/NavBar";
import { HeaderContent } from "../components/HeaderContent/HeaderContent";
import { Contacts } from "../components/contacts/Contacts";
import { CopyRight } from "../components/copyRight/CopyRight";
import { AddBlog } from "../components/addBlog/AddBlog";

export const AddBlogPage = () => {
  return (
    <>
      <NavBar />
      <AddBlog />
      <Contacts />
      <CopyRight />
    </>
  );
};
