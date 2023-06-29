import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  name: string;
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ name, page, selectedPage, setSelectedPage }: Props) => {
  //Pasamos SelectedPage a minus.
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div>
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-700" : ""}
      transition duration-500 hover:text-primary-700`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {name}
      </AnchorLink>
    </div>
  );
};

export default Link;
