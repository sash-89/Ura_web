import img1 from './_src/assets/images/Rectangle1.png';
import img2 from './_src/assets/images/Rectangle2.png';
import img3 from './_src/assets/images/Rectangle3.png';
import img4 from './_src/assets/images/Rectangle4.png';
import img5 from './_src/assets/images/Rectangle5.png';
import demo from './_src/assets/images/demo.png';

class demoData {
    static categories = [
      { id: 1, title: 'Clothing', img: img1 },
      { id: 2, title: 'Shoes', img: img2 },
      { id: 3, title: 'Watches', img: img3 },
      { id: 4, title: 'Toys', img: img4 },
      { id: 5, title: 'Bags', img: img5 },
      { id: 6, title: 'Test', img: img1 },
    ];

  static categories1 = [
    { id: 1, title: 'Clothing', img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' },
    { id: 2, title: 'Shoes', img: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' },
    { id: 3, title: 'Watches', img: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' },
    { id: 4, title: 'Toys', img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' },
    { id: 5, title: 'Bags', img: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg' },
    { id: 6, title: 'Toys / Girls / dolls / fashion / Shoes', img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' },
  ];

    static bestDeals = [
      { id: 1, modal: true, img: demo },
      { id: 2, modal: false, img: demo },
      { id: 3, modal: false, img: demo },
      { id: 4, modal: false, img: demo },
    ];
}

export default demoData;
