import { useContext } from "react";
import AuthContext from "../auth/auth-context";

const Home = () => {
  const { name, isLoggedIn } = useContext(AuthContext);

  return (
    <section>
      {/* <h1>Home</h1> */}
      {isLoggedIn ? <h1>Welcome back, {name}!</h1> : <h1>Welcome!</h1>}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quas
        architecto, beatae, rem debitis consectetur voluptatem magni voluptas
        eveniet ut culpa a nemo aspernatur? Quasi eveniet quae enim error
        temporibus.
      </p>
      <p>
        Odio ut accusantium, repellendus iusto asperiores provident doloribus
        alias earum magni repudiandae minima optio odit blanditiis! Ut accusamus
        aspernatur perferendis commodi culpa, quo ea omnis similique recusandae
        hic ex perspiciatis.
      </p>
      <p>
        Fuga, provident perspiciatis reprehenderit esse alias cumque voluptas
        qui voluptatum quisquam ut doloribus aliquam corrupti corporis et error
        adipisci vitae excepturi suscipit. Unde laborum, dolore repellendus
        ipsum ex reiciendis eius?
      </p>
      <p>
        Odit, perspiciatis nisi. Minima reiciendis, dolorum culpa nostrum
        accusamus deleniti fuga eveniet. Quasi molestias eligendi in magni
        accusamus voluptatibus. Eius maiores magni facere officia mollitia amet
        doloremque cum voluptates provident.
      </p>
      <p>
        Laborum autem sunt qui, deleniti consequuntur explicabo ex ea nostrum
        perferendis dolorem modi quia dolore ratione dicta quo ullam ad
        exercitationem ab ut voluptate voluptatibus. Officiis nostrum dolor
        error quidem.
      </p>
      <p>
        Tempore, et sapiente natus labore nesciunt deserunt eveniet, tempora
        error eius repudiandae fugit maxime eaque voluptas nihil, quos aliquid
        eligendi! Incidunt voluptate in id tenetur expedita, molestias esse
        dignissimos maiores!
      </p>
      <p>
        Itaque ipsa beatae repudiandae dolorum, minima rem maiores modi sunt
        vitae accusamus, dicta blanditiis. Ab voluptatem, placeat qui odio
        recusandae sunt illo nostrum sint assumenda ipsum nulla eum mollitia
        explicabo!
      </p>
    </section>
  );
};

export default Home;
