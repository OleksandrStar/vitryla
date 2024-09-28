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
    <div className="bg-[#003566] text-white pt-5 lg:px-0 px-10 pb-10">
      <div className="mx-auto max-w-[1000px] !outline-0 mt-[20px] md:mt-[2.2rem]">
        <h5 className="text-[30px] md:text-[40px] text-center lg:text-[55px]">
          Що дає карта резидента?
        </h5>
        <p className="md:my-10 my-5 italic text-[14px] text-center max-w-[400px] mx-auto leading-8">
          Ходи з покерфейсом по майстерні, створюй шедеври — і всі будуть
          думати, що ти профі.
        </p>
        <div>
          <div className="font-bold my-4">
            А якщо серйозно, то з картою резидента ти отримаєш:
          </div>
          <div className="gap-y-3 flex flex-col justify-center">
            {textList.map((itemText, index) => (
              <div key={index} className="flex gap-3 my-1 items-center">
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-sign-left"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 2a1 1 0 0 1 .993 .883l.007 .117v2h3a1 1 0 0 1 .993 .883l.007 .117v5a1 1 0 0 1 -.883 .993l-.117 .007h-3v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-5a1 1 0 0 1 -.694 -.28l-.087 -.095l-2 -2.5a1 1 0 0 1 -.072 -1.147l.072 -.103l2 -2.5a1 1 0 0 1 .652 -.367l.129 -.008h5v-2a1 1 0 0 1 1 -1z" />
                  </svg>
                </div>
                <div className="leading-8">{itemText}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          Вартість карти резидента — 249 грн/міс. або 2 499 грн/рік (погодься,
          це вигідніше на 16%)
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;
