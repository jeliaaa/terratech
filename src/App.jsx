import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
function App() {
  const texts = ['About Us', 'Our Future', 'Our Robot']
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + texts[index] + '</span>';
    },
  };

  return (
    <div className="App">
      <Swiper
        direction={'vertical'}
        pagination={pagination}
        mousewheel
        modules={[Pagination, Mousewheel]}

        className="mySwiper"
      >
        <SwiperSlide>
          <div className='imgOfMain'></div>
        </SwiperSlide>
        <SwiperSlide>Slide 222</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
