import React, { useState, useEffect } from 'react';
function ChaProgressBar(props) {
  const [count, setCount] = useState(1);

  window.addEventListener('scroll', () => {
    moveBar('#e74c3c');
  });

  // main code
  function moveBar(color = '#0984e3') {
    let bar = document.querySelector('.bar');
    let w = Math.ceil(
      (Math.round(window.pageYOffset) /
        (document.body.scrollHeight - window.innerHeight)) *
        100
    );
    bar.style.width = w + '%';
    bar.style.background = color;
  }

  return (
    <>
      <div className="bar"></div>
      <main className="elf">
        <div className="row">
          <div className="egs width-5 center">
            <h1>進度條 往下滑!</h1>
          </div>
        </div>
        <div className="row-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            harum dicta accusamus quasi tempore repudiandae autem voluptatem
            minus hic, molestias, provident officiis animi. Ea temporibus nihil
            eius fuga ipsum a amet consequuntur laudantium, eum similique
            praesentium adipisci ipsa deserunt error, eos quisquam aperiam quae?
            Quaerat sit repellat saepe. Qui, maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
        </div>
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
        </div>
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iste omnis, ipsa vitae nisi tempore voluptatum quae praesentium eum
            ducimus deleniti quasi natus eos, reprehenderit doloribus debitis!
            Dignissimos ullam ipsum est dolorem, qui suscipit, sint ab possimus
            autem necessitatibus animi deserunt maxime, dolores minus sit non
            sed illo ea aspernatur quod impedit nostrum. Laborum, mollitia! Quo
            harum, repellendus veritatis nam earum, voluptatibus eaque rem
            reiciendis necessitatibus natus reprehenderit praesentium quasi,
            odit excepturi delectus modi doloribus error non minus veniam
            commodi deleniti nobis. Vero facilis expedita distinctio, dolorum
            repudiandae consequatur mollitia dolor exercitationem voluptas
            quisquam ad nemo recusandae porro quidem accusantium?
          </p>
        </div>
      </main>
    </>
  );
}
export default ChaProgressBar;
