import { Logo } from '@/shared/ui';
import React from 'react';
import { Link } from 'react-router-dom';

export const FooterApp: React.FC = () => {
  return (
    <footer className="px-12 py-8  max-w-[1400px]">
      <div className="flex justify-between">
        <Logo>React</Logo>
        <div className="flex gap-8">
          <div>
            <p className="text-[#2D2D2F] font-normal text mb-2">
              Присоединяйтесь к нам
            </p>
            <div className="flex gap-4">
              <img
                src="/images/social/Facebook.svg"
                alt="facebook"
                className="w-7"
              />
              <img src="/images/social/Vk.svg" alt="vk" className="w-7" />
              <img
                src="/images/social/Inst.svg"
                alt="instagram"
                className="w-7"
              />
            </div>
          </div>
          <div>
            <p className="text-[#2D2D2F] font-normal text mb-2">
              Присоединяйтесь к нам
            </p>
            <div className="flex gap-4">
              <img
                src="/images/payment/AppStore.png"
                alt="AppStore"
                className="w-28"
              />
              <img
                src="/images/payment/GooglePlay.png"
                alt="GooglePlay"
                className="w-28"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-16 text-[#8D8D8E]">
        <Link to={'#'}>© Sionic</Link>
        <Link to={'#'}>Политика конфиденциальности</Link>
        <Link to={'#'}>Правовая информация</Link>
      </div>
    </footer>
  );
};
