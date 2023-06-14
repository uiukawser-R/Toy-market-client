// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';

// const ShopByCategory = () => {
//     const categories = [
//         { id: 1, title: 'All Category', content: 'This is the content for Category 1.' },
//         { id: 2, title: 'Math Toys', content: 'This is the content for Category 2.' },
//         { id: 3, title: 'Engineering Toys', content: 'This is the content for Category 3.' },
//         { id: 4, title: 'Science Toys', content: 'This is the content for Category 3.' },
//     ];
//     return (
//         <Tabs>
//             <TabList className="bg-orange-300">
//                 {categories.map((category) => (
//                     <Tab key={category.id}>{category.title}</Tab>
//                 ))}
//             </TabList>

//             {categories.map((category) => (
//                 <TabPanel key={category.id}>
//                     <div className="flex justify-between mt-5">
//                         <div>
//                             <h2>{category.title} Content</h2>
//                             <p>{category.content}</p>
//                         </div>
//                         <div>
//                             <h2>{category.title} Content</h2>
//                             <p>{category.content}</p>
//                         </div>
//                         <div>
//                             <h2>{category.title} Content</h2>
//                             <p>{category.content}</p>
//                         </div>
//                         <div>
//                             <h2>{category.title} Content</h2>
//                             <p>{category.content}</p>
//                         </div>
//                     </div>
//                 </TabPanel>
//             ))}
//         </Tabs>
//     );
// };

// export default ShopByCategory;


import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
  const categories = [
    { id: 1, title: 'All Category', content: 'This is the content for Category 1.' },
    { id: 2, title: 'Math Toys', content: 'This is the content for Category 2.' },
    { id: 3, title: 'Engineering Toys', content: 'This is the content for Category 3.' },
    { id: 4, title: 'Science Toys', content: 'This is the content for Category 4.' },
  ];

  return (
    <Tabs>
      <TabList className="bg-orange-300 flex flex-wrap justify-center  mb-5 ">
        {categories.map((category) => (
          <Tab key={category.id} className="w-full md:w-auto mr-7">
            <Link>{category.title}</Link>
          </Tab>
        ))}
      </TabList>

      {categories.map((category) => (
        <TabPanel key={category.id}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4">
              <h2>{category.title} Content</h2>
              <p>{category.content}</p>
            </div>
            <div className="w-full md:w-1/4">
              <h2>{category.title} Content</h2>
              <p>{category.content}</p>
            </div>
            <div className="w-full md:w-1/4">
              <h2>{category.title} Content</h2>
              <p>{category.content}</p>
            </div>
            <div className="w-full md:w-1/4">
              <h2>{category.title} Content</h2>
              <p>{category.content}</p>
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ShopByCategory;
