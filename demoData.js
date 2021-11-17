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

    static bestDeals = [
      { id: 1, modal: true, img: demo },
      { id: 2, modal: false, img: demo },
      { id: 3, modal: false, img: demo },
      { id: 4, modal: false, img: demo },
    ];
}

export default demoData;
