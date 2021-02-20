import React from 'react';

const tweet    = 'صممت آلة حاسبة باستخدام Reactjs جربها واعطني رأيك'
               + 'https://spaniarddev.github.io/the-calcoolator/ \n\n';
const tweetURL = 'https://twitter.com/abdulaziz003';

const Menu = props => {
  return (
    <div className={props.showMenu ? 'menu hide' : 'menu'}>
      <small className="goBack" onClick={() => props.toggleMenu()}>
        {'◄ العودة للحساب'}
      </small>
      <section dir="rtl">
        <h6>أخبر اصدقائك</h6>
        <p>مرحبا,</p>
        <p>
          اذا اعتقدت آن  <strong>الآلة الحاسبة الرائعة</strong>  تستحق 
          
          <a
            className="item"
            href={tweetURL}
            rel="noopener noreferrer"
            target="_blank"
            alt="منشن حسابي بتغريدة"
            title="منشن حسابي بتغريدة"
            tabIndex="-1"
          > 
             منشن حسابي بتغريدة 
           </a> 
            واخبر اصدقائك
        </p>
        <p>وبالطبع أي ملاحظات استقبلها بصدر رحب</p>
        <p>أشكرك</p>
        <p>
          <a
            href="https://twitter.com/abdulaziz003/"
            target="_blank"
            rel="noopener noreferrer"
            alt="عبدالعزيز البيضاني"
            title="عبدالعزيز البيضاني"
            tabIndex="-1"
          >
            عبدالعزيز البيضاني
          </a>
        </p>
      </section>
    </div>
  );
};

export default Menu;
