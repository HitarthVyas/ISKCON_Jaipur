"use client";

import { Open_Sans, Playfair, Reddit_Mono, Roboto_Condensed } from "next/font/google";

// const play = Playfair({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
// })

const reddit = Roboto_Condensed({
  subsets: ["latin"],
  // weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const contactData = [
  { name: "Dhananjay Sakha Prabhuji", number: "9887090523" },
  { name: "Madhu Gupta Mataji", number: "9252530063" },
  { name: "Sureshwar Gaur Prabhuji", number: "9667043545" },
  { name: "Anand Bandhu Prabhuji", number: "9413676282" },
  { name: "Sunirmal Gaur Prabhuji", number: "9829052981" },
  { name: "Sitaram Pran Prabhuji", number: "9828763255" },
  { name: "Rajiv Garg Prabhuji", number: "9632003290" },
  { name: "Omprakash yadav Prabhuji", number: "9314622460" },
  // { name: "Yatra", number: "9649689649" },
  // { name: "Other Queries", number: "9649689649" },
];

const Contact = () => {
  return (
    // <h2
    //   className={`font-medium text-orange-900 text-center py-10`}
    //   id="contact"
    // >
    //   <span className={`${play.className} text-5xl font-semibold`}>
    //     CONTACT US:
    //   </span>{" "}
    //   9649689649
    // </h2>
    <div className="py-16 px-5 max-w-screen-md m-auto">
      <h2
        className={`${reddit.className} text-5xl font-semibold text-orange-900 text-center pb-5`}
        id="contact"
      >
          CONTACT US: 9649689649
      </h2>
      <table className="w-full">
        <tbody>
          {contactData.map((item, index) => (
            <tr key={index} className="text-sm sm:text-lg">
              <td className="py-2 pr-2 font-semibold border border-white">
                {item.name}:
              </td>
              <td className="py-2 text-right font-semibold border border-white">
                {item.number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
