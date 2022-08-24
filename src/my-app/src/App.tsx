import logo from "./logo.svg";
import wrawlogo from "./write-and-woodsvg.svg";
import "./App.css";

function App() {
  return (
    <div class="App">
      {/* <img src={logo} class="App-logo" alt="logo" /> */}
      <section class="content">
        <h1>Wraw: Write and Wood</h1>
        <p class="large">
          Write and Wood helps you write better and more consistently.
        </p>
        <p>
          When we think about creative writing, we often believe some people are
          just born writers. Instead, we should think about all the tools that
          we currently lack. The lack of engaging suggested prompts to keep you
          in flow, the lack analytical tools for your writing performance. The
          software that enables it all, the word processor, is so ubiquitous
          that it’s ignored.
        </p>
        <p>
          Write and wood is not a faster horse. It is not a better word
          processor.
        </p>
        <p>
          It is a different tool entirely for writing. Allowing writers to bring
          whatever additional tools they prefer.
        </p>
        <p>
          Feedback is critical to writers, that's why our tool is designed
          around giving them as much feedback as possible. We want to make sure
          that writers are not only writing better, but also more consistently.
        </p>
        <p>
          That’s why we built wraw, because we believe writing tools and
          platforms can do so much more to empower us. We’re imagining a tool
          that can think as quickly as we do, take work off of our plates, and
          pull our creativity forward. A tool equipped for the way we write in
          2022, and foundational for how we hope to use it in the future.
        </p>

        <p>We’re not just a tool. We’re a community.</p>

        <p>
          We’re a community of writers, a community of people who want to write
          better, a community of people who want to write more consistently, a
          community of people who want to write the way they want to write!
        </p>

        <p>Join us. Input your email to await wraw.</p>
        <section class="content waiting-list">
              <p class="large"
                style="transition-duration: 1000ms; transition-delay: 150ms;"
              >
                There’s nothing to lose!
              </p>
               {/* <p class="label email-waitinglist">Join the waiting list</p>  */}
              <input type="email" name="email" placeholder="Email"
                style="transition-duration: 750ms; transition-delay: 150ms;"
              />
              <button type="submit" class="waiting-list">Submit</button>
        </section>
      </section>
      <footer class="app-footer">
        <p>© 2022 Write and Wood</p>
        <p>
          Want to follow <a href="https://t.co/2r05fMI2XZ">us</a>?
        </p>
      </footer>
    </div>
  );
}

export default App;
