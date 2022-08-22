import logo from './logo.svg';
import wrawlogo from './write-and-woodsvg.svg';
import './App.css';

function App() {
  return (
    <div class="App">
      <div></div>
      <div>
      <img src={wrawlogo} alt="write and wood image logo"/>
      <h1>Wraw: Write and Wood</h1>
      {/* <img src={logo} class="App-logo" alt="logo" /> */}
      <p class="large">Write and Wood helps you write better and more consistently.</p>
      <p>When we think about creative writing, 
        we often believe some people are just born writers. 
         Instead, we should think about all the tools that we currently lack. 
         The lack of engaging suggested prompts to keep you in flow, 
         the lack analytical tools for your writing performance. 
         The software that enables it all,
       the word processor, is so ubiquitous that it’s ignored.</p>
       <p>Write and wood is not a faster horse. It is not a better word processor.</p>
       <p>It is a different tool entirely for writing. Allowing writers to bring whatever additional tools they prefer.</p>
       <p>Feedback is critical to writers, that's why our tool is designed around giving them as much feedback as possible.
        We want to make sure that writers are not only writing better, but also more consistently.</p>
       <p>That’s why we built wraw, 
        because we believe writing tools and platforms can do so much more to empower us. 
        We’re imagining a tool that can think as quickly as we do, 
        take work off of our plates, and pull our creativity forward. 
        A tool equipped for the way we write in 2022,
         and foundational for how we hope to use it in the future.</p>

        <p>We’re not just a tool. We’re a community.</p>

        <p>We’re a community of writers,
          a community of people who want to write better,

          a community of people who want to write more consistently,
          a community of people who want to write the way they want to write!</p>

          <p>Join us. Send us an email to await wraw.</p>
          <div class="waiting list">
            <p>waiting list</p>
            <p>email: <input type="email"></input> <button type="submit">Join</button></p>
          </div>
      </div>
      <div></div>
    </div>
  );

}

export default App;
