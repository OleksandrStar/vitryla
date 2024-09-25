import React from "react";

const textList = [
  "Доступ до найсучаснішого обладнання (фрезери, циркулярки, фуганки — у нас є все!)",
  "Вхід до закритої тусовки мейкерів і запрошення на спеціальні івенти",
  "Можливість забронювати верстат на цілий день — тільки ти, верстат і проєкт",
  "Персональне місце для зберігання твоїх інструментів та матеріалів (особиста шафка або полиця)",
  "І, звісно, безкоштовна кава — натхнення ж не прийде без неї!",
];

const ResidentCard = () => {
  return (
    <div>
      <div className="container !outline-0 mt-[20px] md:mt-[2.2rem] max-w-[1280px]">
        <h5 className="text-[25px] md:text-[35px] text-center lg:text-[55px]">
          Що дає карта резидента?
        </h5>
        <p className="md:my-10 my-5 italic text-[14px]">
          Ходи з покерфейсом по майстерні, створюй шедеври — і всі будуть
          думати, що ти профі.
        </p>
        <div>
          <span>А якщо серйозно, то з картою резидента ти отримаєш:</span>
          {textList.map((item, index) => (
            <div key={index} className="my-1 flex gap-3"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;
